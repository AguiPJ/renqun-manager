<template>
<h2>备份</h2>
  <div class="container flex flex-col h-full">
    <div class="flex mt-3">
      <ElButton>浏览</ElButton>
      <div class="flex-grow"/>
      <ElButton>备份</ElButton>
      <div>
        <ElCheckbox v-model="autoBakIsCheck" class="pt-2 ml-2">自动备份</ElCheckbox>
      </div>
    </div>

    <div class="border-2 mt-2 border-blue-600 min-h-full flex-grow">
      info
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "back",
  setup(){
    const autoBakIsCheck = ref(true)

    return {autoBakIsCheck}
  }
}
</script>

<style scoped>

</style>