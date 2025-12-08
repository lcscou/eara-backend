const { InspectorControls, InnerBlocks, useBlockProps } = wp.blockEditor;
const { PanelBody, TextControl } = wp.components;
const { __ } = wp.i18n;
const { useSelect } = wp.data;

import { MantineProvider, Alert } from "@mantine/core";

export default function Edit({ attributes, setAttributes, clientId }) {
  const { backgroundColor, padding } = attributes;

  // Check if this block has a Carousel parent
  const parentBlockId = useSelect(
    (select) => {
      const { getBlockParents, getBlock } = select('core/block-editor');
      const parents = getBlockParents(clientId);
      
      // Find the first parent that is a carousel
      for (const parentId of parents) {
        const parent = getBlock(parentId);
        if (parent && parent.name === 'eara/carousel') {
          return parentId;
        }
      }
      return null;
    },
    [clientId]
  );

  const blockProps = useBlockProps({
    style: {
      backgroundColor: backgroundColor || undefined,
      padding: padding || undefined,
      minHeight: '100px',
    },
  });

  return (
    <div {...blockProps}>
      <MantineProvider>
        <InspectorControls>
          <PanelBody title={__("Carousel Item Settings", "eara")} initialOpen={true}>
            <TextControl
              label={__("Background Color", "eara")}
              value={backgroundColor}
              onChange={(v) => setAttributes({ backgroundColor: v })}
              placeholder={__("e.g., #f0f0f0", "eara")}
            />

            <TextControl
              label={__("Padding", "eara")}
              value={padding}
              onChange={(v) => setAttributes({ padding: v })}
              placeholder={__("e.g., 2rem", "eara")}
            />
          </PanelBody>
        </InspectorControls>

        {!parentBlockId && (
          <Alert color="yellow" title={__("Warning", "eara")} mb="md">
            {__("Carousel Item must be placed inside a Carousel block.", "eara")}
          </Alert>
        )}

        <div
          style={{
            border: "1px dashed #ccc",
            borderRadius: "4px",
            padding: "12px",
            minHeight: "80px",
          }}
        >
          <InnerBlocks />
        </div>
      </MantineProvider>
    </div>
  );
}
