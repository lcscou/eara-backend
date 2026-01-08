export default function Save({ attributes }) {
  const { images, layout, columns, gap } = attributes;

  if (images.length === 0) {
    return null;
  }

  const gridStyle = {
    display: layout === "masonry" ? "block" : "grid",
    gridTemplateColumns: layout === "grid" ? `repeat(${columns}, 1fr)` : undefined,
    gap: layout === "grid" ? `${gap}px` : undefined,
    columnCount: layout === "masonry" ? columns : undefined,
    columnGap: layout === "masonry" ? `${gap}px` : undefined,
  };

  return (
    <div className={`eara-gallery eara-gallery--${layout}`}>
      <div className="eara-gallery__grid" style={gridStyle}>
        {images.map((image, index) => {
          const ImageContent = (
            <div
              className="eara-gallery__item"
              style={{
                marginBottom: layout === "masonry" ? `${gap}px` : undefined,
                breakInside: layout === "masonry" ? "avoid" : undefined,
              }}
            >
              <div className="eara-gallery__image-wrapper">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="eara-gallery__image"
                  loading="lazy"
                />
              </div>
            </div>
          );

          if (image.link) {
            return (
              <a
                key={index}
                href={image.link}
                className="eara-gallery__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ImageContent}
              </a>
            );
          }

          return <div key={index}>{ImageContent}</div>;
        })}
      </div>
    </div>
  );
}
