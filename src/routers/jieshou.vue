<template>
  <ElTable :data="tableData.arr" class="w-full">
    <ElTableColumn v-for="item in col" :prop="item.prop" :label="item.name" width="180" :key="item"/>
    <ElTableColumn label="操作">
      <template #default="scope">
        <ElButton  type="primary" class="mr-1">编辑</ElButton>
        <ElButton @click="deleteCol(scope.row._id)" type="danger">删除</ElButton>
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
    <ElButton plain type="primary" @click="tableData.showAddCard = !tableData.showAddCard" class="mr-5">新增</ElButton>

    <div v-show="tableData.showAddCard">
      <formTest />
    </div>
  </div>
</template>

<script>
import {reactive, ref} from "vue";
import {deleteTableData, getTableData} from "@/service/jieshou";
import formTest from "@/routers/formTest";
import {ElMessage} from "element-plus";

const col = [
  {name: "接收号码", prop: "phoneNumber"},
  {name: "姓名", prop: "userName"},
  {name: "接收状态", prop: "status"},
  {name: "创建时间", prop: "createTime"},
  {name: "更新时间", prop: "updateTime"},
]

export default {
  name: "jieshou",
  components:{formTest},
  setup() {
    let tableData = reactive({
      arr: [],
      showAddCard: false
    })

    function deleteCol(bid) {
      deleteTableData(bid).then(({code, data}) => {
        if(code===200){
          getData()
          ElMessage.success({
            message: data,
            type: 'success'
          });
        }
      })
    }

    function handleSizeChange(index) {
      console.log(index)
    }

    function handleCurrentChange(index) {
      console.log(index)
    }

    const currentPage = ref(1)

    function getData() {
      getTableData().then(({data}) => {
        tableData.arr = data
      })
    }
    getData()
    return {
      tableData, col, deleteCol, handleSizeChange, handleCurrentChange, currentPage, getData
    }
  }
}
</script>

<style scoped>

</style>