import './editor.scss';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from 'react';
import { MantineProvider, Card, Image, Text, Group, Avatar, Skeleton, Stack } from '@mantine/core';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { postsPerPage, columns } = attributes;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const blockProps = useBlockProps({
    className: 'wp-block-eara-latest-news',
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
        console.error('Error fetching posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [postsPerPage]);

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: '2rem',
    marginTop: '1rem',
  };

  return (
    <div {...blockProps}>
      <MantineProvider>
        <InspectorControls>
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
        </InspectorControls>

        <div style={containerStyle}>
          {loading ? (
            Array.from({ length: postsPerPage }).map((_, i) => (
              <Card key={i} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Skeleton height={200} />
                </Card.Section>
                <Stack gap="xs" mt="md">
                  <Skeleton height={20} radius="md" />
                  <Skeleton height={15} radius="md" width="80%" />
                  <Skeleton height={15} radius="md" width="60%" />
                </Stack>
              </Card>
            ))
          ) : posts.length > 0 ? (
            posts.map((post) => {
              const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
              const author = post._embedded?.author?.[0];

              return (
                <Card key={post.id} shadow="sm" padding="lg" radius="md" withBorder>
                  {featuredImage && (
                    <Card.Section>
                      <Image
                        src={featuredImage.source_url}
                        height={200}
                        alt={post.title.rendered}
                      />
                    </Card.Section>
                  )}

                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500} size="lg" lineClamp={2}>
                      {post.title.rendered}
                    </Text>
                  </Group>

                  {author && (
                    <Group gap="xs" mt="md" pt="md" style={{ borderTop: '1px solid #e9ecef' }}>
                      <Avatar src={author.avatar_urls?.[48]} size="sm" radius="xl" />
                      <Text size="sm" c="dimmed">
                        {author.name}
                      </Text>
                    </Group>
                  )}
                </Card>
              );
            })
          ) : (
            <Text c="dimmed">{__('No posts found', 'eara')}</Text>
          )}
        </div>
      </MantineProvider>
    </div>
  );
}
