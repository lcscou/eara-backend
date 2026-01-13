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
  Notice,
} from "@wordpress/components";
import { useEffect } from "@wordpress/element";

// Function to generate a unique hash ID
const generateUniqueId = () => {
  return 'modal-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now().toString(36);
};

export default function Edit(props) {
  const { attributes, setAttributes, clientId } = props;
  const { triggerId } = attributes;

  // Generate unique ID if not provided
  useEffect(() => {
    if (!triggerId) {
      setAttributes({ triggerId: generateUniqueId() });
    }
  }, []);

  const blockProps = useBlockProps({
    className: "wp-block-eara-modal-trigger",
    style: {
      border: "2px dashed #3A3A6B",
      borderRadius: "4px",
      padding: "16px",
      position: "relative",
      minHeight: "100px",
    },
  });

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Modal Trigger Settings", "eara")} initialOpen={true}>
          <TextControl
            label={__("Trigger ID", "eara")}
            value={triggerId}
            onChange={(value) => setAttributes({ triggerId: value })}
            help={__("Unique identifier for this modal trigger", "eara")}
          />

          <Notice status="info" isDismissible={false}>
            <p style={{ margin: 0 }}>
              <strong>{__("Important:", "eara")}</strong>
            </p>
            <p style={{ marginTop: "8px" }}>
              {__("You must add a ModalContent block with the same ID to create the modal that will be displayed when this trigger is clicked.", "eara")}
            </p>
            <p style={{ marginTop: "8px" }}>
              {__("The ModalContent block can be placed anywhere on the page and will be hidden until triggered.", "eara")}
            </p>
          </Notice>
        </PanelBody>
      </InspectorControls>

      <div style={{ minHeight: "80px" }}>
        <InnerBlocks
          renderAppender={InnerBlocks.ButtonBlockAppender}
          templateLock={false}
        />
      </div>

      {/* Label in bottom right corner */}
      <div
        style={{
          position: "absolute",
          bottom: "4px",
          right: "8px",
          fontSize: "11px",
          color: "#3A3A6B",
          fontWeight: "600",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "2px 6px",
          borderRadius: "2px",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        modal trigger - {triggerId || "no-id"}
      </div>
    </div>
  );
}
