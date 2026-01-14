const { InnerBlocks, useBlockProps } = wp.blockEditor;

export default function save({ attributes }) {
  const { href, borderRadius, borderColor, borderWidth, borderStyle } = attributes;

  const borderStyles = {
    border: borderWidth && borderStyle && borderColor 
      ? `${borderWidth} ${borderStyle} ${borderColor}` 
      : undefined,
    borderRadius: borderRadius || undefined,
  };

  const blockProps = useBlockProps.save({
    style: borderStyles,
  });

  if (href) {
    return (
      <a {...blockProps} href={href}>
        <InnerBlocks.Content />
      </a>
    );
  }

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
