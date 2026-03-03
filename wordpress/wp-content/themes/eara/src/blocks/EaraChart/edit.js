import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
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
import '@mantine/charts/styles.css';

const DEFAULT_SERIES_COLORS = [
  'violet.6',
  'blue.6',
  'teal.6',
  'grape.6',
  'orange.6',
  'cyan.6',
  'pink.6',
  'indigo.6',
];

const toNumber = (value) => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const normalized = value.replace(',', '.').trim();
    const parsed = Number.parseFloat(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
};

const toMaybeNumber = (value) => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return Number.isInteger(value) ? value : Math.trunc(value);
  }

  if (typeof value === 'string') {
    const normalized = value.replace(',', '.').trim();
    if (!normalized) {
      return '';
    }

    const parsed = Number.parseFloat(normalized);
    if (Number.isFinite(parsed)) {
      return Number.isInteger(parsed) ? parsed : Math.trunc(parsed);
    }

    return value.trim();
  }

  return value ?? '';
};

const stripHtml = (value = '') => String(value).replace(/<[^>]*>/g, '').trim();

const mapDataChartToMantine = (record) => {
  if (!record || typeof record !== 'object') {
    return null;
  }

  const sourceData = record.eara_chart_source && typeof record.eara_chart_source === 'object'
    ? record.eara_chart_source
    : null;

  const acfData = record.acf && typeof record.acf === 'object' ? record.acf : {};
  const metaData = record.meta && typeof record.meta === 'object' ? record.meta : {};
  const getField = (...keys) => {
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (acfData[key] !== undefined) {
        return acfData[key];
      }

      if (metaData[key] !== undefined) {
        const value = metaData[key];
        if (Array.isArray(value) && value.length === 1) {
          return value[0];
        }
        return value;
      }
    }

    return undefined;
  };

  const chartTypeFromSource = sourceData?.chartType;
  const chartTypeRaw = chartTypeFromSource || getField('chart_type', 'chartType');
  const chartType = chartTypeRaw === 'donut' ? 'donut' : 'bar';

  const rawDataKey = sourceData?.dataKey || getField('data_key', 'dataKey');
  const dataKey = typeof rawDataKey === 'string' && rawDataKey.trim() ? rawDataKey.trim() : 'label';

  const rawSeries = Array.isArray(sourceData?.series)
    ? sourceData.series
    : (Array.isArray(getField('series', 'ser')) ? getField('series', 'ser') : []);
  const rawRows = Array.isArray(sourceData?.rows)
    ? sourceData.rows
    : (
      Array.isArray(getField('data_bar_chart', 'dataBarChart'))
        ? getField('data_bar_chart', 'dataBarChart')
        : (Array.isArray(getField('rows')) ? getField('rows') : [])
    );
  const rawDonutData = Array.isArray(sourceData?.donutData)
    ? sourceData.donutData
    : (Array.isArray(getField('data_donut_chart', 'dataDonutChart')) ? getField('data_donut_chart', 'dataDonutChart') : []);

  const inferredSeriesNames = [];
  rawRows.forEach((row) => {
    const values = Array.isArray(row?.values) ? row.values : [];
    values.forEach((valueRow, valueIndex) => {
      const seriesName = String(valueRow?.series_name || valueRow?.seriesName || valueRow?.name || '').trim();
      if (seriesName && !inferredSeriesNames.includes(seriesName)) {
        inferredSeriesNames.push(seriesName);
      }

      if (!seriesName && rawSeries[valueIndex]?.name) {
        const seriesNameByOrder = String(rawSeries[valueIndex].name).trim();
        if (seriesNameByOrder && !inferredSeriesNames.includes(seriesNameByOrder)) {
          inferredSeriesNames.push(seriesNameByOrder);
        }
      }
    });
  });

  if (inferredSeriesNames.length === 0) {
    rawRows.forEach((row) => {
      const rowLabel = String(row?.label || '').trim();
      if (rowLabel && rowLabel !== dataKey && !inferredSeriesNames.includes(rowLabel)) {
        inferredSeriesNames.push(rowLabel);
      }
    });
  }

  const resolvedSeries = (rawSeries.length > 0 ? rawSeries : inferredSeriesNames).map((seriesRow, index) => {
    if (typeof seriesRow === 'string') {
      return {
        name: seriesRow.trim(),
        color: DEFAULT_SERIES_COLORS[index % DEFAULT_SERIES_COLORS.length],
      };
    }

    const name = String(seriesRow?.name || seriesRow?.series_name || seriesRow?.seriesName || '').trim();
    const color = String(seriesRow?.color || '').trim() || DEFAULT_SERIES_COLORS[index % DEFAULT_SERIES_COLORS.length];

    return { name, color };
  }).filter((item) => item.name);

  const hasSeriesNameInValues = rawRows.some((row) => (Array.isArray(row?.values) ? row.values : []).some(
    (valueRow) => String(valueRow?.series_name || valueRow?.seriesName || valueRow?.name || '').trim()
  ));

  let data = [];

  if (hasSeriesNameInValues) {
    data = rawRows.map((row, rowIndex) => {
      const label = String(row?.label || `${__('Item', 'eara')} ${rowIndex + 1}`).trim();
      const rowObject = { [dataKey]: label };
      const values = Array.isArray(row?.values) ? row.values : [];

      values.forEach((valueRow) => {
        const seriesName = String(valueRow?.series_name || valueRow?.seriesName || valueRow?.name || '').trim();
        if (!seriesName) {
          return;
        }

        rowObject[seriesName] = toMaybeNumber(valueRow?.value);
      });

      resolvedSeries.forEach((seriesItem) => {
        if (rowObject[seriesItem.name] === undefined) {
          rowObject[seriesItem.name] = 0;
        }
      });

      return rowObject;
    });
  } else {
    const columnRows = rawRows.filter((row) => String(row?.label || '').trim());
    const columnMap = {};
    let maxValuesLength = 0;

    columnRows.forEach((row) => {
      const key = String(row.label || '').trim();
      const values = Array.isArray(row?.values) ? row.values : [];
      const parsedValues = values.map((valueRow) => toMaybeNumber(valueRow?.value));
      columnMap[key] = parsedValues;
      if (parsedValues.length > maxValuesLength) {
        maxValuesLength = parsedValues.length;
      }
    });

    data = Array.from({ length: maxValuesLength }, (_, rowIndex) => {
      const rowObject = {};

      Object.keys(columnMap).forEach((columnLabel) => {
        const value = columnMap[columnLabel][rowIndex];
        rowObject[columnLabel] = value === undefined ? '' : value;
      });

      if (rowObject[dataKey] === undefined || rowObject[dataKey] === '') {
        rowObject[dataKey] = `${__('Item', 'eara')} ${rowIndex + 1}`;
      }

      resolvedSeries.forEach((seriesItem) => {
        if (rowObject[seriesItem.name] === undefined || rowObject[seriesItem.name] === '') {
          rowObject[seriesItem.name] = 0;
        }
      });

      return rowObject;
    });
  }

  const donutDataFromRows = resolvedSeries.map((seriesItem) => {
    const total = data.reduce((sum, row) => sum + toNumber(row[seriesItem.name]), 0);
    return {
      name: seriesItem.name,
      value: total,
      color: seriesItem.color,
    };
  });

  const donutData = rawDonutData.length > 0
    ? rawDonutData
      .map((item, index) => ({
        name: String(item?.name || '').trim(),
        value: toNumber(item?.value),
        color: String(item?.color || '').trim() || DEFAULT_SERIES_COLORS[index % DEFAULT_SERIES_COLORS.length],
      }))
      .filter((item) => item.name)
    : donutDataFromRows;

  const chartLabel = stripHtml(sourceData?.chartLabel || record?.title?.rendered || '');

  return {
    variant: chartType,
    dataKey,
    series: resolvedSeries,
    data,
    donutData,
    chartLabel,
  };
};

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const {
    variant = 'bar',
    chartLabel = 'Chart Title',
    dataSourceType = 'manual',
    dataChartId = 0,
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

  const [dataCharts, setDataCharts] = useState([]);
  const [isLoadingDataCharts, setIsLoadingDataCharts] = useState(false);
  const [isApplyingDataChart, setIsApplyingDataChart] = useState(false);
  const [dataChartError, setDataChartError] = useState('');
  const [dataJsonText, setDataJsonText] = useState(JSON.stringify(Array.isArray(data) ? data : [], null, 2));
  const [seriesJsonText, setSeriesJsonText] = useState(JSON.stringify(Array.isArray(series) ? series : [], null, 2));
  const [dataJsonError, setDataJsonError] = useState('');
  const [seriesJsonError, setSeriesJsonError] = useState('');

  const applySelectedDataChart = (selectedId) => {
    if (!selectedId) {
      return Promise.resolve();
    }

    setIsApplyingDataChart(true);
    setDataChartError('');

    return apiFetch({
      path: `/wp/v2/data-chart/${selectedId}?_fields=id,title.rendered,acf,meta,eara_chart_source`,
    })
      .then((response) => {
        const mapped = mapDataChartToMantine(response);
        if (!mapped) {
          setDataChartError(__('Invalid data-chart payload.', 'eara'));
          return;
        }

        setAttributes({
          variant: mapped.variant,
          dataKey: mapped.dataKey,
          series: mapped.series,
          data: mapped.data,
          donutData: mapped.donutData,
          ...(mapped.chartLabel ? { chartLabel: mapped.chartLabel } : {}),
        });
      })
      .catch(() => {
        setDataChartError(__('Could not load selected data-chart.', 'eara'));
      })
      .finally(() => {
        setIsApplyingDataChart(false);
      });
  };

  useEffect(() => {
    if (dataSourceType !== 'data-chart') {
      return;
    }

    let mounted = true;
    setIsLoadingDataCharts(true);
    setDataChartError('');

    apiFetch({
      path: '/wp/v2/data-chart?per_page=100&_fields=id,title.rendered',
    })
      .then((response) => {
        if (!mounted) {
          return;
        }

        const options = Array.isArray(response)
          ? response.map((item) => ({
            id: item.id,
            label: stripHtml(item?.title?.rendered || `${__('Data Chart', 'eara')} #${item.id}`),
          }))
          : [];

        setDataCharts(options);
      })
      .catch(() => {
        if (!mounted) {
          return;
        }

        setDataChartError(__('Could not load data-chart records.', 'eara'));
      })
      .finally(() => {
        if (mounted) {
          setIsLoadingDataCharts(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [dataSourceType]);

  useEffect(() => {
    if (dataSourceType !== 'data-chart' || !dataChartId) {
      return;
    }

    applySelectedDataChart(dataChartId);
  }, [dataSourceType, dataChartId, setAttributes]);

  useEffect(() => {
    setDataJsonText(JSON.stringify(Array.isArray(data) ? data : [], null, 2));
    setDataJsonError('');
  }, [data]);

  useEffect(() => {
    setSeriesJsonText(JSON.stringify(Array.isArray(series) ? series : [], null, 2));
    setSeriesJsonError('');
  }, [series]);

  const blockProps = useBlockProps({ className: 'wp-block-eara-eara-chart' });

  // Safe defaults
  const safeData = Array.isArray(data) ? data : [
    { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 0 },
    { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
    { month: 'March', Smartphones: 0, Laptops: 1000, Tablets: 200 },
    { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
    { month: 'May', Smartphones: 800, Laptops: 0, Tablets: 1200 },
    { month: 'June', Smartphones: 0, Laptops: 600, Tablets: 1000 }
  ];

  const safeSeries = Array.isArray(series) ? series : [
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
    setDataJsonText(value);

    if (value.trim() === '') {
      setDataJsonError('');
      setAttributes({ data: [] });
      return;
    }

    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        setDataJsonError('');
        setAttributes({ data: parsed });
      } else {
        setDataJsonError(__('Invalid JSON: expected an array.', 'eara'));
      }
    } catch {
      setDataJsonError(__('Invalid JSON.', 'eara'));
    }
  };

  const handleSeriesChange = (value) => {
    setSeriesJsonText(value);

    if (value.trim() === '') {
      setSeriesJsonError('');
      setAttributes({ series: [] });
      return;
    }

    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        setSeriesJsonError('');
        setAttributes({ series: parsed });
      } else {
        setSeriesJsonError(__('Invalid JSON: expected an array.', 'eara'));
      }
    } catch {
      setSeriesJsonError(__('Invalid JSON.', 'eara'));
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

  const dataChartOptions = [
    { label: __('Select a data-chart', 'eara'), value: '0' },
    ...dataCharts.map((item) => ({ label: item.label, value: String(item.id) })),
  ];

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__('Data Source', 'eara')} initialOpen={true}>
          <SelectControl
            label={__('Source Type', 'eara')}
            value={dataSourceType}
            options={[
              { label: __('Manual (JSON)', 'eara'), value: 'manual' },
              { label: __('Data Chart Post Type', 'eara'), value: 'data-chart' },
            ]}
            onChange={(value) => setAttributes({ dataSourceType: value })}
          />

          {dataSourceType === 'data-chart' && (
            <>
              <SelectControl
                label={__('Data Chart Record', 'eara')}
                value={String(dataChartId || 0)}
                options={dataChartOptions}
                onChange={(value) => setAttributes({ dataChartId: Number(value) || 0 })}
                help={isLoadingDataCharts ? __('Loading records...', 'eara') : ''}
              />

              <Button
                variant="secondary"
                onClick={() => {
                  if (dataChartId) {
                    applySelectedDataChart(Number(dataChartId));
                  }
                }}
                disabled={!dataChartId || isApplyingDataChart}
              >
                {isApplyingDataChart ? __('Applying...', 'eara') : __('Refresh from data-chart', 'eara')}
              </Button>

              {dataChartError ? (
                <p>{dataChartError}</p>
              ) : null}
            </>
          )}
        </PanelBody>

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
                value={dataJsonText}
                onChange={handleDataChange}
                rows={10}
                help={dataJsonError || __('Array of objects with dataKey and series names', 'eara')}
                disabled={dataSourceType === 'data-chart'}
              />
            </PanelBody>

            <PanelBody title={__('Series Configuration', 'eara')} initialOpen={false}>
              <TextareaControl
                label={__('Series (JSON)', 'eara')}
                value={seriesJsonText}
                onChange={handleSeriesChange}
                rows={8}
                help={seriesJsonError || __('Array of objects with name and color properties', 'eara')}
                disabled={dataSourceType === 'data-chart'}
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
                disabled={dataSourceType === 'data-chart'}
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
