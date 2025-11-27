export default function Save(props) {
  const { attributes } = props;
  const { 
    label, 
    link, 
    target, 
    variant, 
    size, 
    color, 
    radius, 
    fullWidth, 
    disabled,
    loading,
    uppercase,
    leftIcon,
    rightIcon
  } = attributes;

  const Element = link && link !== '#' ? 'a' : 'button';
  const elementProps = Element === 'a' 
    ? { href: link, target: target, rel: target === '_blank' ? 'noopener noreferrer' : undefined }
    : { type: 'button', disabled: disabled };

  const className = `eara-button ${fullWidth ? 'eara-button--full-width' : ''} ${loading ? 'eara-button--loading' : ''}`;
  
  const styles = {
    '--button-variant': variant,
    '--button-size': size,
    '--button-color': color,
    '--button-radius': radius,
  };

  if (uppercase) {
    styles.textTransform = 'uppercase';
  }

  return (
    <Element 
      className={className}
      style={styles}
      data-variant={variant}
      data-size={size}
      data-color={color}
      data-radius={radius}
      data-disabled={disabled}
      data-loading={loading}
      {...elementProps}
    >
      <span className="eara-button__inner">
        {loading && (
          <span className="eara-button__loader">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="50 50" />
            </svg>
          </span>
        )}
        {leftIcon && !loading && <span className="eara-button__left-icon">{leftIcon}</span>}
        <span className="eara-button__label">{label}</span>
        {rightIcon && !loading && <span className="eara-button__right-icon">{rightIcon}</span>}
      </span>
    </Element>
  );
}
