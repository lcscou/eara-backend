const { InnerBlocks, useBlockProps } = wp.blockEditor;

export default function save({ attributes }) {
  const { triggerId, title, centered, size, withCloseButton, fullScreen } = attributes;

  const blockProps = useBlockProps.save({
    className: "eara-modal-content",
    "data-modal-content": triggerId,
    "data-modal-title": title,
    "data-modal-centered": centered,
    "data-modal-size": size,
    "data-modal-close-button": withCloseButton,
    "data-modal-fullscreen": fullScreen,
    style: {
      display: "none", // Hidden by default, shown by JavaScript
    },
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
