<template>
  <div id="myChart" class="min-h-full"/>
</template>

<script>
import {init} from "echarts";
import {reactive,} from "vue";
import {getStatistics} from "@/service/tongji";
import {dateFormat} from "@/utils/format";


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
        data: [1,2,3,4,5]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '致远楼',
          type: 'line',
          stack: '总量',
          data: []
        },
        {
          name: '春熙路',
          type: 'line',
          stack: '总量',
          data: []
        },
        {
          name: '长白山',
          type: 'line',
          stack: '总量',
          data: []
        },
      ]
    });
    // // 绘制图表

    this.myTimer = setInterval(async ()=>{
      const {data} = await getStatistics()
      option.series.forEach(i=> {
        data.series.forEach(item=> {
          if(item.name === i.name){
            i.data = item.data
          }
        })

      })
      option.xAxis.data = data.times.map(i => dateFormat("hh:mm:ss", new Date(i)))
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