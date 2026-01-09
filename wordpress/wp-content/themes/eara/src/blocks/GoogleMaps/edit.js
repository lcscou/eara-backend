const { InspectorControls, useBlockProps } = wp.blockEditor;
const { PanelBody, TextControl, RangeControl, ToggleControl } = wp.components;
const { __ } = wp.i18n;

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { mapUrl, height, width, title, border, borderRadius } = attributes;

  const blockProps = useBlockProps({
    className: 'wp-block-eara-google-maps',
  });

  // Extract embed URL from various Google Maps link formats
  const handleMapUrlChange = (value) => {
    setAttributes({ mapUrl: value });
  };

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Google Maps Settings", "eara")} initialOpen={true}>
          <TextControl
            label={__("Map Embed URL", "eara")}
            value={mapUrl}
            onChange={handleMapUrlChange}
            placeholder="https://www.google.com/maps/embed?pb=..."
            help={__("Paste the embed URL from Google Maps. Right-click a location → Share → Embed → Copy HTML → Extract the src attribute", "eara")}
          />
          
          <TextControl
            label={__("Map Title", "eara")}
            value={title}
            onChange={(value) => setAttributes({ title: value })}
            help={__("Descriptive title for the map", "eara")}
          />
        </PanelBody>

        <PanelBody title={__("Dimensions", "eara")} initialOpen={false}>
          <TextControl
            label={__("Width", "eara")}
            value={width}
            onChange={(value) => setAttributes({ width: value })}
            placeholder="100%"
            help={__("e.g., 100%, 500px, 50vw", "eara")}
          />
          
          <RangeControl
            label={__("Height (px)", "eara")}
            value={parseInt(height)}
            onChange={(value) => setAttributes({ height: value.toString() })}
            min={200}
            max={800}
            step={10}
            help={__("Height of the map in pixels", "eara")}
          />
        </PanelBody>

        <PanelBody title={__("Appearance", "eara")} initialOpen={false}>
          <ToggleControl
            label={__("Show Border", "eara")}
            checked={border}
            onChange={(value) => setAttributes({ border: value })}
            help={__("Display a border around the map", "eara")}
          />
          
          <RangeControl
            label={__("Border Radius", "eara")}
            value={parseInt(borderRadius)}
            onChange={(value) => setAttributes({ borderRadius: value.toString() })}
            min={0}
            max={50}
            step={1}
            help={__("Rounded corners in pixels", "eara")}
          />
        </PanelBody>
      </InspectorControls>

      <div 
        style={{
          border: border ? '1px solid #ddd' : 'none',
          borderRadius: `${borderRadius}px`,
          overflow: 'hidden',
          marginBottom: '1em',
          backgroundColor: '#f5f5f5',
          padding: '0',
        }}
        className="eara-google-maps__wrapper"
      >
        {mapUrl ? (
          <iframe
            width="100%"
            height={height}
            style={{
              border: 'none',
              borderRadius: `${borderRadius}px`,
              display: 'block',
            }}
            src={mapUrl}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={title}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: `${height}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f0f0',
              color: '#999',
              fontSize: '14px',
              textAlign: 'center',
              padding: '20px',
              boxSizing: 'border-box',
            }}
          >
            <p>{__("Paste a Google Maps embed URL to display the map", "eara")}</p>
          </div>
        )}
      </div>

      <div style={{ fontSize: '12px', color: '#666', padding: '0 10px' }}>
        <p>
          <strong>{__("How to get the embed URL:", "eara")}</strong>
        </p>
        <ol style={{ marginTop: '5px', paddingLeft: '20px' }}>
          <li>{__("Search for a location in Google Maps", "eara")}</li>
          <li>{__("Click the Share button (top left corner)", "eara")}</li>
          <li>{__("Go to the Embed a map tab", "eara")}</li>
          <li>{__("Copy the URL from the iframe src attribute", "eara")}</li>
          <li>{__("Paste it in the Map Embed URL field above", "eara")}</li>
        </ol>
      </div>
    </div>
  );
}
