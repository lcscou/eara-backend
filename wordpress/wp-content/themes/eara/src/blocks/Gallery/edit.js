import "./editor.scss";
import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  useBlockProps,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import {
  PanelBody,
  Button,
  SelectControl,
  RangeControl,
  TextControl,
} from "@wordpress/components";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { images, layout, columns, gap, imageSize } = attributes;

  const blockProps = useBlockProps({
    className: `wp-block-eara-gallery wp-block-eara-gallery--${layout}`,
  });

  const onSelectImages = (media) => {
    const newImages = media.map((item) => ({
      id: item.id,
      url: item.url,
      alt: item.alt || "",
      link: "",
    }));
    setAttributes({ images: newImages });
  };

  const updateImage = (index, field, value) => {
    const updatedImages = [...images];
    updatedImages[index] = { ...updatedImages[index], [field]: value };
    setAttributes({ images: updatedImages });
  };

  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setAttributes({ images: updatedImages });
  };

  const addImages = (media) => {
    const newImages = media.map((item) => ({
      id: item.id,
      url: item.url,
      alt: item.alt || "",
      link: "",
    }));
    setAttributes({ images: [...images, ...newImages] });
  };

  const layoutOptions = [
    { label: __("Grid", "eara"), value: "grid" },
    { label: __("Masonry", "eara"), value: "masonry" },
  ];

  const sizeOptions = [
    { label: __("Thumbnail", "eara"), value: "thumbnail" },
    { label: __("Medium", "eara"), value: "medium" },
    { label: __("Large", "eara"), value: "large" },
    { label: __("Full", "eara"), value: "full" },
  ];

  const gridStyle = {
    display: layout === "masonry" ? "block" : "grid",
    gridTemplateColumns: layout === "grid" ? `repeat(${columns}, 1fr)` : "auto",
    gap: layout === "grid" ? `${gap}px` : "0",
    columnCount: layout === "masonry" ? columns : "auto",
    columnGap: layout === "masonry" ? `${gap}px` : "0",
  };

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Gallery Settings", "eara")} initialOpen={true}>
          <SelectControl
            label={__("Layout", "eara")}
            value={layout}
            options={layoutOptions}
            onChange={(value) => setAttributes({ layout: value })}
            help={__("Choose gallery layout style", "eara")}
          />

          <RangeControl
            label={__("Columns", "eara")}
            value={columns}
            onChange={(value) => setAttributes({ columns: value })}
            min={1}
            max={6}
            help={__("Number of columns", "eara")}
          />

          <RangeControl
            label={__("Gap", "eara")}
            value={gap}
            onChange={(value) => setAttributes({ gap: value })}
            min={0}
            max={48}
            help={__("Space between images (px)", "eara")}
          />

          <SelectControl
            label={__("Image Size", "eara")}
            value={imageSize}
            options={sizeOptions}
            onChange={(value) => setAttributes({ imageSize: value })}
            help={__("Choose image size", "eara")}
          />
        </PanelBody>

        <PanelBody title={__("Image Links", "eara")} initialOpen={false}>
          {images.length > 0 ? (
            images.map((image, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "16px",
                  padding: "12px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "4px",
                }}
              >
                <p style={{ margin: "0 0 8px 0", fontSize: "13px", fontWeight: "600" }}>
                  {__("Image", "eara")} {index + 1}
                </p>
                <TextControl
                  label={__("Link URL", "eara")}
                  value={image.link}
                  onChange={(value) => updateImage(index, "link", value)}
                  placeholder="https://..."
                  help={__("Optional link for this image", "eara")}
                />
                <TextControl
                  label={__("Alt Text", "eara")}
                  value={image.alt}
                  onChange={(value) => updateImage(index, "alt", value)}
                  placeholder={__("Image description", "eara")}
                />
                <Button
                  onClick={() => removeImage(index)}
                  isDestructive
                  isSmall
                  style={{ marginTop: "8px" }}
                >
                  {__("Remove Image", "eara")}
                </Button>
              </div>
            ))
          ) : (
            <p style={{ fontSize: "13px", color: "#666" }}>
              {__("No images added yet", "eara")}
            </p>
          )}
        </PanelBody>
      </InspectorControls>

      <div className="eara-gallery-editor">
        {images.length === 0 ? (
          <div className="eara-gallery-placeholder">
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImages}
                allowedTypes={["image"]}
                multiple={true}
                gallery={true}
                value={images.map((img) => img.id)}
                render={({ open }) => (
                  <Button onClick={open} isPrimary>
                    {__("Add Images", "eara")}
                  </Button>
                )}
              />
            </MediaUploadCheck>
          </div>
        ) : (
          <>
            <div className="eara-gallery__grid" style={gridStyle}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="eara-gallery__item"
                  style={{
                    marginBottom: layout === "masonry" ? `${gap}px` : "0",
                    breakInside: layout === "masonry" ? "avoid" : "auto",
                  }}
                >
                  <div className="eara-gallery__image-wrapper">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="eara-gallery__image"
                    />
                    <div className="eara-gallery__overlay">
                      <Button
                        onClick={() => removeImage(index)}
                        isDestructive
                        isSmall
                      >
                        {__("Remove", "eara")}
                      </Button>
                      {image.link && (
                        <span
                          style={{
                            fontSize: "11px",
                            color: "#fff",
                            marginTop: "8px",
                            display: "block",
                          }}
                        >
                          🔗 {__("Linked", "eara")}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "16px" }}>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={addImages}
                  allowedTypes={["image"]}
                  multiple={true}
                  gallery={true}
                  value={images.map((img) => img.id)}
                  render={({ open }) => (
                    <Button onClick={open} isSecondary>
                      {__("Add More Images", "eara")}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
