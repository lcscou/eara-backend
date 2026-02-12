const { InspectorControls, useBlockProps } = wp.blockEditor;
const { PanelBody, TextControl, TextareaControl } = wp.components;
const { __ } = wp.i18n;
import { MantineProvider, TextInput, Button } from "@mantine/core";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { buttonLabel, title, description } = attributes;

  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <MantineProvider>
        <InspectorControls>
          <PanelBody title={__("Join EARA Form Settings", "eara")} initialOpen={true}>
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

        <div className="join-eara-form-wrapper" style={{ backgroundColor: '#f3f4f6', padding: '40px', borderRadius: '8px' }}>
          <div className="join-eara-form-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Name */}
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem', fontWeight: '500' }}>
                  {__("Name", "eara")} <span style={{ color: '#e03131' }}>*</span>
                </label>
                <TextInput
                  placeholder="Your full name"
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

              {/* Institution */}
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem', fontWeight: '500' }}>
                  {__("Institution", "eara")} <span style={{ color: '#e03131' }}>*</span>
                </label>
                <TextInput
                  placeholder="Your institution or organization"
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

              {/* Country */}
              <div>
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
            </div>

            {/* Privacy Policy */}
            <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '24px', marginBottom: '24px' }}>
              {__("By submitting this form, you agree with EARA's", "eara")}{" "}
              <a href="#" style={{ color: '#5b21b6', textDecoration: 'underline' }}>
                {__("Privacy Policy", "eara")}
              </a>
              .
            </p>

            {/* Submit Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                style={{
                  backgroundColor: '#5b21b6',
                  color: 'white',
                  padding: '12px 32px',
                  borderRadius: '4px',
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
