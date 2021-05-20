<template>
  <ElTable :data="data" class="w-full">
    <ElTableColumn v-for="item in col" :prop="item.prop" :label="item.name" width="180" :key="item"/>
    <ElTableColumn>
      <template v-slot>
        <button @click="deleteCol">编辑</button>
        <button>删除</button>
      </template>
    </ElTableColumn>
  </ElTable>
</template>

<script>
import {ElTable, ElTableColumn} from "element-plus";

const col = [
  {name:"手机号码",prop:"phoneNumber",width:180},
  {name:"姓名",prop:"userName",width:180},
  {name:"接收状态",prop:"status",width:180},
  {name:"创建时间",prop:"createTime",width:180},
  {name:"更新时间",prop:"updateTime",width:180},
  {name:"操作",prop:"doSome",width:180},
]

export default {
  name: "jieshou",
  components:{ElTable,ElTableColumn},
  setup(){
    const data = [
      {phoneNumber:'123',userName:"tom", status:"接收中", createTime:"2020-5-20 09:45",updateTime:"2020-5-20 09:45"},
      {phoneNumber:'123',userName:"may", status:"接收中", createTime:"2020-5-20 09:45",updateTime:"2020-5-20 09:45"},
      {phoneNumber:'123',userName:"ana", status:"接收中", createTime:"2020-5-20 09:45",updateTime:"2020-5-20 09:45"},
      {phoneNumber:'123',userName:"foo", status:"接收中", createTime:"2020-5-20 09:45",updateTime:"2020-5-20 09:45"},
    ]

    function deleteCol(index) {
      console.log(index)
    }
    return {data, col, deleteCol}
  }
}
</script>

<style scoped>

</style>