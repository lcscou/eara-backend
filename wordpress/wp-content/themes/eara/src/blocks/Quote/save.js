const { RichText } = wp.blockEditor;

export default function Save({ attributes }) {
  const { content, author, backgroundColor, showAvatar, avatarImage, variant } = attributes;

  const backgroundColorMap = {
    white: "#FFFFFF",
    "light-blue": "#F0F4FF",
    "light-green": "#F0FFF4",
    "light-gray": "#F7F7F7",
  };

  return (
    <div
      className={`eara-quote eara-quote--${backgroundColor} eara-quote--${variant}`}
      style={{
        backgroundColor: backgroundColorMap[backgroundColor],
        padding: "32px",
        borderRadius: "8px",
        boxShadow: variant === "highlighted" ? "0 4px 12px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div className="eara-quote__mark">
        <span style={{
          fontSize: "48px",
          color: "#3A3A6B",
          lineHeight: "1",
        }}>
          &ldquo;
        </span>
      </div>

      <div className="eara-quote__content">
        <RichText.Content
          tagName="p"
          value={content}
          className="eara-quote__text"
        />
      </div>

      <div className="eara-quote__footer">
        <div className="eara-quote__author-wrapper">
          {showAvatar && avatarImage.url && (
            <img
              src={avatarImage.url}
              alt={author}
              className="eara-quote__avatar"
            />
          )}

          <RichText.Content
            tagName="p"
            value={author}
            className="eara-quote__author"
          />
        </div>
      </div>
    </div>
  );
}
