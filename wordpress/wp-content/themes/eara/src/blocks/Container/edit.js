const {
  InspectorControls,
  InnerBlocks,
  useBlockProps,
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  ToggleControl,
  TextControl,
} = wp.components;
const { __ } = wp.i18n;

import { MantineProvider, Container } from "@mantine/core";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { size, fluid, p, px, py } = attributes;

  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <MantineProvider>
        <InspectorControls>
          <PanelBody title={__("Container Settings", "eara")} initialOpen={true}>
            <SelectControl
              label={__("Size", "eara")}
              value={size}
              options={[
                { label: "Extra Small (xs)", value: "xs" },
                { label: "Small (sm)", value: "sm" },
                { label: "Medium (md)", value: "md" },
                { label: "Large (lg)", value: "lg" },
                { label: "Extra Large (xl)", value: "xl" },
              ]}
              onChange={(value) => setAttributes({ size: value })}
              help={__("Maximum width of the container. Ignored if fluid is enabled.", "eara")}
            />
            
            <ToggleControl
              label={__("Fluid", "eara")}
              checked={fluid}
              onChange={(value) => setAttributes({ fluid: value })}
              help={__("Enable to make container take 100% width.", "eara")}
            />
          </PanelBody>

          <PanelBody title={__("Padding", "eara")} initialOpen={false}>
            <SelectControl
              label={__("Padding (all sides)", "eara")}
              value={p}
              options={[
                { label: "None", value: "0" },
                { label: "Extra Small (xs)", value: "xs" },
                { label: "Small (sm)", value: "sm" },
                { label: "Medium (md)", value: "md" },
                { label: "Large (lg)", value: "lg" },
                { label: "Extra Large (xl)", value: "xl" },
              ]}
              onChange={(value) => setAttributes({ p: value })}
            />

            <TextControl
              label={__("Horizontal Padding (px)", "eara")}
              value={px}
              onChange={(value) => setAttributes({ px: value })}
              help={__("Custom horizontal padding (e.g., 20px, 2rem). Overrides padding setting.", "eara")}
              placeholder="e.g., 20px or md"
            />

            <TextControl
              label={__("Vertical Padding (py)", "eara")}
              value={py}
              onChange={(value) => setAttributes({ py: value })}
              help={__("Custom vertical padding (e.g., 20px, 2rem). Overrides padding setting.", "eara")}
              placeholder="e.g., 20px or md"
            />
          </PanelBody>
        </InspectorControls>

        <Container 
          size={fluid ? "100%" : size}
          fluid={fluid}
          p={p}
          px={px || undefined}
          py={py || undefined}
        >
          <InnerBlocks />
        </Container>
      </MantineProvider>
    </div>
  );
}
