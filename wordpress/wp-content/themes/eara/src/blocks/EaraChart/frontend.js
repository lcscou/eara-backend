import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { BarChart, DonutChart } from '@mantine/charts';

function EaraChartRenderer({ config }) {
  const {
    variant = 'bar',
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
  } = config || {};

  // Safe defaults
  const safeData = (data && Array.isArray(data)) ? data : [
    { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 0 },
    { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
    { month: 'March', Smartphones: 0, Laptops: 1000, Tablets: 200 },
    { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
    { month: 'May', Smartphones: 800, Laptops: 0, Tablets: 1200 },
    { month: 'June', Smartphones: 0, Laptops: 600, Tablets: 1000 }
  ];

  const safeSeries = (series && Array.isArray(series)) ? series : [
    { name: 'Smartphones', color: 'violet.6' },
    { name: 'Laptops', color: 'blue.6' },
    { name: 'Tablets', color: 'teal.6' }
  ];

  const safeDonutData = (donutData && Array.isArray(donutData)) ? donutData : [
    { name: 'USA', value: 400, color: 'indigo.6' },
    { name: 'India', value: 300, color: 'yellow.6' },
    { name: 'Japan', value: 100, color: 'teal.6' },
    { name: 'Other', value: 200, color: 'gray.6' }
  ];

  // Build yAxisProps
  const yAxisProps = {};
  if (yAxisLabel) {
    yAxisProps.label = yAxisLabel;
  }

  // Build xAxisProps
  const xAxisProps = {};
  if (xAxisLabel) {
    xAxisProps.label = xAxisLabel;
  }

  // Build grid config
  const gridConfig = {};
  if (gridAxis === 'x' || gridAxis === 'xy') {
    gridConfig.x = true;
  }
  if (gridAxis === 'y' || gridAxis === 'xy') {
    gridConfig.y = true;
  }

  if (variant === 'donut') {
    return (
      <MantineProvider>
        <DonutChart
          data={safeDonutData}
          size={donutSize}
          thickness={donutThickness}
          withLabels={donutWithLabels}
          withLabelsLine={donutWithLabelsLine}
          tooltipDataSource={tooltipDataSource}
          style={{ maxWidth: '100%' }}
        />
      </MantineProvider>
    );
  }

  return (
    <MantineProvider>
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
        yAxisProps={Object.keys(yAxisProps).length > 0 ? yAxisProps : undefined}
        xAxisProps={Object.keys(xAxisProps).length > 0 ? xAxisProps : undefined}
        gridAxis={gridAxis !== 'none' ? gridAxis : undefined}
      />
    </MantineProvider>
  );
}

function bootstrap() {
  const nodes = document.querySelectorAll('.eara-eara-chart');
  nodes.forEach((node) => {
    const dataEl = node.querySelector('.eara-eara-chart__data');
    const mount = node.querySelector('.eara-eara-chart__mount');
    if (!dataEl || !mount) return;

    let config = {};
    try {
      config = JSON.parse(dataEl.textContent || '{}');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('EaraChart: invalid JSON config', e);
    }

    const root = createRoot(mount);
    root.render(<EaraChartRenderer config={config} />);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
