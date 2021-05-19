<template>
  <div v-for="i in dataList" :key="i" class="mb-3 flex">
    <img :src="imgPath" alt="" class="w-1/2 mr-1">
    <div>
      <p>地点:{{ i.time }}</p>
      <p>人数:{{ i.num }}</p>
      <p>时间:{{ i.time }}</p>
    </div>
  </div>
</template>

<script>
const imgPath = require("../assets/zhiyuanlou.png")
import {reactive} from "vue";


export default {
  name: "home",
  setup() {
    const dataList = reactive([
      {
        location: "致远楼",
        num: 13,
        time: "2021-3-21"
      }, {
        location: "教学楼",
        num: 160,
        time: "2021-3-21"
      }, {
        location: "图书楼",
        num: 176,
        time: "2021-3-21"
      },
    ])
    return {imgPath, dataList}
  }
}
</script>

<style scoped>

</style>