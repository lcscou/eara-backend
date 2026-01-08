import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { backgroundColor, image, orientation } = attributes;

  const blockProps = useBlockProps.save({
    className: `wp-block-eara-section-card orientation-${orientation}`,
    style: {
      backgroundColor: backgroundColor || '#f5f6fb',
    },
  });

  return (
    <div {...blockProps}>
      <div className="section-card-inner">
        <div className="section-card-media">
          {image.url && <img src={image.url} alt={image.alt || ''} />}
        </div>

        <div className="section-card-content">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}
