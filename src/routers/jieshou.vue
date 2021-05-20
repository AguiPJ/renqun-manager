<template>
  <ElTable :data="data" class="w-full">
    <ElTableColumn v-for="item in col" :prop="item.prop" :label="item.name" width="180" :key="item"/>
    <ElTableColumn label="操作">
      <template v-slot>
        <ElButton @click="deleteCol" type="primary" class="mr-1">编辑</ElButton>
        <ElButton type="danger">删除</ElButton>
      </template>
    </ElTableColumn>
  </ElTable>
  <div class="mt-2 flex ">
    <ElPagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100">
    </ElPagination>
    <div class="flex-grow"></div>
    <ElButton plain type="primary" class="mr-5">新增</ElButton>
  </div>
</template>

<script>
import {ElTable, ElTableColumn} from "element-plus";
import {ref} from "vue";

const col = [
  {name: "接收号码", prop: "phoneNumber"},
  {name: "姓名", prop: "userName"},
  {name: "接收状态", prop: "status"},
  {name: "创建时间", prop: "createTime"},
  {name: "更新时间", prop: "updateTime"},
]

export default {
  name: "jieshou",
  components: {ElTable, ElTableColumn},
  setup() {
    const data = [
      {
        phoneNumber: randomPhoneNum(),
        userName: "tom",
        status: "接收中",
        createTime: "2020-5-20 09:45",
        updateTime: "2020-5-20 09:45"
      },
      {
        phoneNumber: randomPhoneNum(),
        userName: "may",
        status: "接收中",
        createTime: "2020-5-20 09:45",
        updateTime: "2020-5-20 09:45"
      },
      {
        phoneNumber: randomPhoneNum(),
        userName: "ana",
        status: "接收中",
        createTime: "2020-5-20 09:45",
        updateTime: "2020-5-20 09:45"
      },
      {
        phoneNumber: randomPhoneNum(),
        userName: "foo",
        status: "接收中",
        createTime: "2020-5-20 09:45",
        updateTime: "2020-5-20 09:45"
      },
    ]

    function randomPhoneNum() {
      return "135" + Number.parseInt(Math.random() * 1000000000)
    }

    function deleteCol(index) {
      console.log(index)
    }

    function handleSizeChange(index) {
      console.log(index)
    }

    function handleCurrentChange(index) {
      console.log(index)
    }

    const currentPage = ref(1)

    return {
      data, col, deleteCol, handleSizeChange, handleCurrentChange, currentPage,
    }
  }
}
</script>

<style scoped>

</style>