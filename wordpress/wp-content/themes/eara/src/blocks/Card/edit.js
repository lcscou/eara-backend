import "./editor.scss";
import { __ } from "@wordpress/i18n";
import {
  MantineProvider,
  Card,
  Image,
  Text,
  Group,
  Badge,
  ActionIcon,
} from "@mantine/core";
import {
  InspectorControls,
  useBlockProps,
  InnerBlocks,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  TextControl,
  Button,
} from "@wordpress/components";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { variant, title, link, featuredImage, icon, orientation } = attributes;

  const blockProps = useBlockProps({
    className: `wp-block-eara-card wp-block-eara-card--${variant}`,
  });

  const variantOptions = [
    { label: __("Member", "eara"), value: "member" },
    { label: __("News", "eara"), value: "news" },
    { label: __("Animals", "eara"), value: "animals" },
    { label: __("Team", "eara"), value: "team" },
  ];

  const orientationOptions = [
    { label: __("Vertical", "eara"), value: "vertical" },
    { label: __("Horizontal", "eara"), value: "horizontal" },
  ];

  const onSelectImage = (media) => {
    setAttributes({
      featuredImage: {
        url: media.url,
        id: media.id,
        alt: media.alt || "",
      },
    });
  };

  const removeImage = () => {
    setAttributes({
      featuredImage: {
        url: "",
        id: 0,
        alt: "",
      },
    });
  };

  return (
    <div {...blockProps}>
      <MantineProvider>
        <InspectorControls>
          <PanelBody title={__("Card Settings", "eara")} initialOpen={true}>
            <SelectControl
              label={__("Variant", "eara")}
              value={variant}
              options={variantOptions}
              onChange={(value) => setAttributes({ variant: value })}
              help={__("Choose the card variant style", "eara")}
            />
            <SelectControl
              label={__("Orientation", "eara")}
              value={orientation}
              options={orientationOptions}
              onChange={(value) => setAttributes({ orientation: value })}
              help={__("Choose the card orientation", "eara")}
            />

            <TextControl
              label={__("Title", "eara")}
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              help={__("Card title", "eara")}
            />

            <TextControl
              label={__("Link URL", "eara")}
              value={link}
              onChange={(value) => setAttributes({ link: value })}
              help={__("Card link (optional)", "eara")}
            />

            <TextControl
              label={__("Icon", "eara")}
              value={icon}
              onChange={(value) => setAttributes({ icon: value })}
              help={__("Icon name or emoji (optional)", "eara")}
            />
          </PanelBody>

          <PanelBody title={__("Featured Image", "eara")} initialOpen={false}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={["image"]}
                value={featuredImage.id}
                render={({ open }) => (
                  <div>
                    {featuredImage.url ? (
                      <div>
                        <img
                          src={featuredImage.url}
                          alt={featuredImage.alt}
                          style={{ maxWidth: "100%", marginBottom: "10px" }}
                        />
                        <Group gap="xs">
                          <Button onClick={open} variant="secondary">
                            {__("Replace Image", "eara")}
                          </Button>
                          <Button
                            onClick={removeImage}
                            variant="tertiary"
                            isDestructive
                          >
                            {__("Remove Image", "eara")}
                          </Button>
                        </Group>
                      </div>
                    ) : (
                      <Button onClick={open} variant="secondary">
                        {__("Select Image", "eara")}
                      </Button>
                    )}
                  </div>
                )}
              />
            </MediaUploadCheck>
          </PanelBody>
        </InspectorControls>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          {featuredImage.url && (
            <Card.Section>
              <Image
                src={featuredImage.url}
                height={200}
                alt={featuredImage.alt || title}
              />
            </Card.Section>
          )}

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500} size="lg">
              {title || __("Card Title", "eara")}
            </Text>
            {icon && <Text size="xl">{icon}</Text>}
          </Group>

          <div className="card-description">
            <InnerBlocks
              allowedBlocks={["core/paragraph", "core/heading", "core/list"]}
              template={[
                [
                  "core/paragraph",
                  { placeholder: __("Add card description...", "eara") },
                ],
              ]}
            />
          </div>
        </Card>
      </MantineProvider>
    </div>
  );
}
