<template>
  <div>
    <div :id='idnum'  :style="{width:'100%', height:'400px'}"></div>
  </div>
</template>
<script>
export default {
  name: 'EchartCom',
  props: ['num'],
  data () {
    return {
    }
  },
  mounted () {
    this.drawLine()
  },
  computed: {
    idnum () {
      return 'myChart' + this.num
    }
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(this.idnum))
      let sizeFun = function () {
        myChart.resize()
      }
      window.addEventListener('resize', sizeFun)
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
