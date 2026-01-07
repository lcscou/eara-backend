import "./editor.scss";
import { __ } from "@wordpress/i18n";
import {
  MantineProvider,
  Card,
  Image,
  Text,
  Group,
  Avatar,
  Title,
} from "@mantine/core";
import {
  InspectorControls,
  useBlockProps,
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  TextControl,
  ToggleControl,
  Button,
} from "@wordpress/components";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { content, author, backgroundColor, showAvatar, avatarImage, variant } = attributes;

  const blockProps = useBlockProps({
    className: `wp-block-eara-quote wp-block-eara-quote--${backgroundColor} wp-block-eara-quote--${variant}`,
  });

  const backgroundColorOptions = [
    { label: __("White", "eara"), value: "white" },
    { label: __("Light Blue", "eara"), value: "light-blue" },
    { label: __("Light Green", "eara"), value: "light-green" },
    { label: __("Light Gray", "eara"), value: "light-gray" },
  ];

  const variantOptions = [
    { label: __("Standard", "eara"), value: "standard" },
    { label: __("Highlighted", "eara"), value: "highlighted" },
  ];

  const onSelectImage = (media) => {
    setAttributes({
      avatarImage: {
        url: media.url,
        id: media.id,
        alt: media.alt || "",
      },
    });
  };

  const removeImage = () => {
    setAttributes({
      avatarImage: {
        url: "",
        id: 0,
        alt: "",
      },
    });
  };

  const backgroundColorMap = {
    white: "#FFFFFF",
    "light-blue": "#F0F4FF",
    "light-green": "#F0FFF4",
    "light-gray": "#F7F7F7",
  };

  return (
    <div {...blockProps}>
      <MantineProvider>
        <InspectorControls>
          <PanelBody title={__("Quote Settings", "eara")} initialOpen={true}>
            <SelectControl
              label={__("Background Color", "eara")}
              value={backgroundColor}
              options={backgroundColorOptions}
              onChange={(value) => setAttributes({ backgroundColor: value })}
              help={__("Choose the quote background color", "eara")}
            />

            <SelectControl
              label={__("Variant", "eara")}
              value={variant}
              options={variantOptions}
              onChange={(value) => setAttributes({ variant: value })}
              help={__("Choose the quote variant style", "eara")}
            />

            <ToggleControl
              label={__("Show Author Avatar", "eara")}
              checked={showAvatar}
              onChange={(value) => setAttributes({ showAvatar: value })}
              help={__("Display author avatar image", "eara")}
            />

            {showAvatar && (
              <div style={{ marginTop: "16px" }}>
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={onSelectImage}
                    allowedTypes={["image"]}
                    value={avatarImage.id}
                    render={({ open }) => (
                      <>
                        {avatarImage.url && (
                          <img
                            src={avatarImage.url}
                            alt="Avatar Preview"
                            style={{
                              maxWidth: "100%",
                              height: "auto",
                              marginBottom: "8px",
                              borderRadius: "50%",
                              width: "64px",
                              height: "64px",
                              objectFit: "cover",
                            }}
                          />
                        )}
                        <Button
                          onClick={open}
                          isSecondary
                          style={{ marginRight: "8px" }}
                        >
                          {avatarImage.url
                            ? __("Change Avatar", "eara")
                            : __("Select Avatar", "eara")}
                        </Button>
                        {avatarImage.url && (
                          <Button
                            onClick={removeImage}
                            isDestructive
                          >
                            {__("Remove Avatar", "eara")}
                          </Button>
                        )}
                      </>
                    )}
                  />
                </MediaUploadCheck>
              </div>
            )}
          </PanelBody>
        </InspectorControls>

        <Card
          {...blockProps}
          style={{
            backgroundColor: backgroundColorMap[backgroundColor],
            padding: "32px",
            borderRadius: "8px",
            boxShadow: variant === "highlighted" ? "0 4px 12px rgba(0,0,0,0.1)" : "none",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <Text
              size="xl"
              weight={500}
              style={{
                fontSize: "48px",
                color: "#3A3A6B",
                lineHeight: "1",
                marginBottom: "16px",
              }}
            >
              &ldquo;
            </Text>
          </div>

          <RichText
            tagName="p"
            value={content}
            onChange={(value) => setAttributes({ content: value })}
            placeholder={__("Enter quote text...", "eara")}
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#333333",
              fontStyle: "italic",
              marginBottom: "24px",
            }}
          />

          <Group
            spacing="md"
            style={{
              alignItems: "center",
              marginTop: "24px",
            }}
          >
            {showAvatar && avatarImage.url && (
              <Avatar
                src={avatarImage.url}
                alt={author}
                size="md"
                radius="xl"
              />
            )}

            <RichText
              tagName="p"
              value={author}
              onChange={(value) => setAttributes({ author: value })}
              placeholder={__("Author name...", "eara")}
              style={{
                fontSize: "14px",
                color: "#666666",
                fontWeight: "600",
                margin: "0",
              }}
            />
          </Group>
        </Card>
      </MantineProvider>
    </div>
  );
}
