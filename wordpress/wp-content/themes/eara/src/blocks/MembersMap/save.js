const { useBlockProps } = wp.blockEditor;

// Construct the path to the image relative to the block
const mapImageUrl = new URL('./members-map.png', import.meta.url).href;

export default function save({ attributes }) {
  const { width, height } = attributes;

  const blockProps = useBlockProps.save({
    className: "eara-members-map",
  });

  const containerStyle = {
    width: width || "100%",
    height: height || "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  };

  return (
    <div {...blockProps} style={containerStyle}>
      <img src={mapImageUrl} alt="Members Map" style={imageStyle} />
    </div>
  );
}
