<template>
  <div class="fireworks">
    <TopSide :title="title"></TopSide>
    <div class="chart-wrap">
      <div class="chart">
        <d3-timeline
          :data="data"
          :options="options"
          :margin="margin"
          width="100%"
          height="1060px">
        </d3-timeline>
      </div>
    </div>
  </div>
</template>

<script>
  import TopSide from '../common/TopSide'
  import DropDown from '../common/DropDown'

  export default {
    data () {
      return {
        title: '测试页面',
        districtData: [],
        districtKey: 1,
        targetValue: '',
        seenDis: false,
        margin: {
          'left': 30,
          'right': 10,
          'top': 50,
          'bottom': 50
        },
        option: {
          'intervalCornerRadius': 4,
          'symbolSize': 200,
          'groupLabelFontSize': 14,
          'groupLabelFontWeight': 400,
          'groupLaneWidth': 80,
          'axisXHeight': 30,
          'axisXFontSize': 12,
          'axisXFontWeight': 400,
          'axisXLabel': 'Key',
          'axisXLabelHeight': 30,
          'axisXLabelFontSize': 14,
          'axisXLabelFontWeight': 600,
          'backgroundColor': 'rgba(192, 192, 192, 0.125)',
          'borderRadius': 10,
          'borderWidth': 2,
          'borderColor': '#ccc',
          'boundingLineWidth': 2,
          'boundingLineColor': '#ccc',
          'currentTimeLineWidth': 2,
          'currentTimeLineColor': 'red'
        },
        data: [
          {
            'group': 'Name',
            'at': 1462032000000,
            'symbol': 'symbolCircle',
            'title': 'kjlqwjq',
            'className': 'entry--point--warn'
          },
          {
            'group': 'Name',
            'at': 1462032000000,
            'title': 'wlqjlw',
            'className': 'entry--point--success',
            'symbol': 'symbolWye'
          },
          {
            'group': 'Name',
            'at': 1467302400000,
            'className': 'entry--point--error',
            'title': 'lqwpqow',
            'symbol': 'symbolSquare'
          },
          {
            'group': 'Name',
            'at': 1469980800000,
            'className': 'entry--point--error',
            'symbol': 'symbolDiamond',
            'title': 'wopqowp'
          },
          {
            'group': 'Name',
            'at': 1472659200000,
            'title': 'qoiwiu',
            'className': 'entry--point--error',
            'symbol': 'symbolTriangle'
          },
          {
            'group': 'Name',
            'at': 1475251200000,
            'symbol': 'symbolSquare',
            'title': 'poiwsklajs'
          },
          {
            'group': 'Type',
            'at': 1462896000000,
            'title': 'owqpwpqw',
            'className': 'entry--point--success',
            'symbol': 'symbolSquare'
          },
          {
            'group': 'Type',
            'at': 1463241600000,
            'className': 'entry--point--success',
            'symbol': 'symbolCross',
            'title': 'qpwiqiwpo'
          },
          {
            'group': 'Type',
            'at': 1468080000000,
            'className': 'entry--point--success',
            'symbol': 'symbolCross',
            'title': 'wqpwipqw'
          },
          {
            'group': 'Type',
            'label': 'I\'m a label with a custom class',
            'from': 1464710400000,
            'to': 1467302400000,
            'title': 'This is my title'
          },
          {
            'group': 'Type',
            'at': 1475251200000,
            'title': 'wqwqwipqw',
            'className': 'entry--point--warn',
            'symbol': 'symbolStar'
          },
          {
            'group': 'Type',
            'symbol': 'symbolStar',
            'at': 1477929600000,
            'title': 'wqsjksals'
          },
          {
            'group': 'Imp',
            'label': 'I\'am a label of class \'entry--interval--error\'',
            'from': 1463241600000,
            'to': 1467302400000,
            'className': 'entry--interval--error'
          },
          {
            'group': 'Imp',
            'label': 'I\'am a label of class \'entry--interval--success\'',
            'from': 1469980800000,
            'to': 1473609600000,
            'className': 'entry--interval--success'
          }
        ]
      }
    },
    components: {
      TopSide,
      DropDown
    },
    mounted () {
    },
    methods: {}
  }
