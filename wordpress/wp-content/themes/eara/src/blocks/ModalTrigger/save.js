const { InnerBlocks, useBlockProps } = wp.blockEditor;

export default function save({ attributes }) {
  const { triggerId } = attributes;

  const blockProps = useBlockProps.save({
    className: "eara-modal-trigger",
    "data-modal-trigger": triggerId,
    style: {
      cursor: "pointer",
    },
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
