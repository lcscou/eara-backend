const {
  InspectorControls,
  InnerBlocks,
  RichText,
  useBlockProps,
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  SelectControl,
  ToggleControl,
  TextareaControl,
} = wp.components;
const { __ } = wp.i18n;

import { MantineProvider, Container, Title, Text } from "@mantine/core";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { title, subtitle, className, description, py, noTitle, containerSize } = attributes;

  const blockProps = useBlockProps({
    className: className,
  });

  return (
    <div {...blockProps}>
      <MantineProvider>
        <InspectorControls>
          <PanelBody title={__("Section Settings", "eara")} initialOpen={true}>
            <ToggleControl
              label={__("Hide Title", "eara")}
              checked={noTitle}
              onChange={(v) => setAttributes({ noTitle: v })}
              help={__("Hide the title and subtitle section", "eara")}
            />

            <SelectControl
              label={__("Container Size", "eara")}
              value={containerSize}
              options={[
                { label: "Extra Small (xs)", value: "xs" },
                { label: "Small (sm)", value: "sm" },
                { label: "Medium (md)", value: "md" },
                { label: "Large (lg)", value: "lg" },
                { label: "Extra Large (xl)", value: "xl" },
              ]}
              onChange={(v) => setAttributes({ containerSize: v })}
              help={__("Maximum width of the section container", "eara")}
            />

            <SelectControl
              label={__("Vertical Padding", "eara")}
              value={py}
              options={[
                { label: "Extra Small (xs)", value: "xs" },
                { label: "Small (sm)", value: "sm" },
                { label: "Medium (md)", value: "md" },
                { label: "Large (lg)", value: "lg" },
                { label: "Extra Large (xl)", value: "xl" },
                { label: "2XL", value: "2xl" },
                { label: "3XL", value: "3xl" },
                { label: "None (0)", value: "0" },
              ]}
              onChange={(v) => setAttributes({ py: v })}
              help={__("Top and bottom padding of the section", "eara")}
            />

            <TextControl
              label={__("Custom CSS Class", "eara")}
              value={className}
              onChange={(v) => setAttributes({ className: v })}
              help={__("Add custom CSS class names", "eara")}
            />
          </PanelBody>

          <PanelBody title={__("Content", "eara")} initialOpen={false}>
            <TextControl
              label={__("Subtitle", "eara")}
              value={subtitle}
              onChange={(v) => setAttributes({ subtitle: v })}
              help={__("Small text above the title", "eara")}
            />

            <TextControl
              label={__("Title", "eara")}
              value={title}
              onChange={(v) => setAttributes({ title: v })}
              help={__("Main section title", "eara")}
            />

            <TextareaControl
              label={__("Description", "eara")}
              value={description}
              onChange={(v) => setAttributes({ description: v })}
              help={__("Description text below the title", "eara")}
              rows={4}
            />
          </PanelBody>
        </InspectorControls>

        <div style={{ paddingTop: py === '0' ? 0 : undefined, paddingBottom: py === '0' ? 0 : undefined }}>
          <Container size={containerSize}>
            {!noTitle && (title || subtitle || description) && (
              <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                {subtitle && (
                  <Text size="sm" c="dimmed" fw={600} tt="uppercase" mb="xs">
                    {subtitle}
                  </Text>
                )}
                {title && (
                  <Title order={2} mb="md">
                    {title}
                  </Title>
                )}
                {description && (
                  <Text size="lg" c="dimmed" maw={700} mx="auto">
                    {description}
                  </Text>
                )}
              </div>
            )}
            
            <InnerBlocks />
          </Container>
        </div>
      </MantineProvider>
    </div>
  );
}
