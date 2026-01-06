const { InnerBlocks, useBlockProps } = wp.blockEditor;

export default function save({ attributes }) {
  const { backgroundImage, innerContainer, overlayColor, overlayOpacity } = attributes;

  const style = {
    backgroundImage: backgroundImage?.url ? `url(${backgroundImage.url})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%'
  };

  const blockProps = useBlockProps.save({ className: 'eara-hero-home', style });

  return (
    <div {...blockProps}>
      <div className="eara-hero-home__ratio">
        {overlayOpacity > 0 && (
          <div
            className="eara-hero-home__overlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: overlayColor,
              opacity: overlayOpacity / 100,
              pointerEvents: 'none',
              zIndex: 1
            }}
          />
        )}
        <div className={innerContainer ? 'eara-hero-home__container' : undefined} style={{ position: 'relative', zIndex: 2 }}>
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}
