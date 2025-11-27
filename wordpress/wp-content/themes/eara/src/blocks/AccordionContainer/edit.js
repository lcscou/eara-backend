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

import { MantineProvider, Accordion } from "@mantine/core";

const ALLOWED_BLOCKS = ['eara/accordion'];

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { 
    variant, 
    radius, 
    chevronPosition, 
    chevronSize,
    disableChevronRotation,
    multiple,
    loop
  } = attributes;

  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <MantineProvider>
        <InspectorControls>
          <PanelBody title={__("Accordion Settings", "eara")} initialOpen={true}>
            <SelectControl
              label={__("Variant", "eara")}
              value={variant}
              options={[
                { label: "Default", value: "default" },
                { label: "Contained", value: "contained" },
                { label: "Filled", value: "filled" },
                { label: "Separated", value: "separated" },
              ]}
              onChange={(v) => setAttributes({ variant: v })}
              help={__("Visual style of the accordion", "eara")}
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
              ]}
              onChange={(v) => setAttributes({ radius: v })}
              help={__("Border radius", "eara")}
            />

            <SelectControl
              label={__("Chevron Position", "eara")}
              value={chevronPosition}
              options={[
                { label: "Left", value: "left" },
                { label: "Right", value: "right" },
              ]}
              onChange={(v) => setAttributes({ chevronPosition: v })}
            />

            <SelectControl
              label={__("Chevron Size", "eara")}
              value={chevronSize}
              options={[
                { label: "Extra Small (xs)", value: "xs" },
                { label: "Small (sm)", value: "sm" },
                { label: "Medium (md)", value: "md" },
                { label: "Large (lg)", value: "lg" },
                { label: "Extra Large (xl)", value: "xl" },
              ]}
              onChange={(v) => setAttributes({ chevronSize: v })}
            />
          </PanelBody>

          <PanelBody title={__("Behavior", "eara")} initialOpen={false}>
            <ToggleControl
              label={__("Multiple Open", "eara")}
              checked={multiple}
              onChange={(v) => setAttributes({ multiple: v })}
              help={__("Allow multiple items to be opened at once", "eara")}
            />

            <ToggleControl
              label={__("Loop", "eara")}
              checked={loop}
              onChange={(v) => setAttributes({ loop: v })}
              help={__("Loop keyboard navigation", "eara")}
            />

            <ToggleControl
              label={__("Disable Chevron Rotation", "eara")}
              checked={disableChevronRotation}
              onChange={(v) => setAttributes({ disableChevronRotation: v })}
              help={__("Prevent chevron icon from rotating", "eara")}
            />
          </PanelBody>
        </InspectorControls>

        <Accordion 
          variant={variant}
          radius={radius}
          chevronPosition={chevronPosition}
          chevronSize={chevronSize}
          multiple={multiple}
          loop={loop}
          disableChevronRotation={disableChevronRotation}
        >
          <InnerBlocks 
            allowedBlocks={ALLOWED_BLOCKS}
            template={[
              ['eara/accordion', { title: 'First accordion item' }],
              ['eara/accordion', { title: 'Second accordion item' }],
            ]}
          />
        </Accordion>
      </MantineProvider>
    </div>
  );
}
