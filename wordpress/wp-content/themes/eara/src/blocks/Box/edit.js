const { __ } = wp.i18n;
const { InspectorControls, InnerBlocks, useBlockProps } = wp.blockEditor;
const { PanelBody, TextControl, SelectControl } = wp.components;
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { href, borderRadius, borderColor, borderWidth, borderStyle } = attributes;

  const borderStyles = {
    border: borderWidth && borderStyle && borderColor 
      ? `${borderWidth} ${borderStyle} ${borderColor}` 
      : undefined,
    borderRadius: borderRadius || undefined,
  };

  const blockProps = useBlockProps({
    className: "eara-box-editor",
    style: borderStyles,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Border Settings", "eara")} initialOpen={true}>
          <TextControl
            label={__("Border Radius", "eara")}
            value={borderRadius}
            onChange={(value) => setAttributes({ borderRadius: value })}
            placeholder={__("e.g. 8px or 1rem", "eara")}
            help={__("Set the border radius", "eara")}
          />
          <TextControl
            label={__("Border Width", "eara")}
            value={borderWidth}
            onChange={(value) => setAttributes({ borderWidth: value })}
            placeholder={__("e.g. 1px or 2px", "eara")}
            help={__("Set the border width", "eara")}
          />
          <SelectControl
            label={__("Border Style", "eara")}
            value={borderStyle}
            options={[
              { label: "Solid", value: "solid" },
              { label: "Dashed", value: "dashed" },
              { label: "Dotted", value: "dotted" },
              { label: "Double", value: "double" },
              { label: "None", value: "none" },
            ]}
            onChange={(value) => setAttributes({ borderStyle: value })}
          />
          <TextControl
            label={__("Border Color", "eara")}
            value={borderColor}
            onChange={(value) => setAttributes({ borderColor: value })}
            placeholder={__("e.g. #000000 or rgba(0,0,0,0.1)", "eara")}
            help={__("Set the border color", "eara")}
          />
        </PanelBody>
        <PanelBody title={__("Link Settings", "eara")}>
          <TextControl
            label={__("Link URL (optional)", "eara")}
            value={href}
            onChange={(value) => setAttributes({ href: value })}
            placeholder={__("https://example.com", "eara")}
            help={__("If set, the entire box will be clickable.", "eara")}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
      
        <InnerBlocks />
      </div>
    </>
  );
}
