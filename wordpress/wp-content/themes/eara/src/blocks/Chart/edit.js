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
} from '@wordpress/components';

import { MantineProvider } from '@mantine/core';
import { DonutChart, LineChart } from '@mantine/charts';

function sanitizeNumberArray(str) {
  try {
    return str
      .split(',')
      .map((s) => Number(String(s).trim()))
      .filter((n) => !Number.isNaN(n));
  } catch {
    return [];
  }
}

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const {
    variant = 'donut',
    title = 'Chart Title',
    height = 240,
    showLegend = true,
    donutThickness = 22,
    donutCenterLabel = 'Group',
    donutData,
    lineCategories,
    lineCurve = 'linear',
    lineSeries,
  } = attributes;

  // Ensure arrays have defaults
  const safeDonutData = donutData || [
    { name: 'Label 1', value: 25, color: '#5C7CFA' },
    { name: 'Label 2', value: 20, color: '#22C55E' },
    { name: 'Label 3', value: 15, color: '#0EA5E9' },
    { name: 'Label 4', value: 30, color: '#D946EF' },
    { name: 'Label 5', value: 10, color: '#9CA3AF' }
  ];
  const safeLineCategories = lineCategories || ['q1', 'q2', 'q3', 'q4'];
  const safeLineSeries = lineSeries || [
    { name: 'Content', color: '#4F46E5', data: [10, 20, 35, 25] },
    { name: 'Context', color: '#22C55E', data: [15, 25, 20, 30] },
    { name: 'Contact', color: '#A3E635', data: [20, 30, 25, 20] }
  ];

  const blockProps = useBlockProps({ className: 'wp-block-eara-chart' });

  const updateDonutItem = (index, key, value) => {
    const next = [...safeDonutData];
    next[index] = { ...next[index], [key]: value };
    setAttributes({ donutData: next });
  };

  const addDonutItem = () => {
    setAttributes({
      donutData: [
        ...safeDonutData,
        { name: 'Label', value: 10, color: '#64748B' },
      ],
    });
  };

  const removeDonutItem = (index) => {
    const next = safeDonutData.filter((_, i) => i !== index);
    setAttributes({ donutData: next });
  };

  const updateLineSeriesItem = (index, key, value) => {
    const next = [...safeLineSeries];
    next[index] = { ...next[index], [key]: value };
    setAttributes({ lineSeries: next });
  };

  const addLineSeries = () => {
    setAttributes({
      lineSeries: [
        ...safeLineSeries,
        { name: 'Series', color: '#4F46E5', data: [10, 20, 30, 40] },
      ],
    });
  };

  const removeLineSeries = (index) => {
    const next = safeLineSeries.filter((_, i) => i !== index);
    setAttributes({ lineSeries: next });
  };

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__('Chart Settings', 'eara')} initialOpen={true}>
          <SelectControl
            label={__('Variant', 'eara')}
            value={variant}
            options={[
              { label: __('Donut', 'eara'), value: 'donut' },
              { label: __('Line', 'eara'), value: 'line' },
            ]}
            onChange={(v) => setAttributes({ variant: v })}
          />
          <TextControl
            label={__('Title', 'eara')}
            value={title}
            onChange={(v) => setAttributes({ title: v })}
          />
          <RangeControl
            label={__('Height', 'eara')}
            value={height}
            onChange={(v) => setAttributes({ height: v })}
            min={120}
            max={480}
          />
          <ToggleControl
            label={__('Show legend', 'eara')}
            checked={!!showLegend}
            onChange={(v) => setAttributes({ showLegend: v })}
          />
        </PanelBody>

        {variant === 'donut' && (
          <PanelBody title={__('Donut Settings', 'eara')} initialOpen={true}>
            <RangeControl
              label={__('Thickness', 'eara')}
              value={donutThickness}
              onChange={(v) => setAttributes({ donutThickness: v })}
              min={8}
              max={40}
            />
            <TextControl
              label={__('Center label', 'eara')}
              value={donutCenterLabel}
              onChange={(v) => setAttributes({ donutCenterLabel: v })}
            />
            {safeDonutData.map((item, index) => (
              <div key={`donut-item-${index}`} style={{ borderTop: '1px solid #eee', paddingTop: 10, marginTop: 10 }}>
                <TextControl
                  label={__('Label', 'eara')}
                  value={item.name}
                  onChange={(v) => updateDonutItem(index, 'name', v)}
                />
                <TextControl
                  label={__('Value', 'eara')}
                  value={String(item.value)}
                  onChange={(v) => updateDonutItem(index, 'value', Number(v))}
                />
                <TextControl
                  label={__('Color', 'eara')}
                  value={item.color}
                  onChange={(v) => updateDonutItem(index, 'color', v)}
                  help={__('Hex ou qualquer cor CSS válida', 'eara')}
                />
                <Button isDestructive onClick={() => removeDonutItem(index)}>
                  {__('Remove item', 'eara')}
                </Button>
              </div>
            ))}
            <Button variant="secondary" onClick={addDonutItem}>
              {__('Add item', 'eara')}
            </Button>
          </PanelBody>
        )}

        {variant === 'line' && (
          <PanelBody title={__('Line Settings', 'eara')} initialOpen={true}>
            <SelectControl
              label={__('Curve', 'eara')}
              value={lineCurve}
              options={[
                { label: 'linear', value: 'linear' },
                { label: 'monotone', value: 'monotone' },
              ]}
              onChange={(v) => setAttributes({ lineCurve: v })}
            />
            <TextControl
              label={__('Categories (comma separated)', 'eara')}
              value={(safeLineCategories || []).join(', ')}
              onChange={(v) => setAttributes({ lineCategories: v.split(',').map((s) => s.trim()).filter(Boolean) })}
            />

            {safeLineSeries.map((serie, index) => (
              <div key={`line-serie-${index}`} style={{ borderTop: '1px solid #eee', paddingTop: 10, marginTop: 10 }}>
                <TextControl
                  label={__('Serie name', 'eara')}
                  value={serie.name}
                  onChange={(v) => updateLineSeriesItem(index, 'name', v)}
                />
                <TextControl
                  label={__('Color', 'eara')}
                  value={serie.color}
                  onChange={(v) => updateLineSeriesItem(index, 'color', v)}
                />
                <TextControl
                  label={__('Data (comma separated numbers)', 'eara')}
                  value={Array.isArray(serie.data) ? serie.data.join(', ') : ''}
                  onChange={(v) => updateLineSeriesItem(index, 'data', sanitizeNumberArray(v))}
                />
                <Button isDestructive onClick={() => removeLineSeries(index)}>
                  {__('Remove series', 'eara')}
                </Button>
              </div>
            ))}
            <Button variant="secondary" onClick={addLineSeries}>
              {__('Add series', 'eara')}
            </Button>
          </PanelBody>
        )}
      </InspectorControls>

      <div className="eara-chart__preview">
        <MantineProvider>
          <div style={{ padding: 16 }}>
            <RichText
              tagName="h4"
              value={title}
              onChange={(v) => setAttributes({ title: v })}
              placeholder={__('Chart title...', 'eara')}
              allowedFormats={["core/bold", "core/italic", "core/link"]}
            />
            {variant === 'donut' ? (
              <DonutChart
                data={donutData}
                size={height}
                thickness={donutThickness}
                withLabels
                rootLabelsOffset={20}
                tooltipDataSource="segment"
                style={{ maxWidth: '100%' }}
              >
                {donutCenterLabel}
              </DonutChart>
            ) : (
              <LineChart
                h={height}
                data={lineSeries}
                curveType={lineCurve}
                dataKey="data"
                seriesLabel="name"
                withLegend={showLegend}
                xAxis={{ categories: lineCategories }}
                grid={{ y: true }}
              />
            )}
          </div>
        </MantineProvider>
      </div>
    </div>
  );
}
