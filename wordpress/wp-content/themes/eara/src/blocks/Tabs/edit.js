import "./editor.scss";
import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  useBlockProps,
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import {
  PanelBody,
  Button,
  SelectControl,
  TextControl,
  TabPanel,
} from "@wordpress/components";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { tabs, activeTab, layout } = attributes;

  const blockProps = useBlockProps({
    className: `wp-block-eara-tabs wp-block-eara-tabs--${layout}`,
  });

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  const updateTab = (tabId, field, value) => {
    const updatedTabs = tabs.map((tab) => {
      if (tab.id === tabId) {
        return { ...tab, [field]: value };
      }
      return tab;
    });
    setAttributes({ tabs: updatedTabs });
  };

  const updateTabImage = (tabId, media) => {
    const updatedTabs = tabs.map((tab) => {
      if (tab.id === tabId) {
        return {
          ...tab,
          image: {
            url: media.url,
            id: media.id,
            alt: media.alt || "",
          },
        };
      }
      return tab;
    });
    setAttributes({ tabs: updatedTabs });
  };

  const removeTabImage = (tabId) => {
    const updatedTabs = tabs.map((tab) => {
      if (tab.id === tabId) {
        return {
          ...tab,
          image: {
            url: "",
            id: 0,
            alt: "",
          },
        };
      }
      return tab;
    });
    setAttributes({ tabs: updatedTabs });
  };

  const addTab = () => {
    const newTabId = `tab-${Date.now()}`;
    const newTab = {
      id: newTabId,
      title: __("New Tab", "eara"),
      content: __("Tab content goes here", "eara"),
      image: {
        url: "",
        id: 0,
        alt: "",
      },
    };
    setAttributes({
      tabs: [...tabs, newTab],
      activeTab: newTabId,
    });
  };

  const removeTab = (tabId) => {
    if (tabs.length === 1) {
      alert(__("You must have at least one tab", "eara"));
      return;
    }
    const updatedTabs = tabs.filter((tab) => tab.id !== tabId);
    const newActiveTab =
      activeTab === tabId ? updatedTabs[0].id : activeTab;
    setAttributes({
      tabs: updatedTabs,
      activeTab: newActiveTab,
    });
  };

  const layoutOptions = [
    { label: __("Vertical (Left)", "eara"), value: "vertical" },
    { label: __("Horizontal (Top)", "eara"), value: "horizontal" },
  ];

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Tabs Settings", "eara")} initialOpen={true}>
          <SelectControl
            label={__("Layout", "eara")}
            value={layout}
            options={layoutOptions}
            onChange={(value) => setAttributes({ layout: value })}
            help={__("Choose tabs layout orientation", "eara")}
          />

          <div style={{ marginTop: "16px", marginBottom: "16px" }}>
            <h3 style={{ margin: "0 0 12px 0", fontSize: "13px" }}>
              {__("Manage Tabs", "eara")}
            </h3>

            {tabs.map((tab) => (
              <div
                key={tab.id}
                style={{
                  padding: "12px",
                  marginBottom: "12px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "4px",
                  borderLeft:
                    activeTab === tab.id ? "4px solid #3A3A6B" : "4px solid transparent",
                }}
              >
                <Button
                  onClick={() => setAttributes({ activeTab: tab.id })}
                  isSecondary={activeTab !== tab.id}
                  isPrimary={activeTab === tab.id}
                  style={{ width: "100%", marginBottom: "8px" }}
                >
                  {tab.title || __("Untitled Tab", "eara")}
                </Button>
                <Button
                  onClick={() => removeTab(tab.id)}
                  isDestructive
                  isSmall
                  style={{ width: "100%" }}
                >
                  {__("Remove Tab", "eara")}
                </Button>
              </div>
            ))}

            <Button
              onClick={addTab}
              isPrimary
              style={{ width: "100%" }}
            >
              {__("Add Tab", "eara")}
            </Button>
          </div>
        </PanelBody>

        {activeTabData && (
          <PanelBody title={__("Tab Content", "eara")} initialOpen={true}>
            <TextControl
              label={__("Tab Title", "eara")}
              value={activeTabData.title}
              onChange={(value) => updateTab(activeTab, "title", value)}
              help={__("Tab button title", "eara")}
            />

            <div style={{ marginTop: "16px", marginBottom: "16px" }}>
              <h3 style={{ margin: "0 0 12px 0", fontSize: "13px" }}>
                {__("Tab Image", "eara")}
              </h3>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => updateTabImage(activeTab, media)}
                  allowedTypes={["image"]}
                  value={activeTabData.image.id}
                  render={({ open }) => (
                    <>
                      {activeTabData.image.url && (
                        <img
                          src={activeTabData.image.url}
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
                        {activeTabData.image.url
                          ? __("Change Image", "eara")
                          : __("Select Image", "eara")}
                      </Button>
                      {activeTabData.image.url && (
                        <Button
                          onClick={() => removeTabImage(activeTab)}
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
        )}
      </InspectorControls>

      <div className="eara-tabs" style={{ display: "flex", gap: "32px" }}>
        {/* Tabs Navigation */}
        <div
          className="eara-tabs__nav"
          style={{
            display: "flex",
            flexDirection: layout === "vertical" ? "column" : "row",
            gap: "12px",
            minWidth: layout === "vertical" ? "180px" : "100%",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setAttributes({ activeTab: tab.id })}
              className={`eara-tabs__button ${
                activeTab === tab.id ? "eara-tabs__button--active" : ""
              }`}
              style={{
                padding: "12px 24px",
                borderRadius: "24px",
                border: "none",
                backgroundColor:
                  activeTab === tab.id ? "#3A3A6B" : "#5B5FD9",
                color: "#FFFFFF",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                transition: "background-color 0.3s ease",
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTabData && (
          <div className="eara-tabs__content" style={{ flex: 1 }}>
            {activeTabData.image.url && (
              <div className="eara-tabs__image" style={{ marginBottom: "24px" }}>
                <img
                  src={activeTabData.image.url}
                  alt={activeTabData.image.alt}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}

            <div className="eara-tabs__text">
              <RichText
                tagName="h3"
                value={activeTabData.title}
                onChange={(value) => updateTab(activeTab, "title", value)}
                placeholder={__("Tab title...", "eara")}
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#3A3A6B",
                  marginBottom: "12px",
                }}
              />

              <RichText
                tagName="div"
                value={activeTabData.content}
                onChange={(value) => updateTab(activeTab, "content", value)}
                placeholder={__("Tab content...", "eara")}
                multiline="p"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "#333333",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
