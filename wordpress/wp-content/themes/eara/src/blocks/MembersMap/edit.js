const { __ } = wp.i18n;
const { InspectorControls, useBlockProps } = wp.blockEditor;
const { PanelBody, TextControl } = wp.components;

// Construct the path to the image relative to the block
const mapImageUrl = new URL('./members-map.png', import.meta.url).href;

export default function Edit({ attributes, setAttributes }) {
  const { width, height } = attributes;

  const blockProps = useBlockProps({
    className: "eara-members-map-editor",
  });

  const containerStyle = {
    width: width || "100%",
    height: height || "auto",
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    overflow: "hidden",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Dimensions", "eara")} initialOpen={true}>
          <TextControl
            label={__("Width", "eara")}
            value={width}
            onChange={(value) => setAttributes({ width: value })}
            placeholder="100%"
            help={__("e.g. 100%, 500px, etc.", "eara")}
          />
          <TextControl
            label={__("Height", "eara")}
            value={height}
            onChange={(value) => setAttributes({ height: value })}
            placeholder="500px"
            help={__("e.g. 500px, 100vh, etc.", "eara")}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps} style={containerStyle}>
        <img src={mapImageUrl} alt="Members Map" style={imageStyle} />
      </div>
    </>
  );
}
