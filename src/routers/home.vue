<template>
  <div v-for="i in 4" :key="i" class="mb-3">
    <img :src="imgPath" alt="">
  </div>
</template>

<script>
const imgPath = require("../assets/zhiyuanlou.png")

export default {
  name: "home",
  setup() {
    return {imgPath}
  }
}
</script>

<style scoped>

</style>