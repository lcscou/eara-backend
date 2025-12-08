const { InspectorControls, InnerBlocks, RichText, useBlockProps } =
  wp.blockEditor;
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
  const {
    title,
    subtitle,
    backgroundColor,
    description,
    py,
    noTitle,
    className,
    containerSize,
  } = attributes;

  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <MantineProvider>
        <InspectorControls>
          <PanelBody title={__("Content", "eara")} initialOpen={true}>
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
          <PanelBody title={__("Section Settings", "eara")} initialOpen={false}>
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
                { label: "None", value: "none" },
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
              label={__("Background Color", "eara")}
              value={backgroundColor}
              onChange={(v) => setAttributes({ backgroundColor: v })}
              help={__("Background color of the section", "eara")}
            />
          </PanelBody>
        </InspectorControls>

        <section
          class="py-20 "
          style={{ backgroundColor: backgroundColor || "transparent" }}
        >
          {!noTitle && (
            <div className="w-full items-start gap-20 sm:flex">
              <div
                style={{ borderBottom: "1px solid #dee2e6" }}
                className=" w-fit  border-b border-b-gray-400 py-2 pl-20 sm:pl-40"
              >
                <small className="uppercase">{subtitle}</small>
              </div>
              <div className="sm:px-unset mt-5 max-w-2xl grow px-[16px] sm:mt-0">
                <Title order={2} className="text-primaryColor">
                  {title}
                  {!title && "Section Title"}
                </Title>
                {description && <Text mt={15}>{description}</Text>}
              </div>
            </div>
          )}
          <Container
            {...(containerSize == "none"
              ? { px: 0, fluid: true }
              : { size: containerSize })}
            mt={60}
          >
            <InnerBlocks />
          </Container>
        </section>

        {/* <Container size={containerSize}>
            {!noTitle && (title || subtitle || description) && (
              <div className="bg-red-200" style={{ marginBottom: '2rem', textAlign: 'center' }}>
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
          </Container> */}
      </MantineProvider>
    </div>
  );
}
