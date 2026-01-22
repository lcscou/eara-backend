export default function Save(props) {
  const { attributes } = props;
  const { imageUrl, imageAlt, width, height, credits, creditWebsite, creditsMoreInfo } = attributes;

  if (!imageUrl) return null;

  const style = {
    width: width === 'auto' ? 'auto' : width || 'auto',
    height: height === 'auto' ? 'auto' : height || 'auto',
    maxWidth: '100%',
    display: 'block',
  };

  return (
    <div className="wp-block-eara-media-bank">
      <figure>
        <img src={imageUrl} alt={imageAlt || ''} style={style} />
        {(credits || creditWebsite || creditsMoreInfo) && (
          <figcaption className="eara-media-bank__credits">
            {credits && <span>{credits}</span>}
            {creditWebsite && (
              <span>
                {credits ? ' • ' : ''}
                <a href={creditWebsite} target="_blank" rel="noopener noreferrer">Website</a>
              </span>
            )}
            {creditsMoreInfo && (
              <span>
                {(credits || creditWebsite) ? ' • ' : ''}
                <a href={creditsMoreInfo} target="_blank" rel="noopener noreferrer">More Info</a>
              </span>
            )}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
