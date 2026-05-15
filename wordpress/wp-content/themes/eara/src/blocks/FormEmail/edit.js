const {
  InspectorControls,
  useBlockProps,
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  TextareaControl,
  ToggleControl,
} = wp.components;
const { __ } = wp.i18n;

export default function Edit({ attributes, setAttributes }) {
  const { label, description, placeholder, required } = attributes;
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__('Field Settings', 'eara')} initialOpen={true}>
          <TextControl
            label={__('Label', 'eara')}
            value={label}
            onChange={(v) => setAttributes({ label: v })}
          />
          <TextControl
            label={__('Placeholder', 'eara')}
            value={placeholder}
            onChange={(v) => setAttributes({ placeholder: v })}
          />
          <TextareaControl
            label={__('Description', 'eara')}
            value={description}
            onChange={(v) => setAttributes({ description: v })}
            help={__('Optional helper text shown below the field.', 'eara')}
          />
          <ToggleControl
            label={__('Required', 'eara')}
            checked={required}
            onChange={(v) => setAttributes({ required: v })}
          />
        </PanelBody>
      </InspectorControls>

      <div className="eara-form-field">
        <label className="eara-form-field__label">
          {label || __('Email Address', 'eara')}
          {required && <span className="eara-form-field__required"> *</span>}
        </label>
        <input
          type="email"
          className="eara-form-field__input"
          placeholder={placeholder || 'email@example.com'}
          disabled
          readOnly
        />
        {description && (
          <p className="eara-form-field__description">{description}</p>
        )}
      </div>
    </div>
  );
}
