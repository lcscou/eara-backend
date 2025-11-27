const {
  InspectorControls,
  InnerBlocks,
  RichText,
  useBlockProps,
} = wp.blockEditor;
const {
  PanelBody,
  ToggleControl,
  TextControl,
} = wp.components;
const { __ } = wp.i18n;

import { MantineProvider, Accordion } from "@mantine/core";

export default function Edit(props) {
  const { attributes, setAttributes, clientId } = props;
  const { title, defaultOpened, disabled } = attributes;

  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Accordion Item Settings", "eara")} initialOpen={true}>
          <ToggleControl
            label={__("Default Opened", "eara")}
            checked={defaultOpened}
            onChange={(v) => setAttributes({ defaultOpened: v })}
            help={__("Open this item by default", "eara")}
          />
          
          <ToggleControl
            label={__("Disabled", "eara")}
            checked={disabled}
            onChange={(v) => setAttributes({ disabled: v })}
            help={__("Disable this accordion item", "eara")}
          />
        </PanelBody>
      </InspectorControls>

      <MantineProvider>
        <Accordion defaultValue={defaultOpened ? clientId : null}>
          <Accordion.Item value={clientId}>
            <Accordion.Control disabled={disabled}>
              <RichText
                tagName="div"
                value={title}
                onChange={(v) => setAttributes({ title: v })}
                placeholder={__("Accordion title...", "eara")}
                withoutInteractiveFormatting
              />
            </Accordion.Control>
            <Accordion.Panel>
              <InnerBlocks />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </MantineProvider>
    </div>
  );
}
