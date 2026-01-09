export default function Save(props) {
  const { attributes } = props;
  const { mapUrl, height, width, title, border, borderRadius } = attributes;

  if (!mapUrl) {
    return null;
  }

  return (
    <div
      className="wp-block-eara-google-maps"
      style={{
        border: border ? '1px solid #ddd' : 'none',
        borderRadius: `${borderRadius}px`,
        overflow: 'hidden',
        marginBottom: '1em',
      }}
    >
      <iframe
        width={width}
        height={height}
        style={{
          border: 'none',
          borderRadius: `${borderRadius}px`,
          display: 'block',
        }}
        src={mapUrl}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    </div>
  );
}
