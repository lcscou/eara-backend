const { InspectorControls, InnerBlocks, useBlockProps, useInnerBlocksProps } = wp.blockEditor;
const { PanelBody, ToggleControl, RangeControl } = wp.components;
const { __ } = wp.i18n;
const { useSelect } = wp.data;

import { MantineProvider } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

const ALLOWED_BLOCKS = ["eara/hero-slide"];

export default function Edit(props) {
  const { attributes, setAttributes, clientId } = props;
  const {
    autoplay,
    autoplayDelay,
    loop,
    showControls,
    showIndicators,
    transitionDuration,
  } = attributes;

  const blockProps = useBlockProps();

  // Get inner blocks
  const innerBlocks = useSelect(
    (select) => {
      return select('core/block-editor').getBlocks(clientId);
    },
    [clientId]
  );

  const innerBlocksProps = useInnerBlocksProps(
    {},
    {
      allowedBlocks: ALLOWED_BLOCKS,
      template: [["eara/hero-slide", {}]],
      renderAppender: InnerBlocks.ButtonBlockAppender,
    }
  );

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Carousel Settings", "eara")} initialOpen={true}>
          <ToggleControl
            label={__("Autoplay", "eara")}
            checked={autoplay}
            onChange={(v) => setAttributes({ autoplay: v })}
            help={__("Automatically cycle through slides", "eara")}
          />

          {autoplay && (
            <RangeControl
              label={__("Autoplay Delay (ms)", "eara")}
              value={autoplayDelay}
              onChange={(v) => setAttributes({ autoplayDelay: v })}
              min={1000}
              max={10000}
              step={500}
              help={__("Time between slide transitions", "eara")}
            />
          )}

          <ToggleControl
            label={__("Loop", "eara")}
            checked={loop}
            onChange={(v) => setAttributes({ loop: v })}
            help={__("Return to first slide after last", "eara")}
          />

          <ToggleControl
            label={__("Show Controls", "eara")}
            checked={showControls}
            onChange={(v) => setAttributes({ showControls: v })}
            help={__("Show previous/next arrows", "eara")}
          />

          <ToggleControl
            label={__("Show Indicators", "eara")}
            checked={showIndicators}
            onChange={(v) => setAttributes({ showIndicators: v })}
            help={__("Show dot indicators", "eara")}
          />

          <RangeControl
            label={__("Transition Duration (ms)", "eara")}
            value={transitionDuration}
            onChange={(v) => setAttributes({ transitionDuration: v })}
            min={200}
            max={2000}
            step={100}
          />
        </PanelBody>
      </InspectorControls>

      <MantineProvider>
        <div
          style={{
            width: "100%",
            aspectRatio: "16/9",
            border: "2px dashed #ccc",
          }}
        >
          <Carousel
            loop={loop}
            withControls={showControls}
            withIndicators={showIndicators}
            height="100%"
            slideSize="100%"
            slideGap={0}
          >
            {innerBlocks.map((block) => (
              <Carousel.Slide key={block.clientId}>
                <div {...innerBlocksProps} />
              </Carousel.Slide>
            ))}
            {innerBlocks.length === 0 && (
              <Carousel.Slide>
                <div {...innerBlocksProps} />
              </Carousel.Slide>
            )}
          </Carousel>
        </div>
      </MantineProvider>
    </div>
  );
}
