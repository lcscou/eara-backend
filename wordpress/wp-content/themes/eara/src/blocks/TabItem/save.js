const { InnerBlocks, useBlockProps } = wp.blockEditor;

export default function save({ attributes }) {
  const { title, image } = attributes;

  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps} className="eara-tab-item" data-tab-title={title}>
      {image && image.url && (
        <div className="eara-tab-item__image">
          <img
            src={image.url}
            alt={image.alt || title}
            className="eara-tab-item__image-img"
          />
        </div>
      )}

      <div className="eara-tab-item__content">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
