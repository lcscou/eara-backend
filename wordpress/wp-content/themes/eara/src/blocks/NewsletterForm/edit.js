const { InspectorControls, useBlockProps } = wp.blockEditor;
const { PanelBody, SelectControl, TextControl, TextareaControl } = wp.components;
const { __ } = wp.i18n;
import { MantineProvider, TextInput, Button, Select } from "@mantine/core";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { renderMode, buttonLabel, title, description } = attributes;

  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <MantineProvider>
        <InspectorControls>
          <PanelBody title={__("Newsletter Form Settings", "eara")} initialOpen={true}>
            <SelectControl
              label={__("Render Mode", "eara")}
              value={renderMode}
              options={[
                { label: __("Inline", "eara"), value: "inline" },
                { label: __("Modal", "eara"), value: "modal" },
              ]}
              onChange={(v) => setAttributes({ renderMode: v })}
              help={__("Choose how the form should be displayed", "eara")}
            />
            <TextControl
              label={__("Title", "eara")}
              value={title}
              onChange={(v) => setAttributes({ title: v })}
              help={__("Main heading of the form", "eara")}
            />
            <TextareaControl
              label={__("Description", "eara")}
              value={description}
              onChange={(v) => setAttributes({ description: v })}
              help={__("Descriptive text below the title", "eara")}
            />
            <TextControl
              label={__("Button Label", "eara")}
              value={buttonLabel}
              onChange={(v) => setAttributes({ buttonLabel: v })}
              help={__("Text displayed on the submit button", "eara")}
            />
          </PanelBody>
        </InspectorControls>

        <div className="newsletter-form-wrapper" style={{ backgroundColor: '#e8e5f1', padding: '40px', borderRadius: '8px' }}>
          <div className="newsletter-form-content" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Title */}
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '16px',
              color: '#1a1a1a'
            }}>
              {title}
            </h2>
            
            {/* Description */}
            <p style={{ 
              fontSize: '1rem', 
              marginBottom: '32px',
              color: '#666'
            }}>
              {description}
            </p>

            {/* Form Fields */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              {/* First name */}
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem', fontWeight: '500' }}>
                  {__("First name", "eara")} <span style={{ color: '#e03131' }}>*</span>
                </label>
                <TextInput
                  placeholder="Jane"
                  styles={{
                    input: {
                      backgroundColor: 'white',
                      border: '1px solid #ddd',
                      padding: '12px',
                      borderRadius: '4px',
                    }
                  }}
                />
              </div>

              {/* Last name */}
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem', fontWeight: '500' }}>
                  {__("Last name", "eara")} <span style={{ color: '#e03131' }}>*</span>
                </label>
                <TextInput
                  placeholder="Doe"
                  styles={{
                    input: {
                      backgroundColor: 'white',
                      border: '1px solid #ddd',
                      padding: '12px',
                      borderRadius: '4px',
                    }
                  }}
                />
              </div>

              {/* Organization */}
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem', fontWeight: '500' }}>
                  {__("Organization", "eara")}
                </label>
                <TextInput
                  placeholder="European Animal Research Association"
                  styles={{
                    input: {
                      backgroundColor: 'white',
                      border: '1px solid #ddd',
                      padding: '12px',
                      borderRadius: '4px',
                    }
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem', fontWeight: '500' }}>
                  {__("Email", "eara")} <span style={{ color: '#e03131' }}>*</span>
                </label>
                <TextInput
                  type="email"
                  placeholder="you@example.com"
                  styles={{
                    input: {
                      backgroundColor: 'white',
                      border: '1px solid #ddd',
                      padding: '12px',
                      borderRadius: '4px',
                    }
                  }}
                />
              </div>
            </div>

            {/* Country - Full width */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem', fontWeight: '500' }}>
                {__("Country", "eara")} <span style={{ color: '#e03131' }}>*</span>
              </label>
              <TextInput
                placeholder="Country where you are based"
                styles={{
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid #ddd',
                    padding: '12px',
                    borderRadius: '4px',
                  }
                }}
              />
            </div>

            {/* Interests - Full width */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem', fontWeight: '500' }}>
                {__("I am interested in", "eara")} <span style={{ color: '#e03131' }}>*</span>
              </label>
              <Select
                placeholder="Choose one or more"
                data={[
                  { value: 'research', label: 'Research' },
                  { value: 'policy', label: 'Policy' },
                  { value: 'education', label: 'Education' },
                  { value: 'events', label: 'Events' },
                ]}
                styles={{
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid #ddd',
                    padding: '12px',
                    borderRadius: '4px',
                  }
                }}
              />
            </div>

            {/* Privacy Policy */}
            <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '24px' }}>
              {__("By subscribing, you agree with EARA's", "eara")}{" "}
              <a href="#" style={{ color: '#5b21b6', textDecoration: 'underline' }}>
                {__("Privacy Policy", "eara")}
              </a>
              .
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
              <Button
                variant="subtle"
                style={{
                  backgroundColor: 'transparent',
                  color: '#666',
                  border: 'none',
                  padding: '12px 24px',
                }}
              >
                {__("Clear", "eara")}
              </Button>
              <Button
                style={{
                  backgroundColor: '#4c1d95',
                  color: 'white',
                  padding: '12px 32px',
                  borderRadius: '9999px',
                  fontWeight: '600',
                }}
              >
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </MantineProvider>
    </div>
  );
}
