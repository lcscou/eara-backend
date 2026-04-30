import "./editor.scss";
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "react";
import {
  MantineProvider,
  Card,
  Image,
  Text,
  Group,
  Avatar,
  Skeleton,
  Stack,
  Title,
} from "@mantine/core";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
  PanelBody,
  CheckboxControl,
  SelectControl,
  Notice,
} from "@wordpress/components";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { mode, selectedNews = [] } = attributes;
  const postsPerPage = 3;
  const [posts, setPosts] = useState([]);
  const [newsOptions, setNewsOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const blockProps = useBlockProps({
    className: "wp-block-eara-latest-news",
  });

  useEffect(() => {
    const fetchNewsOptions = async () => {
      try {
        const response = await fetch(
          "/wp-json/wp/v2/news?per_page=100&_fields=id,title"
        );
        const data = await response.json();
        setNewsOptions(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching news options:", error);
        setNewsOptions([]);
      }
    };

    fetchNewsOptions();
  }, []);

  useEffect(() => {
    // Fetch posts based on mode
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const endpoint =
          mode === "highlight" && selectedNews.length > 0
            ? `/wp-json/wp/v2/news?_embed&include=${selectedNews
                .slice(0, 3)
                .join(",")}&orderby=include&per_page=3`
            : `/wp-json/wp/v2/news?_embed&per_page=${postsPerPage}&orderby=date&order=desc`;

        const response = await fetch(endpoint);
        const data = await response.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [mode, selectedNews]);

  const handleToggleNews = (postId) => {
    const isSelected = selectedNews.includes(postId);

    if (isSelected) {
      setAttributes({
        selectedNews: selectedNews.filter((id) => id !== postId),
      });
      return;
    }

    if (selectedNews.length >= 3) {
      return;
    }

    setAttributes({ selectedNews: [...selectedNews, postId] });
  };

  // Helper to compute a simple reading time for preview
  const getReadingTime = (content) => {
    if (!content) return "2 min read";
    const words = content
      .replace(/<[^>]*>/g, "")
      .trim()
      .split(/\s+/).length;
    const minutes = Math.max(1, Math.round(words / 200));
    return `${minutes} min read`;
  };

  return (
    <div {...blockProps}>
      <MantineProvider>
        <InspectorControls>
          <PanelBody title={__("Latest News Settings", "eara")} initialOpen={true}>
            <SelectControl
              label={__("Mode", "eara")}
              value={mode}
              options={[
                { label: __("Latest", "eara"), value: "latest" },
                { label: __("Highlight", "eara"), value: "highlight" },
              ]}
              onChange={(value) => setAttributes({ mode: value })}
            />

            {mode === "highlight" && (
              <>
                <p>{__("News", "eara")}</p>

                {selectedNews.length >= 3 && (
                  <Notice status="warning" isDismissible={false}>
                    {__("You can select up to 3 news posts.", "eara")}
                  </Notice>
                )}

                {newsOptions.length === 0 ? (
                  <p>{__("No news posts found.", "eara")}</p>
                ) : (
                  newsOptions.map((post) => {
                    const isChecked = selectedNews.includes(post.id);
                    const isDisabled = !isChecked && selectedNews.length >= 3;

                    return (
                      <CheckboxControl
                        key={post.id}
                        label={post.title?.rendered || __("Untitled", "eara")}
                        checked={isChecked}
                        disabled={isDisabled}
                        onChange={() => handleToggleNews(post.id)}
                      />
                    );
                  })
                )}
              </>
            )}
          </PanelBody>
        </InspectorControls>

        <div className="grid gap-8 sm:grid-cols-4 sm:grid-rows-4">
          {loading ? (
            // Show skeletons following the target layout: 1 large + 2 small
            [0, 1, 2].map((i) => (
              <Card
                key={`s-${i}`}
                className={
                  i === 0
                    ? "sm:col-span-2 sm:row-span-4"
                    : "sm:col-span-2 sm:row-span-2"
                }
                shadow="sm"
                padding="lg"
                radius="lg"
                withBorder
              >
                <Card.Section>
                  <Skeleton height={i === 0 ? 320 : 200} />
                </Card.Section>
                <Stack gap="xs" mt="md">
                  <Skeleton height={20} radius="lg" />
                  {i === 0 && <Skeleton height={15} radius="lg" width="90%" />}
                  <Skeleton height={15} radius="lg" width="60%" />
                </Stack>
              </Card>
            ))
          ) : posts.length > 0 ? (
            posts.slice(0, Math.min(postsPerPage || 3, 3)).map((post, idx) => {
              const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
              const author = post._embedded?.author?.[0];

              const cardClasses =
                idx === 0
                  ? "sm:col-span-2 sm:row-span-4 bg-white"
                  : "sm:col-span-2 sm:row-span-2 bg-[#eaeaea]";
              const imageHeight = idx === 0 ? 320 : 200;

              return (
                <Card
                  key={post.id}
                  className={cardClasses}
                  shadow="sm"
                  padding="lg"
                  radius="lg"
                  withBorder
                >
                  {featuredImage && (
                    <Card.Section>
                      <Image
                        src={featuredImage.source_url}
                        height={imageHeight}
                        alt={post.title.rendered}
                      />
                    </Card.Section>
                  )}

                  <Stack gap="xs" mt="md">
                    <Title
                      order={5}
                      fw={500}
                      size={idx === 0 ? "lg" : "md"}
                      lineClamp={2}
                    >
                      {post.title.rendered}
                    </Title>
                    {idx === 0 && (
                      <Text
                        size="sm"
                        c="dimmed"
                        lineClamp={3}
                        dangerouslySetInnerHTML={{
                          __html: post.content?.rendered || "",
                        }}
                      />
                    )}
                  </Stack>

                  <Group
                    gap="xs"
                    mt="md"
                    pt="md"
                    style={{ borderTop: "1px solid #e9ecef" }}
                  >
                    {/* {author && <Avatar src={author.avatar_urls?.[48]} size="sm" radius="xl" />} */}
                    <Text size="sm" c="dimmed">
                      {author?.name || "EARA TEAM"}
                    </Text>
                    <Text size="sm" c="dimmed">
                      • {getReadingTime(post.content?.rendered)}
                    </Text>
                  </Group>
                </Card>
              );
            })
          ) : (
            <Text c="dimmed">{__("No posts found", "eara")}</Text>
          )}
        </div>

        <Group justify="center" mt="lg">
          <a
            href="/news"
            className="text-xs uppercase tracking-wide text-indigo-700 hover:text-indigo-900"
          >
            {__("All News", "eara")} →
          </a>
        </Group>
      </MantineProvider>
    </div>
  );
}
