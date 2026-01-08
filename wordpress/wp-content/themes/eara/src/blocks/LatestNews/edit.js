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
import { PanelBody, RangeControl } from "@wordpress/components";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { postsPerPage, columns } = attributes;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const blockProps = useBlockProps({
    className: "wp-block-eara-latest-news",
  });

  useEffect(() => {
    // Fetch latest news posts
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `/wp-json/wp/v2/news?_embed&per_page=${postsPerPage}&orderby=date&order=desc`
        );
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
  }, [postsPerPage]);

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
        {/* <InspectorControls>
          <PanelBody title={__('Latest News Settings', 'eara')} initialOpen={true}>
            <RangeControl
              label={__('Number of Posts', 'eara')}
              value={postsPerPage}
              onChange={(v) => setAttributes({ postsPerPage: v })}
              min={1}
              max={12}
              help={__('How many posts to display', 'eara')}
            />

            <RangeControl
              label={__('Columns', 'eara')}
              value={columns}
              onChange={(v) => setAttributes({ columns: v })}
              min={1}
              max={4}
              help={__('Number of columns in the grid', 'eara')}
            />
          </PanelBody>
        </InspectorControls> */}

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
