const { useBlockProps } = wp.blockEditor;

export default function Save({ attributes }) {
  const { label, description, placeholder, required, min, max, step } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div
      {...blockProps}
      data-label={label}
      data-description={description}
      data-placeholder={placeholder}
      data-required={required}
      data-min={min}
      data-max={max}
      data-step={step}
      data-type="number"
    />
  );
}
