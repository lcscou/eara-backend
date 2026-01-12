const { RichText, useBlockProps } = wp.blockEditor;

export default function Save({ attributes }) {
  const { content, author, backgroundColor, showAvatar, avatarImage, variant, style } = attributes;

  const backgroundColorMap = {
    white: "#FFFFFF",
    "light-blue": "#F0F4FF",
    "light-green": "#F0FFF4",
    "light-gray": "#F7F7F7",
  };

  const blockProps = useBlockProps.save({
    className: `eara-quote eara-quote--${backgroundColor} eara-quote--${variant}`,
    style: {
      backgroundColor: style?.color?.background || backgroundColorMap[backgroundColor],
      color: style?.color?.text,
      paddingTop: style?.spacing?.padding?.top || "32px",
      paddingRight: style?.spacing?.padding?.right || "32px",
      paddingBottom: style?.spacing?.padding?.bottom || "32px",
      paddingLeft: style?.spacing?.padding?.left || "32px",
      marginTop: style?.spacing?.margin?.top,
      marginRight: style?.spacing?.margin?.right,
      marginBottom: style?.spacing?.margin?.bottom,
      marginLeft: style?.spacing?.margin?.left,
      borderRadius: "8px",
      boxShadow: variant === "highlighted" ? "0 4px 12px rgba(0,0,0,0.1)" : "none",
      fontSize: style?.typography?.fontSize,
      textAlign: style?.typography?.textAlign,
    },
  });

  return (
    <div {...blockProps}>
      <div className="eara-quote__mark">
        <span style={{
          fontSize: style?.typography?.fontSize || "48px",
          color: style?.color?.text || "#3A3A6B",
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
          style={{
            fontSize: style?.typography?.fontSize,
            color: style?.color?.text,
            textAlign: style?.typography?.textAlign,
          }}
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
