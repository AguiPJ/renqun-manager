<template>
  <el-table :data="tableData.arr" class="w-full">
    <el-table-column type="index"/>

    <el-table-column label="接收号码">
      <template #default="scope">
        <el-input v-if="scope.row.edit" v-model="scope.row.phoneNumber"/>
        <span v-else>{{ scope.row.phoneNumber }}</span>
      </template>
    </el-table-column>

    <el-table-column label="姓名">
      <template #default="scope">
        <el-input v-if="scope.row.edit" v-model="scope.row.userName"/>
        <span v-else>{{ scope.row.userName }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="接收状态"/>

    <el-table-column label="创建时间">
      <template #default="scope">
        <span>{{ dateFormat({date: scope.row.createTime}) }}</span>
      </template>
    </el-table-column>
    <el-table-column label="修改">
      <template #default="scope">
        <span>{{ dateFormat({date: scope.row.updateTime}) }}</span>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template #default="scope">
        <ElButton v-if="scope.row.edit" class="mr-1" type="success" @click="updateCol(scope.row)">修改</ElButton>
        <ElButton v-else class="mr-1" type="primary" @click="updateCol(scope.row)">编辑</ElButton>
        <ElButton type="danger" @click="deleteCol(scope.row)">删除</ElButton>
      </template>
    </el-table-column>
  </el-table>
  <div class="mt-2 flex ">
    <el-pagination
        :current-page="tableData.currentPage"
        :page-size="10"
        :page-sizes="[10, 20, 50, 100]"
        :total="tableData.total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
    </el-pagination>
    <div class="flex-grow"></div>
    <ElButton class="mr-5" plain type="primary" @click="tableData.showAddCard = !tableData.showAddCard">新增</ElButton>

    <div v-show="tableData.showAddCard">
      <formTest/>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
import {deleteTableData, getTableData, updateTableData} from "@/service/jieshou";
import formTest from "@/components/add-form";
import {ElMessage} from "element-plus";
import {dateFormat} from "@/utils/format";

export default {
  name: "jieshou",
  components: {formTest},
  setup() {
    let tableData = reactive({
      arr: [],
      showAddCard: false,
      pageSize: 10,
      currentPage: 1,
      total: 100
    })

    function deleteCol(row) {
      deleteTableData(row._id).then(({code, data}) => {
        if (code === 200) {
          getData()
          ElMessage.success({
            message: data,
            type: 'success'
          });
        }
      })
    }

    function updateCol(row) {
      if (!row.edit) {
        row.edit = true
      } else {
        row.edit = false
        updateTableData(row).then(({code, data}) => {
          if (code === 200) {
            ElMessage.success({
              message: data,
              type: 'success'
            });
            getData()
          } else {
            ElMessage.warning({
              message: data,
              type: 'success'
            });
          }
        })
      }
    }

    function handleSizeChange(index) {
      tableData.pageSize = index
      getData()
    }

    function handleCurrentChange(index) {
      tableData.currentPage = index
      getData()
    }

    function getData() {
      getTableData(tableData.currentPage, tableData.pageSize).then(({data, total}) => {
        tableData.arr = data
        tableData.total = total
      })
    }

    getData()
    return {
      tableData, deleteCol, updateCol, handleSizeChange, handleCurrentChange, getData, dateFormat
    }
  }
}
</script>

<style scoped>

</style>