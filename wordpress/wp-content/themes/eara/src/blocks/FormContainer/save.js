const { InnerBlocks, useBlockProps } = wp.blockEditor;

export default function Save({ attributes }) {
  const { recipient, successMessage, errorMessage } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div
      {...blockProps}
      data-recipient={recipient}
      data-success-message={successMessage}
      data-error-message={errorMessage}
    >
      <InnerBlocks.Content />
    </div>
  );
}
