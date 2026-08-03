const {
  InspectorControls,
  InnerBlocks,
  useBlockProps,
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
} = wp.components;
const { __ } = wp.i18n;
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

const ALLOWED_BLOCKS = [
  'eara/form-short-text',
  'eara/form-long-text',
  'eara/form-email',
  'eara/form-phone',
  'eara/form-number',
  'eara/form-submit',
];

const TEMPLATE = [
  ['eara/form-short-text', { label: 'Full Name' }],
  ['eara/form-email', { label: 'Email Address', required: true }],
  ['eara/form-submit', {}],
];

export default function Edit({ attributes, setAttributes }) {
  const {
    title,
    id: customId,
    recipient,
    successMessage,
    errorMessage,
  } = attributes;
  const resolvedId = toSlug(customId || title);
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__('Form Settings', 'eara')} initialOpen={true}>
          <TextControl
            label={__('Title', 'eara')}
            value={title}
            onChange={(v) => setAttributes({ title: v })}
            help={__('This title is used to identify the form.', 'eara')}
          />
          <TextControl
            label={__('Id', 'eara')}
            value={customId}
            onChange={(v) => setAttributes({ id: v })}
            help={__('If left empty, the ID is generated from the title. Any value entered is automatically converted to slug format.', 'eara')}
          />
          <TextControl
            label={__('Recipient Email', 'eara')}
            value={recipient}
            onChange={(v) => setAttributes({ recipient: v })}
            help={__('Email address to receive form submissions.', 'eara')}
            type="email"
          />
          <TextControl
            label={__('Success Message', 'eara')}
            value={successMessage}
            onChange={(v) => setAttributes({ successMessage: v })}
          />
          <TextControl
            label={__('Error Message', 'eara')}
            value={errorMessage}
            onChange={(v) => setAttributes({ errorMessage: v })}
          />
        </PanelBody>
      </InspectorControls>

      <div className="eara-form-container">
        {recipient && (
          <div className="eara-form-container__recipient-badge">
            📧 {__('Recipient', 'eara')}: {recipient}
          </div>
        )}
        {resolvedId && (
          <div className="eara-form-container__recipient-badge">
            {__('Form ID', 'eara')}: {resolvedId}
          </div>
        )}
        <InnerBlocks
          allowedBlocks={ALLOWED_BLOCKS}
          template={TEMPLATE}
        />
      </div>
    </div>
  );
}
