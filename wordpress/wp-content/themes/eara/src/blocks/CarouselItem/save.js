const { InnerBlocks, useBlockProps } = wp.blockEditor;

export default function save({ attributes }) {
  const { backgroundColor, padding } = attributes;

  const blockProps = useBlockProps.save({
    style: {
      backgroundColor: backgroundColor || undefined,
      padding: padding || undefined,
    },
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
