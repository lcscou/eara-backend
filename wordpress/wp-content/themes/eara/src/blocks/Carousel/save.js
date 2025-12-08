const { InnerBlocks, useBlockProps } = wp.blockEditor;

export default function save({ attributes }) {
  const {
    withControls,
    withIndicators,
    slideGap,
    slideSize,
    height,
    initialSlide,
  } = attributes;

  const blockProps = useBlockProps.save({
    'data-with-controls': withControls,
    'data-with-indicators': withIndicators,
    'data-slide-gap': slideGap,
    'data-slide-size': slideSize,
    'data-height': height,
    'data-initial-slide': initialSlide,
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