</script>
<style scoped>
  .d3-time-line .entry--interval--default {
    fill: #6eadc1;
    stroke: #6eadc1;
    fill-opacity: 0.125;
    stroke-opacity: 1;
    cursor: pointer;
  }

  .d3-time-line .entry--point--default {
    fill: #6eadc1;
    stroke: #6eadc1;
    fill-opacity: 0.125;
    stroke-opacity: 1;
    cursor: pointer;
  }

  .d3-time-line .entry--interval--default text {
    fill: #000;
  }

  .d3-time-line .entry--interval--error {
    fill: #ff3860;;
    stroke: #ff3860;
    fill-opacity: 0.125;
    stroke-opacity: 1;
    cursor: pointer;
  }

  .d3-time-line .entry--point--error {
    fill: #ff3860;;
    stroke: #ff3860;
    fill-opacity: 0.125;
    stroke-opacity: 1;
    cursor: pointer;
  }

  .d3-time-line .entry--interval--error text {
    fill: #fff;
  }

  .d3-time-line .entry--interval--success {
    fill: #23d160;;
    stroke: #23d160;
    fill-opacity: 0.125;
    stroke-opacity: 1;
    cursor: pointer;
  }


  .d3-time-line .entry--point--success {
    fill: #23d160;;
    stroke: #23d160;
    fill-opacity: 0.125;
    stroke-opacity: 1;
    cursor: pointer;
  }

  .d3-time-line .entry--interval--success text {
    fill: #fff;
  }

  .d3-time-line .entry--interval--info {
    fill: #167df0;;
    stroke: #167df0;
    fill-opacity: 0.125;
    stroke-opacity: 1;
    cursor: pointer;
  }

  .d3-time-line .entry--point--info {
    fill: #167df0;;
    stroke: #167df0;
    fill-opacity: 0.125;
    stroke-opacity: 1;
    cursor: pointer;
  }

  .d3-time-line .entry--interval--info text {
    fill: #fff;
  }

  .d3-time-line .entry--interval--warn {
    fill: #ffdd57;;
    stroke: #ffdd57;
    fill-opacity: 0.125;
    stroke-opacity: 1;
    cursor: pointer;
  }

  .d3-time-line .entry--point--warn {
    fill: #ffdd57;;
    stroke: #ffdd57;
    fill-opacity: 0.125;
    stroke-opacity: 1;
    cursor: pointer;
  }

  .d3-time-line .entry--interval--warn text {
    fill: rgba(0,0,0,.7);
  }

  .down-list li {
    cursor: pointer;
    font-size: 34px;
    color: #adb8fc;
    line-height: 40px;
    user-select: none;
    margin: 20px 0;
    text-indent: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 6em;
  }

  .down-list li:hover {
    color: #fff;
  }

  .chart-wrap {
    width: 2900px;
    height: 1404px;
    background: url(../../assets/images/stride/fireworks/chart-bg.png) no-repeat center;
    background-size: 100% 100%;
    margin: 320px auto 0;
    overflow: hidden;
    position: relative;
  }

  .chart {
    position: absolute;
    top: 70px;
    left: 100px;
    width: 2700px;
    height: 1264px;
    box-sizing: border-box;
  }

  .chart-legend {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .chart-legend li {
    color: #fff;
    font-size: 32px;
    display: inline-block;
    height: 70px;
    width: 140px;
    text-align: right;
    cursor: pointer;
  }

  .chart-legend li:nth-child(2) {
    background: url(../../assets/images/stride/fireworks/chart-legend-value.png) no-repeat 28px 10px;
  }

  .chart-legend li:nth-child(1) {
    background: url(../../assets/images/stride/fireworks/chart-legend-tb.png) no-repeat 28px 10px;
  }

  .chart-legend li:nth-child(3) {
    background: url(../../assets/images/stride/fireworks/chart-legend-hb.png) no-repeat 28px 10px;
  }
</style>
