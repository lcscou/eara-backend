const { useBlockProps } = wp.blockEditor;

export default function Save({ attributes }) {
  const { label, loadingLabel } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div
      {...blockProps}
      data-label={label}
      data-loading-label={loadingLabel}
      data-type="submit"
    />
  );
}
