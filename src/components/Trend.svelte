<script>
  import FusionCharts from 'fusioncharts';
  import Timeseries from 'fusioncharts/fusioncharts.timeseries';
  import SvelteFC, { fcRoot } from 'svelte-fusioncharts';

  fcRoot(FusionCharts, Timeseries);

  import { genTrendData } from '../lib/trendGen.js';
  import schema from '../data/trend.config.js';
  import citiesdata from '../data/citiesdata.js';
  const data = genTrendData(citiesdata, 'confirmed');

  const getChartConfig = ([data, schema]) => {
    const fusionDataStore = new FusionCharts.DataStore(),
      fusionTable = fusionDataStore.createDataTable(data, schema);

    return {
      type: 'timeseries',
      width: '100%',
      height: 450,
      renderAt: 'chart-container',
      dataSource: {
        data: fusionTable,
        caption: {
          text: '各辖区累计确诊趋势图'
        },
        navigator: {
          enabled: 0
        },
        yAxis: [
          {
            plot: {
              value: 'Count',
              type: 'smooth-line',
              connectNullData: true
            },
            format: {
              suffix: '人'
            },
            title: '人数',
            series: 'City'
          }
        ]
      }
    };
  };
</script>

<main>
  <div class="chart-container">
    <SvelteFC
      {...getChartConfig([data, schema])}
    />
  </div>
</main>