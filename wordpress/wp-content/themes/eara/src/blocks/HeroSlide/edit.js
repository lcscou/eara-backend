import { Carousel } from "@mantine/carousel";
import { MantineProvider } from "@mantine/core";
const {
  InspectorControls,
  InnerBlocks,
  MediaUpload,
  MediaUploadCheck,
  useBlockProps,
} = wp.blockEditor;
const { PanelBody, Button, SelectControl, RangeControl, ColorPicker } =
  wp.components;
const { __ } = wp.i18n;

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const {
    backgroundImageDesktop,
    backgroundImageMobile,
    contentAlignment,
    contentVerticalAlignment,
    contentPosition,
    overlayOpacity,
    overlayColor,
    minHeight,
  } = attributes;

  const blockProps = useBlockProps();

  const onSelectImageDesktop = (media) => {
    setAttributes({
      backgroundImageDesktop: {
        url: media.url,
        id: media.id,
        alt: media.alt || "",
      },
    });
  };

  const onSelectImageMobile = (media) => {
    setAttributes({
      backgroundImageMobile: {
        url: media.url,
        id: media.id,
        alt: media.alt || "",
      },
    });
  };

  const removeImageDesktop = () => {
    setAttributes({
      backgroundImageDesktop: { url: "", id: 0, alt: "" },
    });
  };

  const removeImageMobile = () => {
    setAttributes({
      backgroundImageMobile: { url: "", id: 0, alt: "" },
    });
  };

  const slideStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    minHeight: minHeight !== "auto" ? minHeight : "400px",
    backgroundImage: backgroundImageDesktop.url
      ? `url(${backgroundImageDesktop.url})`
      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: contentVerticalAlignment,
    justifyContent: contentAlignment,
  };

  const overlayStyle =
    overlayOpacity > 0
      ? {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: overlayColor,
          opacity: overlayOpacity / 100,
          pointerEvents: "none",
        }
      : null;

  const contentStyle = {
    position: contentPosition,
    zIndex: 1,
    padding: "2rem",
    width: "100%",
    maxWidth: "1200px",
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Background Images", "eara")} initialOpen={true}>
          <p>
            <strong>{__("Desktop Background", "eara")}</strong>
          </p>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImageDesktop}
              allowedTypes={["image"]}
              value={backgroundImageDesktop.id}
              render={({ open }) => (
                <div style={{ marginBottom: "1rem" }}>
                  {backgroundImageDesktop.url ? (
                    <div>
                      <img
                        src={backgroundImageDesktop.url}
                        alt={backgroundImageDesktop.alt}
                        style={{
                          width: "100%",
                          height: "auto",
                          marginBottom: "0.5rem",
                        }}
                      />
                      <Button
                        onClick={open}
                        variant="secondary"
                        style={{ marginRight: "0.5rem" }}
                      >
                        {__("Replace Image", "eara")}
                      </Button>
                      <Button
                        onClick={removeImageDesktop}
                        variant="tertiary"
                        isDestructive
                      >
                        {__("Remove", "eara")}
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={open} variant="primary">
                      {__("Select Desktop Image", "eara")}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>

          <p>
            <strong>{__("Mobile Background", "eara")}</strong>
          </p>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImageMobile}
              allowedTypes={["image"]}
              value={backgroundImageMobile.id}
              render={({ open }) => (
                <div>
                  {backgroundImageMobile.url ? (
                    <div>
                      <img
                        src={backgroundImageMobile.url}
                        alt={backgroundImageMobile.alt}
                        style={{
                          width: "100%",
                          height: "auto",
                          marginBottom: "0.5rem",
                        }}
                      />
                      <Button
                        onClick={open}
                        variant="secondary"
                        style={{ marginRight: "0.5rem" }}
                      >
                        {__("Replace Image", "eara")}
                      </Button>
                      <Button
                        onClick={removeImageMobile}
                        variant="tertiary"
                        isDestructive
                      >
                        {__("Remove", "eara")}
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={open} variant="primary">
                      {__("Select Mobile Image", "eara")}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        <PanelBody title={__("Content Positioning", "eara")} initialOpen={true}>
          <SelectControl
            label={__("Horizontal Alignment", "eara")}
            value={contentAlignment}
            options={[
              { label: "Left", value: "flex-start" },
              { label: "Center", value: "center" },
              { label: "Right", value: "flex-end" },
            ]}
            onChange={(v) => setAttributes({ contentAlignment: v })}
          />

          <SelectControl
            label={__("Vertical Alignment", "eara")}
            value={contentVerticalAlignment}
            options={[
              { label: "Top", value: "flex-start" },
              { label: "Center", value: "center" },
              { label: "Bottom", value: "flex-end" },
            ]}
            onChange={(v) => setAttributes({ contentVerticalAlignment: v })}
          />

          <SelectControl
            label={__("Content Position", "eara")}
            value={contentPosition}
            options={[
              { label: "Relative", value: "relative" },
              { label: "Absolute", value: "absolute" },
              { label: "Fixed", value: "fixed" },
            ]}
            onChange={(v) => setAttributes({ contentPosition: v })}
            help={__("Position type for the content container", "eara")}
          />

          <SelectControl
            label={__("Minimum Height", "eara")}
            value={minHeight}
            options={[
              { label: "Auto", value: "auto" },
              { label: "400px", value: "400px" },
              { label: "500px", value: "500px" },
              { label: "600px", value: "600px" },
              { label: "100vh", value: "100vh" },
            ]}
            onChange={(v) => setAttributes({ minHeight: v })}
          />
        </PanelBody>

        <PanelBody title={__("Overlay", "eara")} initialOpen={false}>
          <RangeControl
            label={__("Overlay Opacity", "eara")}
            value={overlayOpacity}
            onChange={(v) => setAttributes({ overlayOpacity: v })}
            min={0}
            max={100}
            help={__("Add a colored overlay over the background image", "eara")}
          />

          {overlayOpacity > 0 && (
            <div>
              <p>{__("Overlay Color", "eara")}</p>
              <ColorPicker
                color={overlayColor}
                onChangeComplete={(color) =>
                  setAttributes({ overlayColor: color.hex })
                }
              />
            </div>
          )}
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div style={slideStyle}>
          {overlayStyle && <div style={overlayStyle} />}
          <div style={contentStyle}>
            <InnerBlocks />
          </div>
        </div>
      </div>
    </>
  );
}
