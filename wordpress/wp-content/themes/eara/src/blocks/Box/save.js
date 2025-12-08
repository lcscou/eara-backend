const { InnerBlocks, useBlockProps } = wp.blockEditor;

export default function save({ attributes }) {
  const { backgroundColor, padding, margin, href } = attributes;

  const style = {
    backgroundColor: backgroundColor || undefined,
    padding: padding || undefined,
    margin: margin || undefined,
  };

  const blockProps = useBlockProps.save({ style });

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
