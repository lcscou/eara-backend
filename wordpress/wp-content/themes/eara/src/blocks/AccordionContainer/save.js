const { InnerBlocks } = wp.blockEditor;

export default function Save(props) {
  const { attributes } = props;
  const { 
    variant, 
    radius, 
    chevronPosition, 
    chevronSize,
    disableChevronRotation,
    multiple,
    loop
  } = attributes;

  return (
    <div 
      className="eara-accordion-container"
      data-variant={variant}
      data-radius={radius}
      data-chevron-position={chevronPosition}
      data-chevron-size={chevronSize}
      data-disable-chevron-rotation={disableChevronRotation}
      data-multiple={multiple}
      data-loop={loop}
    >
      <InnerBlocks.Content />
    </div>
  );
}
