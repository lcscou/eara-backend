const { __ } = wp.i18n;
const { InspectorControls, InnerBlocks, useBlockProps } = wp.blockEditor;
const { PanelBody, TextControl } = wp.components;

export default function Edit({ attributes, setAttributes }) {
  const { backgroundColor, padding, margin, href } = attributes;

  const style = {
    backgroundColor: backgroundColor || undefined,
    padding: padding || "20px",
    margin: margin || "0",
    border: attributes.border || undefined,
    borderRadius: attributes.borderRadius || "20px",
  };

  const blockProps = useBlockProps({ style });

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Box Settings", "eara")} initialOpen={true}>
          <TextControl
            label={__("Background Color", "eara")}
            value={backgroundColor}
            onChange={(value) => setAttributes({ backgroundColor: value })}
            placeholder={__("e.g. #f0f0f0 or rgba(0,0,0,0.05)", "eara")}
          />
          <TextControl
            label={__("Border Radius", "eara")}
            value={attributes.borderRadius}
            onChange={(value) => setAttributes({ borderRadius: value })}
            placeholder={__("e.g. 6px", "eara")}
          />
          <TextControl
            label={__("Border", "eara")}
            value={attributes.border}
            onChange={(value) => setAttributes({ border: value })}
            placeholder={__("e.g. 1px solid #ccc", "eara")}
          />

          <TextControl
            label={__("Padding", "eara")}
            value={padding}
            onChange={(value) => setAttributes({ padding: value })}
            placeholder={__("e.g. 20px 16px", "eara")}
          />

          <TextControl
            label={__("Margin", "eara")}
            value={margin}
            onChange={(value) => setAttributes({ margin: value })}
            placeholder={__("e.g. 0 auto", "eara")}
          />

          <TextControl
            label={__("Link URL (optional)", "eara")}
            value={href}
            onChange={(value) => setAttributes({ href: value })}
            placeholder={__("https://example.com", "eara")}
          />
        </PanelBody>
      </InspectorControls>

      <div
        style={{
          border: "1px dashed #d0d0d0",
          borderRadius: "6px",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {href && (
          <div style={{ marginBottom: "8px", fontSize: "12px", color: "#555" }}>
            {__("This box will link to:", "eara")} {href}
          </div>
        )}

        <InnerBlocks />
      </div>
    </div>
  );
}
