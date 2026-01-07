import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { DonutChart, LineChart } from '@mantine/charts';

function ChartRenderer({ config }) {
  const {
    variant = 'donut',
    height = 240,
    showLegend = true,
    donutThickness = 22,
    donutCenterLabel = 'Group',
    donutData,
    lineCategories,
    lineCurve = 'linear',
    lineSeries,
  } = config || {};

  // Ensure arrays have defaults
  const safeDonutData = (donutData && Array.isArray(donutData)) ? donutData : [
    { name: 'Label 1', value: 25, color: '#5C7CFA' },
    { name: 'Label 2', value: 20, color: '#22C55E' },
    { name: 'Label 3', value: 15, color: '#0EA5E9' },
    { name: 'Label 4', value: 30, color: '#D946EF' },
    { name: 'Label 5', value: 10, color: '#9CA3AF' }
  ];
  const safeLineCategories = (lineCategories && Array.isArray(lineCategories)) ? lineCategories : ['q1', 'q2', 'q3', 'q4'];
  const safeLineSeries = (lineSeries && Array.isArray(lineSeries)) ? lineSeries : [
    { name: 'Content', color: '#4F46E5', data: [10, 20, 35, 25] },
    { name: 'Context', color: '#22C55E', data: [15, 25, 20, 30] },
    { name: 'Contact', color: '#A3E635', data: [20, 30, 25, 20] }
  ];

  if (variant === 'donut') {
    return (
      <MantineProvider>
        <DonutChart
          data={safeDonutData}
          size={height}
          thickness={donutThickness}
          withLabels
          rootLabelsOffset={20}
          tooltipDataSource="segment"
          style={{ maxWidth: '100%' }}
        >
          {donutCenterLabel}
        </DonutChart>
      </MantineProvider>
    );
  }

  return (
    <MantineProvider>
      <LineChart
        h={height}
        data={safeLineSeries}
        curveType={lineCurve}
        dataKey="data"
        seriesLabel="name"
        withLegend={showLegend}
        xAxis={{ categories: safeLineCategories }}
        grid={{ y: true }}
      />
    </MantineProvider>
  );
}

function bootstrap() {
  const nodes = document.querySelectorAll('.eara-chart');
  nodes.forEach((node) => {
    const dataEl = node.querySelector('.eara-chart__data');
    const mount = node.querySelector('.eara-chart__mount');
    if (!dataEl || !mount) return;

    let config = {};
    try {
      config = JSON.parse(dataEl.textContent || '{}');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Chart: invalid JSON config', e);
    }

    const root = createRoot(mount);
    root.render(<ChartRenderer config={config} />);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
