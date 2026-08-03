const { InnerBlocks, useBlockProps } = wp.blockEditor;
const { cleanForSlug } = wp.url || {};

function toSlug(value = '') {
  const rawValue = String(value).trim();

  if (!rawValue) {
    return '';
  }

  if (typeof cleanForSlug === 'function') {
    return cleanForSlug(rawValue);
  }

  return rawValue
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function Save({ attributes }) {
  const {
    title,
    id: customId,
    recipient,
    successMessage,
    errorMessage,
  } = attributes;
  const resolvedId = toSlug(customId || title);
  const blockProps = useBlockProps.save();

  return (
    <div
      {...blockProps}
      id={resolvedId || undefined}
      data-form-title={title}
      data-form-id={resolvedId}
      data-recipient={recipient}
      data-success-message={successMessage}
      data-error-message={errorMessage}
    >
      <InnerBlocks.Content />
    </div>
  );
}
