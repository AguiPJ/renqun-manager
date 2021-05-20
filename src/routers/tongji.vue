<template>
  <div id="myChart" class="min-h-full"/>
</template>

<script>
import {init} from "echarts";
import {reactive,} from "vue";


export default {
  name: "tongji",
  data(){
    return {
      myTimer: null
    }
  },
  mounted(){
    let myChart = reactive(init(document.getElementById("myChart")));

    const option = reactive({
      title: {
        text: '人数统计'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['致远楼', '春熙路', '长白山']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '致远楼',
          type: 'line',
          stack: '总量',
          data: [120, 210, 100, 220, 90, 190, 150]
        },
        {
          name: '春熙路',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '长白山',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
      ]
    });
    // // 绘制图表
    myChart.setOption(option);

    this.myTimer = setInterval(()=>{
      option.series.forEach(i=> {
        i.data = i.data.reverse()
      })
      myChart.setOption(option)
    }, 2000)
  },
  unmounted() {
    console.log(this.myTimer)
    clearInterval(this.myTimer)
  }

}
</script>

<style scoped>

</style>