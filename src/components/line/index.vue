<template>
  <div class="fireworks">
    <TopSide :title="title"></TopSide>
    <div class="chart-wrap">
      <div class="chart">
        <d3-line
          :data="data"
          :options="options"
          :margin="margin"
          width="100%"
          height="1260px">
        </d3-line>
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
          'left': 10,
          'right': 10,
          'top': 50,
          'bottom': 50
        },
        option: {
          'stroke': 'rgb(188, 82, 188)',
          'strokeWidth': 2.5,
          'axisXHeight': 25,
          'axisYWidth': 35,
          'axisFontSize': 14,
          'circleRadius': 5,
          'circleColor': 'rgb(188, 82, 188)',
          'curve': 'curveCardinal',
          'axisXLabel': 'Key',
          'axisYLabel': 'Value',
          'axisXLabelHeight': 30,
          'axisYLabelWidth': 20,
          'axisLabelFontSize': 12,
          'axisLabelFontWeight': 400,
          'axisLabelFontOpacity': 0.5
        },
        data: [
          {
            'key': '第一',
            'value': 80
          },
          {
            'key': '第二',
            'value': 30
          },
          {
            'key': '第三',
            'value': 60
          },
          {
            'key': '第四',
            'value': 40
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
  .select-wrap{
    position: absolute;
    top: 200px;
    left: 70px;
    height: 72px;
    padding-bottom: 20px;
    border-bottom: 2px solid #3a82f8;
  }
  .drop-down{
    display: inline-block;
    position: relative;
    border: 2px solid rgb(20, 120, 230);
    border-radius: 4px;
    background-image: linear-gradient(90deg, rgb(7, 28, 154) 0%, rgb(7, 28, 154) 100%);
    box-sizing: border-box;
    cursor: pointer;
    vertical-align: top;
  }
  .target-value{
    display: inline-block;
    font-size:40px;
    color: #fff;
    line-height: 70px;
    position: relative;
    padding: 0 80px 0 20px;
    overflow: hidden;
  }
  .target-value:after{
    content: "";
    display: inline-block;
    width: 64px;
    height: 57px;
    background: url(../../assets/images/common/fold-down-icon.png) no-repeat;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0px;
    transition: all 0.5s;
    transform: translateY(-50%) rotate(180deg);
  }
  .fold:after{
    transform: translateY(-50%) rotate(0);
  }
  .down-list{
    border-top: 2px solid #000108;
    position: relative;
  }
  .down-list li{
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
  .down-list li:hover{
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
  .chart{
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
