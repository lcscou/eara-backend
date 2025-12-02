const {
  InspectorControls,
  InnerBlocks,
  useBlockProps,
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  ToggleControl,
  RangeControl,
} = wp.components;
const { __ } = wp.i18n;

import { MantineProvider, Grid } from "@mantine/core";

const ALLOWED_BLOCKS = ['eara/grid-col'];

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { columns, gutter, grow, justify, align, overflow } = attributes;

  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Grid Settings", "eara")} initialOpen={true}>
          <RangeControl
            label={__("Columns", "eara")}
            value={columns}
            onChange={(v) => setAttributes({ columns: v })}
            min={1}
            max={24}
            help={__("Total number of columns in the grid", "eara")}
          />

          <SelectControl
            label={__("Gutter", "eara")}
            value={gutter}
            options={[
              { label: "Extra Small (xs)", value: "xs" },
              { label: "Small (sm)", value: "sm" },
              { label: "Medium (md)", value: "md" },
              { label: "Large (lg)", value: "lg" },
              { label: "Extra Large (xl)", value: "xl" },
              { label: "None (0)", value: "0" },
            ]}
            onChange={(v) => setAttributes({ gutter: v })}
            help={__("Space between columns", "eara")}
          />

          <SelectControl
            label={__("Justify", "eara")}
            value={justify}
            options={[
              { label: "Start", value: "flex-start" },
              { label: "Center", value: "center" },
              { label: "End", value: "flex-end" },
              { label: "Space Between", value: "space-between" },
              { label: "Space Around", value: "space-around" },
            ]}
            onChange={(v) => setAttributes({ justify: v })}
            help={__("Horizontal alignment of columns", "eara")}
          />

          <SelectControl
            label={__("Align", "eara")}
            value={align}
            options={[
              { label: "Start", value: "flex-start" },
              { label: "Center", value: "center" },
              { label: "End", value: "flex-end" },
              { label: "Stretch", value: "stretch" },
            ]}
            onChange={(v) => setAttributes({ align: v })}
            help={__("Vertical alignment of columns", "eara")}
          />

          <SelectControl
            label={__("Overflow", "eara")}
            value={overflow}
            options={[
              { label: "Visible", value: "visible" },
              { label: "Hidden", value: "hidden" },
            ]}
            onChange={(v) => setAttributes({ overflow: v })}
          />
        </PanelBody>

        <PanelBody title={__("Options", "eara")} initialOpen={false}>
          <ToggleControl
            label={__("Grow", "eara")}
            checked={grow}
            onChange={(v) => setAttributes({ grow: v })}
            help={__("Allows Grid.Col to grow and fill remaining space", "eara")}
          />
        </PanelBody>
      </InspectorControls>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        //   flexWrap: 'wrap',
          gap: gutter === '0' ? 0 : undefined,
          justifyContent: justify,
          width: '100%',
          alignItems: align,
          overflow: overflow,
          border: '1px dashed #ccc',
          padding: '0.5rem',
          minHeight: '50px'
        }}
      >
        <InnerBlocks 
          allowedBlocks={ALLOWED_BLOCKS}
          template={[
            // ['eara/grid-col', { span: 4 }],
            // ['eara/grid-col', { span: 4 }],
            // ['eara/grid-col', { span: 4 }],
          ]}
        />
      </div>
    </div>
  );
}
