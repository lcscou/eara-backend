import './editor.scss';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from 'react';
import { MantineProvider, Card, Text, Badge, Skeleton, Stack } from '@mantine/core';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { postsPerPage, columns } = attributes;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const blockProps = useBlockProps({
    className: 'wp-block-eara-latest-events',
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
        console.error('Error fetching events:', error);
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
          <PanelBody title={__('Latest Events Settings', 'eara')} initialOpen={true}>
            <RangeControl
              label={__('Number of Events', 'eara')}
              value={postsPerPage}
              onChange={(v) => setAttributes({ postsPerPage: v })}
              min={1}
              max={12}
              help={__('How many events to display', 'eara')}
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
                <Stack gap="xs">
                  <Skeleton height={15} radius="md" width="30%" />
                  <Skeleton height={24} radius="md" />
                  <Skeleton height={15} radius="md" width="100%" />
                  <Skeleton height={15} radius="md" width="80%" />
                </Stack>
              </Card>
            ))
          ) : posts.length > 0 ? (
            posts.map((post) => {
              const categories = post._embedded?.['wp:term']?.[0] || [];
              const excerpt = post.excerpt?.rendered
                ? post.excerpt.rendered.replace(/<[^>]*>/g, '').trim()
                : '';

              return (
                <Card key={post.id} shadow="sm" padding="lg" radius="md" withBorder>
                  {categories.length > 0 && (
                    <Badge color="blue" variant="light" mb="sm">
                      {categories[0].name}
                    </Badge>
                  )}

                  <Text fw={600} size="lg" mb="xs" lineClamp={2}>
                    {post.title.rendered}
                  </Text>

                  {excerpt && (
                    <Text size="sm" c="dimmed" lineClamp={3}>
                      {excerpt}
                    </Text>
                  )}
                </Card>
              );
            })
          ) : (
            <Text c="dimmed">{__('No events found', 'eara')}</Text>
          )}
        </div>
      </MantineProvider>
    </div>
  );
}
