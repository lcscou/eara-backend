const { InspectorControls, useBlockProps } = wp.blockEditor;
const { PanelBody, SelectControl, ToggleControl, TextControl } = wp.components;
const { __ } = wp.i18n;
import { IconArrowRight } from "@tabler/icons-react";
import { MantineProvider, Button } from "@mantine/core";
import clsx from "clsx";
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
    rightIcon,
    className,
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

            <TextControl
              label={__("ClassName", "eara")}
              value={className}
              onChange={(v) => setAttributes({ className: v })}
              placeholder="e.g., my-custom-button"
            />
          </PanelBody>

          <PanelBody title={__("Appearance", "eara")} initialOpen={true}>
            <SelectControl
              label={__("Variant", "eara")}
              value={variant}
              options={[
                { label: "Filled", value: "filled" },
                { label: "Outline", value: "outline" },
                { label: "Link", value: "link" },
                { label: "With Arrow", value: "with-arrow" },
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

            {/* <SelectControl
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
            /> */}

            {/* <SelectControl
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
            /> */}
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

        <div style={{ display: "inline-block" }}>
          {variant == "filled" && (
            <Button
              {...(link ? { component: "a" } : {})}
              {...(link ? { href: "javascript:void(0)" } : {})}
              {...(link && target ? { target: target } : {})}
              // fw="medium"
              w={width}
              className={className}
              tt="uppercase"
              size="lg"
              styles={{
                root: {
                  backgroundColor:
                    props.bg?.toString() || "var(--color-primaryColor)",
                  borderRadius: props.radius?.toString() || "100px",
                },
                label: {
                  fontWeight: "400",
                  fontSize: "13px",
                  letterSpacing: ".8px",
                },
              }}
              {...props}
            >
              {props.children || label}
            </Button>
          )}
          {variant == "outline" && (
            <Button
              {...(link ? { component: "a" } : {})}
              {...(link ? { href: "javascript:void(0)" } : {})}
              {...(link && target ? { target: target } : {})}
              variant="outline"
              w={width}
              tt="uppercase"
              className={className}
              size="lg"
              c="white"
              // leftSection={leftSection}
              styles={{
                root: {
                  borderColor: props.bd?.toString() || "white",
                },
                label: {
                  fontWeight: "400",
                  fontSize: "13px",
                  letterSpacing: ".8px",
                },
              }}
              {...props}
            >
              {props.children || label}
            </Button>
          )}
          {variant == "link" && (
            <Button
              // leftSection={leftSection}
              {...(link ? { component: "a" } : {})}
              {...(link ? { href: "javascript:void(0)" } : {})}
              {...(link && target ? { target: target } : {})}
              rightSection={<IconArrowRight size={16} />}
              unstyled
              tt="uppercase"
              className="link hover:opacity-85"
              size="lg"
              c="var(--color-primaryColor)"
              styles={{
                inner: {
                  width: "fit-content",
                  display: "flex",
                  alignItems: "center",
                  gap: 15,
                  borderBottom: "1px solid var(--color-primaryColor)",
                },
                root: {
                  borderColor: "white",
                  width: "fit-content",
                },
                label: {
                  fontWeight: "400",
                  fontSize: "13px",
                  letterSpacing: ".8px",
                },
              }}
              {...props}
            >
              {props.children || label}
            </Button>
          )}
          {variant == "with-arrow" && (
            <Button
              className="withArrow"
              {...(link ? { component: "a" } : {})}
              {...(link ? { href: "javascript:void(0)" } : {})}
              {...(link && target ? { target: target } : {})}
              rightSection={
                <div className="arrowIcon flex aspect-square h-[48.4px] items-center justify-center rounded-full p-1">
                  <IconArrowRight
                    className={clsx(
                      "bg-secondaryColor h-full w-full rounded-full p-2 text-black"
                    )}
                  />
                </div>
              }
              variant="filled"
              tt="uppercase"
              size="lg"
              c="white"
              styles={{
                root: {
                  paddingRight: "0px",
                },
                label: {
                  fontWeight: "400",
                  fontSize: "13px",
                  letterSpacing: ".8px",
                },
              }}
              {...props}
            >
              {props.children || label}
            </Button>
          )}
          {/* <Button
            // variant={variant}
            size={size}
            color={color}
            radius={radius}
            w={width}
            fullWidth={fullWidth}
            disabled={disabled}
            loading={loading}
            style={{ textTransform: uppercase ? "uppercase" : "none" }}
          >
            {leftIcon && <span style={{ marginRight: "8px" }}>{leftIcon}</span>}
            {label}
            {rightIcon && (
              <span style={{ marginLeft: "8px" }}>{rightIcon}</span>
            )}
          </Button> */}
        </div>
      </MantineProvider>
    </div>
  );
}
