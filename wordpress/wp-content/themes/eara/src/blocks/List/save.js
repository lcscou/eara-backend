const { InnerBlocks } = wp.blockEditor;

export default function Save({ attributes }) {
  const { withIcon, size, color, spacing, listStyleType } = attributes;

  const classList = ['eara-list', `eara-list--${size}`];
  
  return (
    <ul 
      className={classList.join(' ')}
      data-with-icon={withIcon ? 'true' : 'false'}
      data-color={color}
      data-spacing={spacing}
      style={{
        listStyleType: listStyleType,
      }}
    >
      <InnerBlocks.Content />
    </ul>
  );
}
