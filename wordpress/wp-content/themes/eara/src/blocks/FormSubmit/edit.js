const {
  InspectorControls,
  useBlockProps,
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
} = wp.components;
const { __ } = wp.i18n;

export default function Edit({ attributes, setAttributes }) {
  const { label, loadingLabel } = attributes;
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__('Button Settings', 'eara')} initialOpen={true}>
          <TextControl
            label={__('Button Label', 'eara')}
            value={label}
            onChange={(v) => setAttributes({ label: v })}
          />
          <TextControl
            label={__('Loading Label', 'eara')}
            value={loadingLabel}
            onChange={(v) => setAttributes({ loadingLabel: v })}
            help={__('Text shown while the form is submitting.', 'eara')}
          />
        </PanelBody>
      </InspectorControls>

      <div className="eara-form-submit">
        <button type="button" className="eara-form-submit__button" disabled>
          {label || __('Submit', 'eara')}
        </button>
      </div>
    </div>
  );
}
