import { __ } from '@wordpress/i18n';
import {
  InspectorControls,
  useBlockProps,
  RichText,
} from '@wordpress/block-editor';
import {
  PanelBody,
  SelectControl,
  TextControl,
  ToggleControl,
  RangeControl,
  Button,
  TextareaControl,
} from '@wordpress/components';

import { MantineProvider } from '@mantine/core';
import { BarChart, DonutChart } from '@mantine/charts';

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const {
    variant = 'bar',
    chartLabel = 'Chart Title',
    data,
    series,
    dataKey = 'month',
    orientation = 'vertical',
    type = 'default',
    unit = '',
    withBarValueLabel = false,
    tooltipDataSource = 'all',
    height = 300,
    withLegend = true,
    yAxisLabel = '',
    xAxisLabel = '',
    gridAxis = 'y',
    donutSize = 240,
    donutThickness = 22,
    donutWithLabels = true,
    donutWithLabelsLine = true,
    donutData,
  } = attributes;

  const blockProps = useBlockProps({ className: 'wp-block-eara-eara-chart' });

  // Safe defaults
  const safeData = data || [
    { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 0 },
    { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
    { month: 'March', Smartphones: 0, Laptops: 1000, Tablets: 200 },
    { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
    { month: 'May', Smartphones: 800, Laptops: 0, Tablets: 1200 },
    { month: 'June', Smartphones: 0, Laptops: 600, Tablets: 1000 }
  ];

  const safeSeries = series || [
    { name: 'Smartphones', color: 'violet.6' },
    { name: 'Laptops', color: 'blue.6' },
    { name: 'Tablets', color: 'teal.6' }
  ];

  const safeDonutData = donutData || [
    { name: 'USA', value: 400, color: 'indigo.6' },
    { name: 'India', value: 300, color: 'yellow.6' },
    { name: 'Japan', value: 100, color: 'teal.6' },
    { name: 'Other', value: 200, color: 'gray.6' }
  ];

  const handleDataChange = (value) => {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        setAttributes({ data: parsed });
      }
    } catch (e) {
      // Invalid JSON, don't update
    }
  };

  const handleSeriesChange = (value) => {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        setAttributes({ series: parsed });
      }
    } catch (e) {
      // Invalid JSON, don't update
    }
  };

  const handleDonutDataChange = (value) => {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        setAttributes({ donutData: parsed });
      }
    } catch (e) {
      // Invalid JSON, don't update
    }
  };

  // Build yAxisProps for BarChart
  const yAxisProps = {};
  if (yAxisLabel) {
    yAxisProps.label = yAxisLabel;
  }

  // Build grid config
  const gridConfig = {};
  if (gridAxis === 'x' || gridAxis === 'xy') {
    gridConfig.x = true;
  }
  if (gridAxis === 'y' || gridAxis === 'xy') {
    gridConfig.y = true;
  }

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__('Chart Settings', 'eara')} initialOpen={true}>
          <SelectControl
            label={__('Variant', 'eara')}
            value={variant}
            options={[
              { label: __('Bar Chart', 'eara'), value: 'bar' },
              { label: __('Donut Chart', 'eara'), value: 'donut' },
            ]}
            onChange={(v) => setAttributes({ variant: v })}
          />
          <TextControl
            label={__('Chart Label', 'eara')}
            value={chartLabel}
            onChange={(v) => setAttributes({ chartLabel: v })}
          />
          <RangeControl
            label={__('Height', 'eara')}
            value={variant === 'donut' ? donutSize : height}
            onChange={(v) => variant === 'donut' ? setAttributes({ donutSize: v }) : setAttributes({ height: v })}
            min={120}
            max={600}
          />
          <ToggleControl
            label={__('Show legend', 'eara')}
            checked={!!withLegend}
            onChange={(v) => setAttributes({ withLegend: v })}
          />
        </PanelBody>

        {variant === 'bar' && (
          <>
            <PanelBody title={__('Bar Chart Settings', 'eara')} initialOpen={true}>
              <SelectControl
                label={__('Orientation', 'eara')}
                value={orientation}
                options={[
                  { label: __('Vertical', 'eara'), value: 'vertical' },
                  { label: __('Horizontal', 'eara'), value: 'horizontal' },
                ]}
                onChange={(v) => setAttributes({ orientation: v })}
              />
              <SelectControl
                label={__('Type', 'eara')}
                value={type}
                options={[
                  { label: __('Default', 'eara'), value: 'default' },
                  { label: __('Stacked', 'eara'), value: 'stacked' },
                  { label: __('Percent', 'eara'), value: 'percent' },
                ]}
                onChange={(v) => setAttributes({ type: v })}
              />
              <TextControl
                label={__('Data Key', 'eara')}
                value={dataKey}
                onChange={(v) => setAttributes({ dataKey: v })}
                help={__('The key field in data objects (e.g., "month")', 'eara')}
              />
              <TextControl
                label={__('Unit', 'eara')}
                value={unit}
                onChange={(v) => setAttributes({ unit: v })}
                help={__('Unit for values (e.g., "$", "%")', 'eara')}
              />
              <TextControl
                label={__('Y Axis Label', 'eara')}
                value={yAxisLabel}
                onChange={(v) => setAttributes({ yAxisLabel: v })}
              />
              <TextControl
                label={__('X Axis Label', 'eara')}
                value={xAxisLabel}
                onChange={(v) => setAttributes({ xAxisLabel: v })}
              />
              <SelectControl
                label={__('Grid Lines', 'eara')}
                value={gridAxis}
                options={[
                  { label: __('None', 'eara'), value: 'none' },
                  { label: __('Horizontal (Y)', 'eara'), value: 'y' },
                  { label: __('Vertical (X)', 'eara'), value: 'x' },
                  { label: __('Both (X & Y)', 'eara'), value: 'xy' },
                ]}
                onChange={(v) => setAttributes({ gridAxis: v })}
              />
              <ToggleControl
                label={__('Show Bar Value Labels', 'eara')}
                checked={!!withBarValueLabel}
                onChange={(v) => setAttributes({ withBarValueLabel: v })}
              />
              <SelectControl
                label={__('Tooltip Data Source', 'eara')}
                value={tooltipDataSource}
                options={[
                  { label: __('All', 'eara'), value: 'all' },
                  { label: __('Segment', 'eara'), value: 'segment' },
                ]}
                onChange={(v) => setAttributes({ tooltipDataSource: v })}
              />
            </PanelBody>

            <PanelBody title={__('Data Configuration', 'eara')} initialOpen={false}>
              <TextareaControl
                label={__('Data (JSON)', 'eara')}
                value={JSON.stringify(safeData, null, 2)}
                onChange={handleDataChange}
                rows={10}
                help={__('Array of objects with dataKey and series names', 'eara')}
              />
            </PanelBody>

            <PanelBody title={__('Series Configuration', 'eara')} initialOpen={false}>
              <TextareaControl
                label={__('Series (JSON)', 'eara')}
                value={JSON.stringify(safeSeries, null, 2)}
                onChange={handleSeriesChange}
                rows={8}
                help={__('Array of objects with name and color properties', 'eara')}
              />
            </PanelBody>
          </>
        )}

        {variant === 'donut' && (
          <>
            <PanelBody title={__('Donut Chart Settings', 'eara')} initialOpen={true}>
              <RangeControl
                label={__('Thickness', 'eara')}
                value={donutThickness}
                onChange={(v) => setAttributes({ donutThickness: v })}
                min={8}
                max={60}
              />
              <ToggleControl
                label={__('Show Labels', 'eara')}
                checked={!!donutWithLabels}
                onChange={(v) => setAttributes({ donutWithLabels: v })}
              />
              <ToggleControl
                label={__('Show Label Lines', 'eara')}
                checked={!!donutWithLabelsLine}
                onChange={(v) => setAttributes({ donutWithLabelsLine: v })}
              />
              <SelectControl
                label={__('Tooltip Data Source', 'eara')}
                value={tooltipDataSource}
                options={[
                  { label: __('All', 'eara'), value: 'all' },
                  { label: __('Segment', 'eara'), value: 'segment' },
                ]}
                onChange={(v) => setAttributes({ tooltipDataSource: v })}
              />
            </PanelBody>

            <PanelBody title={__('Donut Data Configuration', 'eara')} initialOpen={false}>
              <TextareaControl
                label={__('Donut Data (JSON)', 'eara')}
                value={JSON.stringify(safeDonutData, null, 2)}
                onChange={handleDonutDataChange}
                rows={8}
                help={__('Array of objects with name, value, and color properties', 'eara')}
              />
            </PanelBody>
          </>
        )}
      </InspectorControls>

      <div className="eara-chart__preview">
        <MantineProvider>
          <div style={{ padding: 16 }}>
            <RichText
              tagName="h4"
              value={chartLabel}
              onChange={(v) => setAttributes({ chartLabel: v })}
              placeholder={__('Chart title...', 'eara')}
              allowedFormats={["core/bold", "core/italic", "core/link"]}
            />
            {variant === 'bar' ? (
              <BarChart
                h={height}
                data={safeData}
                dataKey={dataKey}
                series={safeSeries}
                orientation={orientation}
                type={type}
                unit={unit}
                withBarValueLabel={withBarValueLabel}
                tooltipDataSource={tooltipDataSource}
                withLegend={withLegend}
                yAxisProps={yAxisProps}
                gridAxis={gridAxis}
              />
            ) : (
              <DonutChart
                data={safeDonutData}
                size={donutSize}
                thickness={donutThickness}
                withLabels={donutWithLabels}
                withLabelsLine={donutWithLabelsLine}
                tooltipDataSource={tooltipDataSource}
              />
            )}
          </div>
        </MantineProvider>
      </div>
    </div>
  );
}
