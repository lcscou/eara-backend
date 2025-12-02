const {
  InspectorControls,
  InnerBlocks,
  useBlockProps,
} = wp.blockEditor;
const {
  PanelBody,
  RangeControl,
} = wp.components;
const { __ } = wp.i18n;

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { span, offset, order, spanXs, spanSm, spanMd, spanLg, spanXl } = attributes;

  const blockProps = useBlockProps();

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Column Settings", "eara")} initialOpen={true}>
          <RangeControl
            label={__("Span (Default)", "eara")}
            value={span}
            onChange={(v) => setAttributes({ span: v })}
            min={1}
            max={24}
            help={__("Number of columns this element should span", "eara")}
          />

          <RangeControl
            label={__("Offset", "eara")}
            value={offset}
            onChange={(v) => setAttributes({ offset: v })}
            min={0}
            max={23}
            help={__("Number of columns to offset from the left", "eara")}
          />

          <RangeControl
            label={__("Order", "eara")}
            value={order}
            onChange={(v) => setAttributes({ order: v })}
            min={0}
            max={10}
            help={__("Controls the order of the column (flex order)", "eara")}
          />
        </PanelBody>

        <PanelBody title={__("Responsive Spans", "eara")} initialOpen={false}>
          <p style={{ fontSize: '12px', color: '#666', marginBottom: '12px' }}>
            {__("Set to 0 to use default span. XS < 576px, SM >= 576px, MD >= 768px, LG >= 992px, XL >= 1200px", "eara")}
          </p>
          
          <RangeControl
            label={__("Span XS (< 576px)", "eara")}
            value={spanXs}
            onChange={(v) => setAttributes({ spanXs: v })}
            min={0}
            max={24}
          />

          <RangeControl
            label={__("Span SM (>= 576px)", "eara")}
            value={spanSm}
            onChange={(v) => setAttributes({ spanSm: v })}
            min={0}
            max={24}
          />

          <RangeControl
            label={__("Span MD (>= 768px)", "eara")}
            value={spanMd}
            onChange={(v) => setAttributes({ spanMd: v })}
            min={0}
            max={24}
          />

          <RangeControl
            label={__("Span LG (>= 992px)", "eara")}
            value={spanLg}
            onChange={(v) => setAttributes({ spanLg: v })}
            min={0}
            max={24}
          />

          <RangeControl
            label={__("Span XL (>= 1200px)", "eara")}
            value={spanXl}
            onChange={(v) => setAttributes({ spanXl: v })}
            min={0}
            max={24}
          />
        </PanelBody>
      </InspectorControls>

      <div style={{width: '100%'}} {...blockProps}>
        <InnerBlocks />
      </div>
    </>
  );
}
