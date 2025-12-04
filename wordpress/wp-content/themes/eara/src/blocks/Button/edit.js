const {
  InspectorControls,
  useBlockProps,
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  ToggleControl,
  TextControl,
} = wp.components;
const { __ } = wp.i18n;

import { MantineProvider, Button } from "@mantine/core";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { 
    label, 
    link, 
    target, 
    variant, 
    size, 
    color, 
    radius, 
    fullWidth, 
    width,
    compact,
    disabled,
    loading,
    uppercase,
    leftIcon,
    rightIcon
  } = attributes;

  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <MantineProvider>
        <InspectorControls>
          <PanelBody title={__("Button Content", "eara")} initialOpen={true}>
            <TextControl
              label={__("Label", "eara")}
              value={label}
              onChange={(v) => setAttributes({ label: v })}
              help={__("The text displayed on the button", "eara")}
            />
            <TextControl
              label={__("Link URL", "eara")}
              value={link}
              onChange={(v) => setAttributes({ link: v })}
              placeholder="https://example.com"
            />
            <SelectControl
              label={__("Link Target", "eara")}
              value={target}
              options={[
                { label: "Same Window (_self)", value: "_self" },
                { label: "New Window (_blank)", value: "_blank" },
                { label: "Parent Frame (_parent)", value: "_parent" },
                { label: "Top Frame (_top)", value: "_top" },
              ]}
              onChange={(v) => setAttributes({ target: v })}
            />
          </PanelBody>

          <PanelBody title={__("Appearance", "eara")} initialOpen={true}>
            <SelectControl
              label={__("Variant", "eara")}
              value={variant}
              options={[
                { label: "Filled", value: "filled" },
                { label: "Light", value: "light" },
                { label: "Outline", value: "outline" },
                { label: "Default", value: "default" },
                { label: "Subtle", value: "subtle" },
                { label: "Transparent", value: "transparent" },
                { label: "White", value: "white" },
                { label: "Gradient", value: "gradient" },
              ]}
              onChange={(v) => setAttributes({ variant: v })}
              help={__("Button visual style", "eara")}
            />

            <SelectControl
              label={__("Size", "eara")}
              value={size}
              options={[
                { label: "Extra Small (xs)", value: "xs" },
                { label: "Small (sm)", value: "sm" },
                { label: "Medium (md)", value: "md" },
                { label: "Large (lg)", value: "lg" },
                { label: "Extra Large (xl)", value: "xl" },
                { label: "Compact XS", value: "compact-xs" },
                { label: "Compact SM", value: "compact-sm" },
                { label: "Compact MD", value: "compact-md" },
                { label: "Compact LG", value: "compact-lg" },
                { label: "Compact XL", value: "compact-xl" },
              ]}
              onChange={(v) => setAttributes({ size: v })}
            />

               <TextControl
              label={__("Width", "eara")}
              value={width}
              onChange={(w) => setAttributes({ width: w })}
              help={__("Button width", "eara")}
            />
        

            <SelectControl
              label={__("Color", "eara")}
              value={color}
              options={[
                { label: "Blue", value: "blue" },
                { label: "Red", value: "red" },
                { label: "Green", value: "green" },
                { label: "Yellow", value: "yellow" },
                { label: "Orange", value: "orange" },
                { label: "Pink", value: "pink" },
                { label: "Purple", value: "grape" },
                { label: "Violet", value: "violet" },
                { label: "Indigo", value: "indigo" },
                { label: "Cyan", value: "cyan" },
                { label: "Teal", value: "teal" },
                { label: "Lime", value: "lime" },
                { label: "Gray", value: "gray" },
                { label: "Dark", value: "dark" },
              ]}
              onChange={(v) => setAttributes({ color: v })}
            />

            <SelectControl
              label={__("Radius", "eara")}
              value={radius}
              options={[
                { label: "Extra Small (xs)", value: "xs" },
                { label: "Small (sm)", value: "sm" },
                { label: "Medium (md)", value: "md" },
                { label: "Large (lg)", value: "lg" },
                { label: "Extra Large (xl)", value: "xl" },
                { label: "Full (pill)", value: "xl" },
              ]}
              onChange={(v) => setAttributes({ radius: v })}
              help={__("Border radius of the button", "eara")}
            />
          </PanelBody>

          <PanelBody title={__("Icon Settings", "eara")} initialOpen={false}>
            <TextControl
              label={__("Left Icon (emoji or symbol)", "eara")}
              value={leftIcon}
              onChange={(v) => setAttributes({ leftIcon: v })}
              placeholder="e.g., ←, ✓, 🚀"
              help={__("Add an icon or emoji before the label", "eara")}
            />
            <TextControl
              label={__("Right Icon (emoji or symbol)", "eara")}
              value={rightIcon}
              onChange={(v) => setAttributes({ rightIcon: v })}
              placeholder="e.g., →, ✓, 🚀"
              help={__("Add an icon or emoji after the label", "eara")}
            />
          </PanelBody>

          <PanelBody title={__("Options", "eara")} initialOpen={false}>
            <ToggleControl
              label={__("Full Width", "eara")}
              checked={fullWidth}
              onChange={(v) => setAttributes({ fullWidth: v })}
              help={__("Make button take 100% width of container", "eara")}
            />

            <ToggleControl
              label={__("Uppercase", "eara")}
              checked={uppercase}
              onChange={(v) => setAttributes({ uppercase: v })}
              help={__("Transform text to uppercase", "eara")}
            />

            <ToggleControl
              label={__("Disabled", "eara")}
              checked={disabled}
              onChange={(v) => setAttributes({ disabled: v })}
              help={__("Disable button interactions", "eara")}
            />

            <ToggleControl
              label={__("Loading State", "eara")}
              checked={loading}
              onChange={(v) => setAttributes({ loading: v })}
              help={__("Show loading spinner", "eara")}
            />
          </PanelBody>
        </InspectorControls>

        <div style={{ display: 'inline-block' }}>
          <Button
            variant={variant}
            size={size}
            color={color}
            radius={radius}
            w={width}
            fullWidth={fullWidth}
            disabled={disabled}
            loading={loading}
            style={{ textTransform: uppercase ? 'uppercase' : 'none' }}
          >
            {leftIcon && <span style={{ marginRight: '8px' }}>{leftIcon}</span>}
            {label}
            {rightIcon && <span style={{ marginLeft: '8px' }}>{rightIcon}</span>}
          </Button>
        </div>
      </MantineProvider>
    </div>
  );
}
