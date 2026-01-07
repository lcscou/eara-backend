import { RichText } from '@wordpress/block-editor';

export default function Save(props) {
  const { attributes } = props;
  const {
    variant,
    title,
    height,
    showLegend,
    donutThickness,
    donutCenterLabel,
    donutData,
    lineCategories,
    lineCurve,
    lineSeries,
  } = attributes;

  const config = {
    variant,
    title,
    height,
    showLegend,
    donutThickness,
    donutCenterLabel,
    donutData,
    lineCategories,
    lineCurve,
    lineSeries,
  };

  const json = JSON.stringify(config);

  return (
    <div className="eara-chart" aria-label="chart">
      <div className="eara-chart__title">
        <RichText.Content tagName="h4" value={title} />
      </div>
      <div className="eara-chart__mount" />
      <script type="application/json" className="eara-chart__data">
        {json}
      </script>
    </div>
  );
}
