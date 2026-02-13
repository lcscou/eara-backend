import { RichText } from '@wordpress/block-editor';

export default function Save(props) {
  const { attributes } = props;
  const {
    variant,
    chartLabel,
    data,
    series,
    dataKey,
    orientation,
    type,
    unit,
    withBarValueLabel,
    tooltipDataSource,
    height,
    withLegend,
    yAxisLabel,
    xAxisLabel,
    gridAxis,
    donutSize,
    donutThickness,
    donutWithLabels,
    donutWithLabelsLine,
    donutData,
  } = attributes;

  const config = {
    variant,
    chartLabel,
    data,
    series,
    dataKey,
    orientation,
    type,
    unit,
    withBarValueLabel,
    tooltipDataSource,
    height,
    withLegend,
    yAxisLabel,
    xAxisLabel,
    gridAxis,
    donutSize,
    donutThickness,
    donutWithLabels,
    donutWithLabelsLine,
    donutData,
  };

  const json = JSON.stringify(config);

  return (
    <div className="eara-eara-chart" aria-label="eara-chart">
      <div className="eara-eara-chart__title">
        <RichText.Content tagName="h4" value={chartLabel} />
      </div>
      <div className="eara-eara-chart__mount" />
      <script type="application/json" className="eara-eara-chart__data">
        {json}
      </script>
    </div>
  );
}
