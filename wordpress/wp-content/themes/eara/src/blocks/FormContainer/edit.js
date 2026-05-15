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
  const { recipient, successMessage, errorMessage } = attributes;
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__('Form Settings', 'eara')} initialOpen={true}>
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
        <InnerBlocks
          allowedBlocks={ALLOWED_BLOCKS}
          template={TEMPLATE}
        />
      </div>
    </div>
  );
}
