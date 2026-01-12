const { InspectorControls, InnerBlocks, useBlockProps, MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { PanelBody, TextControl, Button } = wp.components;
const { __ } = wp.i18n;
const { useSelect } = wp.data;

import { Alert } from "@mantine/core";

export default function Edit({ attributes, setAttributes, clientId }) {
  const { title, image } = attributes;

  // Check if this block has a Tabs parent
  const parentBlockId = useSelect(
    (select) => {
      const { getBlockParents, getBlock } = select('core/block-editor');
      const parents = getBlockParents(clientId);
      
      // Find the first parent that is a tabs
      for (const parentId of parents) {
        const parent = getBlock(parentId);
        if (parent && parent.name === 'eara/tabs') {
          return parentId;
        }
      }
      return null;
    },
    [clientId]
  );

  const blockProps = useBlockProps();

  const updateImage = (media) => {
    setAttributes({
      image: {
        url: media.url,
        id: media.id,
        alt: media.alt || "",
      },
    });
  };

  const removeImage = () => {
    setAttributes({
      image: {
        url: "",
        id: 0,
        alt: "",
      },
    });
  };

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Tab Item Settings", "eara")} initialOpen={true}>
          <TextControl
            label={__("Tab Title", "eara")}
            value={title}
            onChange={(v) => setAttributes({ title: v })}
            help={__("Title that appears in the tab button", "eara")}
          />

          <div style={{ marginTop: "16px" }}>
            <h3 style={{ margin: "0 0 12px 0", fontSize: "13px" }}>
              {__("Tab Image", "eara")}
            </h3>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={updateImage}
                allowedTypes={["image"]}
                value={image.id}
                render={({ open }) => (
                  <>
                    {image.url && (
                      <img
                        src={image.url}
                        alt="Tab Preview"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          marginBottom: "8px",
                          borderRadius: "4px",
                        }}
                      />
                    )}
                    <Button
                      onClick={open}
                      isSecondary
                      style={{ marginRight: "8px", marginBottom: "8px" }}
                    >
                      {image.url
                        ? __("Change Image", "eara")
                        : __("Select Image", "eara")}
                    </Button>
                    {image.url && (
                      <Button
                        onClick={removeImage}
                        isDestructive
                      >
                        {__("Remove Image", "eara")}
                      </Button>
                    )}
                  </>
                )}
              />
            </MediaUploadCheck>
          </div>
        </PanelBody>
      </InspectorControls>

      {!parentBlockId && (
        <Alert color="yellow" title={__("Warning", "eara")} mb="md">
          {__("Tab Item must be placed inside a Tabs block.", "eara")}
        </Alert>
      )}

      <div style={{ padding: "16px", backgroundColor: "#fafafa", borderRadius: "4px", border: "1px dashed #ccc" }}>
        <h4 style={{ margin: "0 0 12px 0", fontSize: "13px", fontWeight: "600" }}>
          {title || __("Tab Title", "eara")}
        </h4>
        <div style={{ minHeight: "80px" }}>
          <InnerBlocks
            allowedBlocks={["core/paragraph", "core/heading", "core/image", "core/list", "core/button", "core/columns", "core/group"]}
            renderAppender={InnerBlocks.ButtonBlockAppender}
            templateLock={false}
          />
        </div>
      </div>
    </div>
  );
}
