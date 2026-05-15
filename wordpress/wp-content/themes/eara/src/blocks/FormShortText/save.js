const { useBlockProps } = wp.blockEditor;

export default function Save({ attributes }) {
  const { label, description, placeholder, required } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div
      {...blockProps}
      data-label={label}
      data-description={description}
      data-placeholder={placeholder}
      data-required={required}
      data-type="short-text"
    />
  );
}
