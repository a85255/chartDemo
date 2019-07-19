<template>
  <div id="map">
    <el-row>
      <div class="bw">
        <div class="title">热力图</div>
        <div id="map_hot" style="height:700px;width:100%"></div>
      </div>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
var map_thermody
var app = {}
export default {
  name:'',
  components: {},
  props: {},
  data () {
    return {
      chart1: {},
      mapdata: [
        {"JZWMC":"综合实验楼","RS":174894,"JZJD":"118.856278142911","JZWD":"32.0277010409315","XQH":"01"},
        {"JZWMC":"南京理工大学医院","RS":37672,"JZJD":"118.85148464604","JZWD":"32.0309109216073","XQH":"01"},
        {"JZWMC":"基础实验楼","RS":26928,"JZJD":"118.859570787479","JZWD":"32.0264000414178","XQH":"01"},
        {"JZWMC":"动力学院","RS":25432,"JZJD":"118.858528701411","JZWD":"32.02476055616","XQH":"01"},
        {"JZWMC":"第四教学楼","RS":23800,"JZJD":"118.855691076727","JZWD":"32.0244554613682","XQH":"01"},
        {"JZWMC":"工程训练中心","RS":23664,"JZJD":"118.860661445981","JZWD":"32.0261469569417","XQH":"01"},
        {"JZWMC":"孝陵卫街200号362栋","RS":22984,"JZJD":"118.859325145087","JZWD":"32.02819799017","XQH":"01"},
        {"JZWMC":"新图书馆","RS":21896,"JZJD":"118.856164310756","JZWD":"32.0260091543292","XQH":"01"},
        {"JZWMC":"材料楼（在建）","RS":19856,"JZJD":"118.857685500831","JZWD":"32.0269972609745","XQH":"01"},
        {"JZWMC":"第二教学楼","RS":15504,"JZJD":"118.857550179609","JZWD":"32.0278595808224","XQH":"01"},
        {"JZWMC":"老图书馆","RS":14960,"JZJD":"118.855249100857","JZWD":"32.0279064659212","XQH":"01"},
        {"JZWMC":"材料科学与工程学院","RS":13328,"JZJD":"118.857722472558","JZWD":"32.0265464879852","XQH":"01"},
        {"JZWMC":"第三教学楼","RS":10744,"JZJD":"118.857657012825","JZWD":"32.0250675141347","XQH":"01"},
        {"JZWMC":"孝陵卫街200号339栋","RS":10064,"JZJD":"118.857731766331","JZWD":"32.0260497101776","XQH":"01"},
        {"JZWMC":"化工学院/环境与生物工程学院","RS":8976,"JZJD":"118.859606022556","JZWD":"32.0274454116796","XQH":"01"},
        {"JZWMC":"孝陵卫街200号338栋","RS":8568,"JZJD":"118.857645350003","JZWD":"32.0256558739334","XQH":"01"},
        {"JZWMC":"孝陵卫街200号380栋","RS":8160,"JZJD":"118.859613793634","JZWD":"32.0256289294549","XQH":"01"},
        {"JZWMC":"校办公大楼","RS":7752,"JZJD":"118.854626546649","JZWD":"32.0315688092299","XQH":"01"},
        {"JZWMC":"第一教学楼","RS":7344,"JZJD":"118.858654603184","JZWD":"32.0257835173452","XQH":"01"},
        {"JZWMC":"留园/明苑美食广场","RS":6936,"JZJD":"118.854255058683","JZWD":"32.0241977703465","XQH":"01"},
        {"JZWMC":"孝陵卫街200号353栋","RS":6800,"JZJD":"118.860489749735","JZWD":"32.0273040771834","XQH":"01"},
        {"JZWMC":"艺文馆","RS":6664,"JZJD":"118.854742856718","JZWD":"32.0299073647066","XQH":"01"},
        {"JZWMC":"财务处","RS":6256,"JZJD":"118.85556703822","JZWD":"32.0296291540926","XQH":"01"},
        {"JZWMC":"孝陵卫街200号332栋","RS":5712,"JZJD":"118.858610790098","JZWD":"32.0239828313709","XQH":"01"},
        {"JZWMC":"孝陵卫街200号382栋","RS":5712,"JZJD":"118.859412611879","JZWD":"32.0244686174865","XQH":"01"},
        {"JZWMC":"智能机器人研究所","RS":5576,"JZJD":"118.860097620992","JZWD":"32.024453972274","XQH":"01"},
        {"JZWMC":"学术交流中心","RS":5576,"JZJD":"118.857039716925","JZWD":"32.029676484817","XQH":"01"},
        {"JZWMC":"老年活动中心","RS":5576,"JZJD":"118.857265320695","JZWD":"32.0339753662805","XQH":"01"},
        {"JZWMC":"孝陵卫街200号247栋","RS":4488,"JZJD":"118.853513639747","JZWD":"32.0247881755567","XQH":"01"},
        {"JZWMC":"星苑美食广场","RS":2720,"JZJD":"118.85879672030093","JZWD":"32.022708652213225","XQH":"01"},
        {"JZWMC":"孝陵卫街200号333栋","RS":2176,"JZJD":"118.858862206859","JZWD":"32.0238089428191","XQH":"01"},
        {"JZWMC":"逸夫教学楼","RS":1088,"JZJD":"118.856583966533","JZWD":"32.0247267055787","XQH":"01"},
        {"JZWMC":"孝陵卫街200号383栋","RS":1088,"JZJD":"118.859408195472","JZWD":"32.0242381717353","XQH":"01"},
        {"JZWMC":"孝陵卫街200号432栋","RS":1088,"JZJD":"118.861385947278","JZWD":"32.0283646643818","XQH":"01"},
        {"JZWMC":"体育部","RS":1088,"JZJD":"118.854099746306","JZWD":"32.0271154737467","XQH":"01"},
        {"JZWMC":"学生第二、第三食堂","RS":952,"JZJD":"118.852538891965","JZWD":"32.0276727263697","XQH":"01"},
        {"JZWMC":"工会","RS":816,"JZJD":"118.85660734971","JZWD":"32.0338445863126","XQH":"01"},
        {"JZWMC":"教工（研究生）餐厅","RS":816,"JZJD":"118.853319134074","JZWD":"32.0331215541121","XQH":"01"}
      ]
    }
  },
  created () {},
  mounted () {
    this.map_hot()
  },
  methods: {
    map_hot () {
      this.chart1 = echarts.init(document.getElementById('map_hot'))
      let data = this.mapdata
      let points = []
      data.forEach(el => {
        points.push([el.JZJD, el.JZWD, el.RS])
      })
      let option = {
        animation: false,
        bmap: {
            center: [118.856278142911, 32.0277010409315],
            zoom: 16,
            roam: true
        },
        visualMap: {
            show: false,
            top: 'top',
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: ['blue', 'blue', 'green', 'yellow', 'red']
            }
        },
        series: [{
            type: 'heatmap',
            coordinateSystem: 'bmap',
            data: points,
            pointSize: 5,
            blurSize: 6
        }]
      }
      this.chart1.setOption(option)
      if (!app.inNode) {
        // 添加百度地图插件
        console.log(111111111111)
          var bmap = this.chart1.getModel().getComponent('bmap').getBMap();
          bmap.addControl(new BMap.MapTypeControl());
      }
    },
    // 地图初始化
    map_init () {
      map_thermody = new BMap.Map("map_hot") // 创建地图实例
      let point = new BMap.Point(118.856278142911,32.0277010409315)
      map_thermody.centerAndZoom(point, 16) // 初始化地图，设置中心点坐标和地图级别
      map_thermody.enableScrollWheelZoom() // 允许滚轮缩放
      if(!this.isSupportCanvas()){
        alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
      }
    },
    //判断浏览区是否支持canvas
    isSupportCanvas () {
      let elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    },
  },
}
</script>

<style lang='css' scoped>
#map {
  padding: 20px;
  background-color: #f1f1f1;
}
.bw {
  background-color: #fff;
  border-radius: 6px
}
.title {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
  text-align: left;
  padding-left: 20px;
}
.mb_20 {
  margin-bottom: 20px;
}
</style>
