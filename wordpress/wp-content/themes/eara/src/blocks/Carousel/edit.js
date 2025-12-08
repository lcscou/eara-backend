const { InspectorControls, InnerBlocks, useBlockProps, useInnerBlocksProps } = wp.blockEditor;
const { PanelBody, ToggleControl, TextControl, RangeControl } = wp.components;
const { __ } = wp.i18n;
const { useSelect } = wp.data;

import { MantineProvider } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

const ALLOWED_BLOCKS = ["eara/carousel-item"];

export default function Edit(props) {
  const { attributes, setAttributes, clientId } = props;
  const {
    withControls,
    withIndicators,
    slideGap,
    slideSize,
    height,
    initialSlide,
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
      template: [["eara/carousel-item", {}]],
      renderAppender: InnerBlocks.ButtonBlockAppender,
    }
  );

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Carousel Settings", "eara")} initialOpen={true}>
          <ToggleControl
            label={__("Show Controls", "eara")}
            checked={withControls}
            onChange={(v) => setAttributes({ withControls: v })}
            help={__("Show previous/next navigation arrows", "eara")}
          />

          <ToggleControl
            label={__("Show Indicators", "eara")}
            checked={withIndicators}
            onChange={(v) => setAttributes({ withIndicators: v })}
            help={__("Show dot indicators", "eara")}
          />

          <TextControl
            label={__("Slide Gap", "eara")}
            value={slideGap}
            onChange={(v) => setAttributes({ slideGap: v })}
            help={__("Gap between slides (e.g., xs, sm, md, lg, xl or 20px)", "eara")}
          />

          <TextControl
            label={__("Slide Size", "eara")}
            value={slideSize}
            onChange={(v) => setAttributes({ slideSize: v })}
            help={__("Width of each slide (e.g., 100%, 50%, 300px)", "eara")}
          />

          <TextControl
            label={__("Height", "eara")}
            value={height}
            onChange={(v) => setAttributes({ height: v })}
            help={__("Height of carousel (e.g., 400px, 50vh)", "eara")}
          />

          <RangeControl
            label={__("Initial Slide", "eara")}
            value={initialSlide}
            onChange={(v) => setAttributes({ initialSlide: v })}
            min={0}
            max={Math.max(0, innerBlocks.length - 1)}
            help={__("Which slide to show first (0-indexed)", "eara")}
          />
        </PanelBody>
      </InspectorControls>

      <MantineProvider>
        <div
          style={{
            width: "100%",
            border: "2px dashed #ccc",
            marginBottom: '1rem',
          }}
        >
          {innerBlocks.length > 0 ? (
            <Carousel
              withControls={withControls}
              withIndicators={withIndicators}
              height={height}
              slideSize={slideSize}
              slideGap={slideGap}
              initialSlide={initialSlide}
            >
              {innerBlocks.map((block, index) => (
                <Carousel.Slide key={block.clientId}>
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
                    {block.name === 'eara/carousel-item' && `Item ${index + 1}`}
                  </div>
                </Carousel.Slide>
              ))}
            </Carousel>
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'center', height: height }}>
              {__('Add Carousel Items to create a carousel', 'eara')}
            </div>
          )}
        </div>
      </MantineProvider>

      {/* InnerBlocks - visible for editing */}
      <div {...innerBlocksProps} style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }} />
    </div>
  );
}
