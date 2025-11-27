const { InnerBlocks } = wp.blockEditor;

export default function Save(props) {
  const { attributes } = props;
  const { size, fluid, p, px, py } = attributes;

  // Build class names based on Mantine Container structure
  const className = `eara-container ${fluid ? 'eara-container--fluid' : ''}`;
  
  // Build inline styles
  const styles = {};
  
  if (!fluid && size) {
    styles['--container-size'] = size;
  }
  
  if (px) {
    styles['--container-px'] = px;
  }
  
  if (py) {
    styles['--container-py'] = py;
  }
  
  if (p && !px && !py) {
    styles['--container-p'] = p;
  }

  return (
    <div className={className} style={Object.keys(styles).length > 0 ? styles : undefined} data-size={size} data-fluid={fluid}>
      <InnerBlocks.Content />
    </div>
  );
}
