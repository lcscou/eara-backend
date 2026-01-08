import "./editor.scss";
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "react";
import {
  MantineProvider,
  Card,
  Text,
  Badge,
  Skeleton,
  Stack,
  Image,
  Group,
} from "@mantine/core";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { postsPerPage, columns } = attributes;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const blockProps = useBlockProps({
    className: "wp-block-eara-latest-events",
  });

  useEffect(() => {
    // Fetch latest events posts
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `/wp-json/wp/v2/events?_embed&per_page=${postsPerPage}&orderby=date&order=desc`
        );
        const data = await response.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching events:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [postsPerPage]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const parsed = new Date(dateString);
    if (Number.isNaN(parsed.getTime())) return dateString;
    return parsed
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
      .toUpperCase()
      .replace(".", "");
  };

  const sanitizeExcerpt = (excerpt) =>
    excerpt ? excerpt.replace(/<[^>]*>/g, "").trim() : "";

  return (
    <div {...blockProps}>
      <MantineProvider>
        <InspectorControls>
          <PanelBody
            title={__("Latest Events Settings", "eara")}
            initialOpen={true}
          >
            {/* <RangeControl
              label={__("Number of Events", "eara")}
              value={postsPerPage}
              onChange={(v) => setAttributes({ postsPerPage: v })}
              min={1}
              max={12}
              help={__("How many events to display", "eara")}
            />

            <RangeControl
              label={__("Columns", "eara")}
              value={columns}
              onChange={(v) => setAttributes({ columns: v })}
              min={1}
              max={4}
              help={__("Number of columns in the grid", "eara")}
            /> */}
          </PanelBody>
        </InspectorControls>

        <div
          className="latest-events-grid"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: "1.5rem",
            marginTop: "1rem",
          }}
        >
          {loading ? (
            Array.from({ length: postsPerPage }).map((_, i) => (
              <Card
                key={i}
                className="latest-event-card"
                padding="0"
                radius="lg"
                withBorder
                shadow="sm"
              >
                <div className="latest-event-card__inner">
                  <div className="latest-event-card__media">
                    <Skeleton height="100%" radius="md" />
                  </div>
                  <div className="latest-event-card__body">
                    <Skeleton height={14} width="24%" radius="xl" />
                    <Skeleton height={24} radius="md" mt="sm" />
                    <Skeleton height={14} width="40%" radius="md" mt="sm" />
                    <Skeleton height={14} width="90%" radius="md" mt="md" />
                    <Skeleton height={14} width="70%" radius="md" />
                  </div>
                </div>
              </Card>
            ))
          ) : posts.length > 0 ? (
            posts.map((post) => {
              const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
              const categories = post._embedded?.["wp:term"]?.[0] || [];
              const categoryName = (
                categories[0]?.name ||
                post.acf?.category ||
                ""
              ).toUpperCase();
              const excerpt = sanitizeExcerpt(post.content.rendered).substring(0, 100);
              const startDate = formatDate(post.acf?.start_date || post.date);
              const location = (post.acf?.location || "").trim();

              return (
                <Card
                  key={post.id}
                  className="latest-event-card bg-white"
                  padding="0"
                  radius="lg"
                  withBorder
                  shadow="sm"
                >
                  <div className="latest-event-card__inner bg-white flex">
                    <div className="latest-event-card__media w-[250px]">
                      {categoryName && (
                        <Badge
                          className="latest-event-card__badge"
                          color="indigo"
                          variant="filled"
                          radius="md"
                        >
                          {categoryName}
                        </Badge>
                      )}
                      {featuredImage ? (
                        <Image
                          src={featuredImage.source_url}
                          alt={post.title.rendered}
                          fit="cover"
                          height={230}
                          radius="md"
                        />
                      ) : (
                        <Skeleton height={230} radius="md" />
                      )}
                    </div>

                    <div className="latest-event-card__body flex flex-col p-4 justify-center ">
                      <Text fw={600} size="xl" mb={6} lineClamp={2}>
                        {post.title.rendered}
                      </Text>
                      {startDate && (
                        <Text size="xs" fw={700} c="#312f86" mb={4}>
                          {startDate}
                        </Text>
                      )}

                      {location && (
                        <Text size="sm" c="dimmed" mb={6}>
                          {location.toUpperCase()}
                        </Text>
                      )}

                      {excerpt && (
                        <Text size="md" c="dimmed" lh={1.6} lineClamp={3}>
                          {excerpt}
                        </Text>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })
          ) : (
            <Text c="dimmed">{__("No events found", "eara")}</Text>
          )}
        </div>
      </MantineProvider>
    </div>
  );
}
