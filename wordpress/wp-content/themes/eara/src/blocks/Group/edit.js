const {
  InspectorControls,
  InnerBlocks,
  useBlockProps,
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  ToggleControl,
} = wp.components;
const { __ } = wp.i18n;

import { MantineProvider, Group } from "@mantine/core";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { justify, align, gap, grow, wrap, preventGrowOverflow } = attributes;

  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <MantineProvider>
        <InspectorControls>
          <PanelBody title={__("Layout", "eara")} initialOpen={true}>
            <SelectControl
              label={__("Justify (Horizontal Alignment)", "eara")}
              value={justify}
              options={[
                { label: "Start", value: "flex-start" },
                { label: "Center", value: "center" },
                { label: "End", value: "flex-end" },
                { label: "Space Between", value: "space-between" },
                { label: "Space Around", value: "space-around" },
                { label: "Space Evenly", value: "space-evenly" },
              ]}
              onChange={(v) => setAttributes({ justify: v })}
              help={__("Controls horizontal alignment of items", "eara")}
            />

            <SelectControl
              label={__("Align (Vertical Alignment)", "eara")}
              value={align}
              options={[
                { label: "Start", value: "flex-start" },
                { label: "Center", value: "center" },
                { label: "End", value: "flex-end" },
                { label: "Baseline", value: "baseline" },
                { label: "Stretch", value: "stretch" },
              ]}
              onChange={(v) => setAttributes({ align: v })}
              help={__("Controls vertical alignment of items", "eara")}
            />

            <SelectControl
              label={__("Gap", "eara")}
              value={gap}
              options={[
                { label: "Extra Small (xs)", value: "xs" },
                { label: "Small (sm)", value: "sm" },
                { label: "Medium (md)", value: "md" },
                { label: "Large (lg)", value: "lg" },
                { label: "Extra Large (xl)", value: "xl" },
                { label: "None (0)", value: "0" },
              ]}
              onChange={(v) => setAttributes({ gap: v })}
              help={__("Space between items", "eara")}
            />

            <SelectControl
              label={__("Wrap", "eara")}
              value={wrap}
              options={[
                { label: "Wrap", value: "wrap" },
                { label: "No Wrap", value: "nowrap" },
                { label: "Wrap Reverse", value: "wrap-reverse" },
              ]}
              onChange={(v) => setAttributes({ wrap: v })}
              help={__("Controls wrapping behavior", "eara")}
            />
          </PanelBody>

          <PanelBody title={__("Options", "eara")} initialOpen={false}>
            <ToggleControl
              label={__("Grow", "eara")}
              checked={grow}
              onChange={(v) => setAttributes({ grow: v })}
              help={__("Allow all children to grow to fill available space", "eara")}
            />

            <ToggleControl
              label={__("Prevent Grow Overflow", "eara")}
              checked={preventGrowOverflow}
              onChange={(v) => setAttributes({ preventGrowOverflow: v })}
              help={__("Prevent children from overflowing when grow is enabled", "eara")}
            />
          </PanelBody>
        </InspectorControls>

        <Group
          justify={justify}
          align={align}
          gap={gap}
          grow={grow}
          wrap={wrap}
          preventGrowOverflow={preventGrowOverflow}
        >
          <InnerBlocks  />
        </Group>
      </MantineProvider>
    </div>
  );
}
