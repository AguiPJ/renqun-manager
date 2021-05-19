<template>
  <div @click="changePage">{{ name }}</div>
</template>

<script>
import {useRouter} from "vue-router";


export default {
  name: "Link",
  props: ["name", "to"],
  setup(props) {
    const router = useRouter()

    function changePage() {
      console.log(props.to)
      router.push({name: props.to})
    }

    return {changePage}
  }
}
</script>

<style scoped>

</style>