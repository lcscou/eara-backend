import "./editor.scss";
import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  useBlockProps,
  InnerBlocks,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl, SelectControl } from "@wordpress/components";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { withIcon, size, color, spacing, listStyleType } = attributes;

  const blockProps = useBlockProps({
    className: `wp-block-eara-list wp-block-eara-list--${size}`,
    style: {
      "--list-color": color,
      "--list-spacing": spacing,
      "--list-style": listStyleType,
    },
  });

  const sizeOptions = [
    { label: __("Small", "eara"), value: "sm" },
    { label: __("Medium", "eara"), value: "md" },
    { label: __("Large", "eara"), value: "lg" },
  ];

  const spacingOptions = [
    { label: __("Extra Small", "eara"), value: "xs" },
    { label: __("Small", "eara"), value: "sm" },
    { label: __("Medium", "eara"), value: "md" },
    { label: __("Large", "eara"), value: "lg" },
    { label: __("Extra Large", "eara"), value: "xl" },
  ];

  const styleTypeOptions = [
    { label: __("Disc", "eara"), value: "disc" },
    { label: __("Circle", "eara"), value: "circle" },
    { label: __("Square", "eara"), value: "square" },
    { label: __("Decimal", "eara"), value: "decimal" },
    { label: __("Lower Alpha", "eara"), value: "lower-alpha" },
    { label: __("Upper Alpha", "eara"), value: "upper-alpha" },
  ];

  const colorOptions = [
    { label: __("Blue", "eara"), value: "blue" },
    { label: __("Red", "eara"), value: "red" },
    { label: __("Green", "eara"), value: "green" },
    { label: __("Yellow", "eara"), value: "yellow" },
    { label: __("Purple", "eara"), value: "purple" },
    { label: __("Black", "eara"), value: "black" },
    { label: __("Gray", "eara"), value: "gray" },
  ];

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("List Settings", "eara")} initialOpen={true}>
          <ToggleControl
            label={__("Show Icons", "eara")}
            checked={withIcon}
            onChange={(value) => setAttributes({ withIcon: value })}
            help={__("Display icons before each list item", "eara")}
          />

          <SelectControl
            label={__("Size", "eara")}
            value={size}
            options={sizeOptions}
            onChange={(value) => setAttributes({ size: value })}
            help={__("Text size of list items", "eara")}
          />

          <SelectControl
            label={__("Color", "eara")}
            value={color}
            options={colorOptions}
            onChange={(value) => setAttributes({ color: value })}
            help={__("Color of list markers and icons", "eara")}
          />

          <SelectControl
            label={__("Spacing", "eara")}
            value={spacing}
            options={spacingOptions}
            onChange={(value) => setAttributes({ spacing: value })}
            help={__("Space between list items", "eara")}
          />

          <SelectControl
            label={__("List Style Type", "eara")}
            value={listStyleType}
            options={styleTypeOptions}
            onChange={(value) => setAttributes({ listStyleType: value })}
            help={__("Style of list markers", "eara")}
          />
        </PanelBody>
      </InspectorControls>

      <ul className="eara-list">
        <InnerBlocks
        renderAppender={InnerBlocks.ButtonBlockAppender}
          allowedBlocks={["eara/list-item"]}
          template={[["eara/list-item"]]}
          orientation="vertical"
        />
      </ul>
    </div>
  );
}
