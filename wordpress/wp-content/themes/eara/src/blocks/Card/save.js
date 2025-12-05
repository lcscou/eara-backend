const { InnerBlocks } = wp.blockEditor;

export default function Save({ attributes }) {
  const { variant, title, link, featuredImage, icon } = attributes;

  const CardWrapper = ({ children }) => {
    if (link) {
      return (
        <a 
          href={link} 
          className={`eara-card eara-card--${variant}`}
          style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
        >
          {children}
        </a>
      );
    }
    return (
      <div className={`eara-card eara-card--${variant}`}>
        {children}
      </div>
    );
  };

  return (
    <CardWrapper>
      {featuredImage.url && (
        <div className="eara-card__image">
          <img 
            src={featuredImage.url} 
            alt={featuredImage.alt || title} 
          />
        </div>
      )}

      <div className="eara-card__content">
        {variant && (
          <span className="eara-card__badge" data-variant={variant}>
            {variant}
          </span>
        )}

        <div className="eara-card__header">
          <h3 className="eara-card__title">
            {title}
          </h3>
          {icon && (
            <span className="eara-card__icon">
              {icon}
            </span>
          )}
        </div>

        <div className="eara-card__description">
          <InnerBlocks.Content />
        </div>
      </div>
    </CardWrapper>
  );
}
