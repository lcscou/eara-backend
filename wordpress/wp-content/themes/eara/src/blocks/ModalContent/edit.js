import "./editor.scss";
import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  useBlockProps,
  InnerBlocks,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  ToggleControl,
  SelectControl,
  Notice,
} from "@wordpress/components";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { triggerId, title, centered, size, withCloseButton, fullScreen } = attributes;

  const blockProps = useBlockProps({
    className: "wp-block-eara-modal-content",
    style: {
      border: "2px solid #3A3A6B",
      borderRadius: "4px",
      padding: "16px",
      position: "relative",
      minHeight: "100px",
      backgroundColor: "#f8f9fa",
    },
  });

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Modal Content Settings", "eara")} initialOpen={true}>
          <TextControl
            label={__("Trigger ID", "eara")}
            value={triggerId}
            onChange={(value) => setAttributes({ triggerId: value })}
            help={__("Must match the ID of a ModalTrigger block", "eara")}
          />

          <TextControl
            label={__("Title", "eara")}
            value={title}
            onChange={(value) => setAttributes({ title: value })}
            help={__("Optional title for the modal", "eara")}
          />

          <SelectControl
            label={__("Size", "eara")}
            value={size}
            options={[
              { label: __("Small", "eara"), value: "sm" },
              { label: __("Medium", "eara"), value: "md" },
              { label: __("Large", "eara"), value: "lg" },
              { label: __("Extra Large", "eara"), value: "xl" },
            ]}
            onChange={(value) => setAttributes({ size: value })}
          />

          <ToggleControl
            label={__("Centered", "eara")}
            checked={centered}
            onChange={(value) => setAttributes({ centered: value })}
            help={__("Center the modal vertically on the screen", "eara")}
          />

          <ToggleControl
            label={__("With Close Button", "eara")}
            checked={withCloseButton}
            onChange={(value) => setAttributes({ withCloseButton: value })}
            help={__("Show close button in modal header", "eara")}
          />

          <ToggleControl
            label={__("Full Screen", "eara")}
            checked={fullScreen}
            onChange={(value) => setAttributes({ fullScreen: value })}
            help={__("Display modal in full screen mode", "eara")}
          />

          {!triggerId && (
            <Notice status="warning" isDismissible={false}>
              <p style={{ margin: 0 }}>
                <strong>{__("Warning:", "eara")}</strong> {__("Please provide a Trigger ID that matches a ModalTrigger block.", "eara")}
              </p>
            </Notice>
          )}

          {triggerId && (
            <Notice status="info" isDismissible={false}>
              <p style={{ margin: 0 }}>
                {__("This modal will be triggered by the ModalTrigger with ID:", "eara")} <strong>{triggerId}</strong>
              </p>
            </Notice>
          )}
        </PanelBody>
      </InspectorControls>

      {/* Header */}
      <div
        style={{
          borderBottom: "1px solid #ddd",
          paddingBottom: "8px",
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "11px",
              color: "#3A3A6B",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              marginBottom: "4px",
            }}
          >
            modal content - {triggerId || "no-id"}
          </div>
          {title && (
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              {title}
            </div>
          )}
        </div>
        <div
          style={{
            fontSize: "10px",
            color: "#666",
            backgroundColor: "white",
            padding: "2px 6px",
            borderRadius: "2px",
            border: "1px solid #ddd",
          }}
        >
          {size.toUpperCase()} {fullScreen && "| FULLSCREEN"} {centered && "| CENTERED"}
        </div>
      </div>

      {/* Content */}
      <div style={{ minHeight: "80px" }}>
        <InnerBlocks
          renderAppender={InnerBlocks.ButtonBlockAppender}
          templateLock={false}
        />
      </div>
    </div>
  );
}
