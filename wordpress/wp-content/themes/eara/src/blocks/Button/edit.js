const {
  RichText,
  InspectorControls,
  BlockControls,

  useBlockProps,
  ColorPalette,
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  ToggleControl,
  TextControl,
  AlignmentToolbar,
  ToolbarGroup,
  Toolbar,
  ToolbarButton,
} = wp.components;
import { pencil } from "@wordpress/icons";
const { __ } = wp.i18n;

import { Box, Button, MantineProvider, Title } from "@mantine/core";
import { RingProgress, Text } from "@mantine/core";

export default function Edit(props) {
  const { attributes, setAttributes, className } = props;
  const { label, link, variant, target, alignment } = attributes;

  const VARIANTS = [
    { label: "filled", value: "filled" },
    { label: "outline", value: "outline" },
    { label: "link", value: "link" },

    { label: "with-arrow", value: "with-arrow" },
  ];

  const onChangeContent = (newContent) => {
    setAttributes({ label: newContent });
  };
  const onChangeAlignment = (newContent) => {
    setAttributes({ alignment: newContent });
  };

  return (
    <MantineProvider forceColorScheme="light">
      <InspectorControls>
        <PanelBody title={__("Button Settings", "eara")}>
          <TextControl
            label={__("Label", "eara")}
            value={label}
            onChange={(v) => setAttributes({ label: v })}
          />
          <TextControl
            label={__("Link", "eara")}
            value={link}
            onChange={(v) => setAttributes({ link: v })}
          />
          <SelectControl
            label={__("Variant", "eara")}
            value={variant}
            options={VARIANTS}
            onChange={(v) => setAttributes({ variant: v })}
          />
        </PanelBody>
      </InspectorControls>

      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            icon={pencil}
            label="Edit"
            onClick={() => alert("Editing")}
          />
        </ToolbarGroup>
      </BlockControls>
      <Button
        variant={variant}
        component="a"
        className="bg-red-800"
        size="lg"
        href={link}
        target={target}
      >
        <RichText
          tagName="p"
          value={label}
          onChange={onChangeContent}
          placeholder="Digite seu conteúdo aqui..."
          className={"my-editable-block-class"}
        />
      </Button>
    </MantineProvider>
  );
}
