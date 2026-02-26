import apiFetch from "@wordpress/api-fetch";
import { useState } from "react";

const { useBlockProps, InspectorControls } = wp.blockEditor;
const { PanelBody, Button, Notice, Spinner } = wp.components;
const { __ } = wp.i18n;

function formatBytes(bytes) {
  if (!bytes || bytes <= 0) {
    return "0 B";
  }

  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / Math.pow(1024, index);

  return `${value.toFixed(index === 0 ? 0 : 1)} ${units[index]}`;
}

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { attachmentId, fileName, mimeType, size } = attributes;

  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const blockProps = useBlockProps({ className: "wp-block-eara-protected-file" });

  const uploadProtectedFile = async (event) => {
    const file = event.target?.files?.[0];

    if (!file) {
      return;
    }

    setIsUploading(true);
    setErrorMessage("");

    try {
      const data = new window.FormData();
      data.append("file", file);

      const response = await apiFetch({
        path: "/eara/v1/protected-files",
        method: "POST",
        body: data,
      });

      setAttributes({
        attachmentId: response?.id || 0,
        fileName: response?.fileName || file.name,
        mimeType: response?.mimeType || file.type,
        size: response?.size || file.size || 0,
      });
    } catch (error) {
      setErrorMessage(error?.message || __("Failed to upload protected file.", "eara"));
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  };

  const clearFile = () => {
    setAttributes({
      attachmentId: 0,
      fileName: "",
      mimeType: "",
      size: 0,
    });
  };

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Protected File", "eara")} initialOpen={true}>
          <p>{__("Upload files that can only be retrieved via authenticated GraphQL.", "eara")}</p>
        </PanelBody>
      </InspectorControls>

      <div className="eara-protected-file__editor">
        {errorMessage && (
          <Notice status="error" isDismissible={true} onRemove={() => setErrorMessage("")}>
            {errorMessage}
          </Notice>
        )}

        {attachmentId > 0 ? (
          <div className="eara-protected-file__meta">
            <p>
              <strong>{__("Attachment ID:", "eara")}</strong> {attachmentId}
            </p>
            <p>
              <strong>{__("File:", "eara")}</strong> {fileName}
            </p>
            <p>
              <strong>{__("Type:", "eara")}</strong> {mimeType || "-"}
            </p>
            <p>
              <strong>{__("Size:", "eara")}</strong> {formatBytes(size)}
            </p>
            <Button variant="secondary" onClick={clearFile}>
              {__("Remove file", "eara")}
            </Button>
          </div>
        ) : (
          <div className="eara-protected-file__empty">
            <p>{__("No protected file selected.", "eara")}</p>
          </div>
        )}

        <label className="eara-protected-file__upload">
          <input type="file" onChange={uploadProtectedFile} disabled={isUploading} />
          <Button variant="primary" disabled={isUploading}>
            {isUploading ? __("Uploading...", "eara") : __("Upload protected file", "eara")}
          </Button>
        </label>

        {isUploading && <Spinner />}
      </div>
    </div>
  );
}
