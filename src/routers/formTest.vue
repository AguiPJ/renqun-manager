<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="名称" prop="name">
      <el-input v-model="ruleForm.name"/>
    </el-form-item>
    <el-form-item label="手机号码" prop="phoneNumber">
      <el-input maxlength="11" v-model="ruleForm.phoneNumber"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import {defineComponent} from "vue";
import {addTableData} from "@/service/jieshou";
import {dateFormat} from "@/utils/format";
import {ElMessage} from "element-plus";

export default defineComponent({
  data() {
    return {
      ruleForm: {
        name: '',
        phoneNumber: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        phoneNumber: [
          {required: true, message: '请输入手机号码', trigger: 'blur'},
          {min: 11, max: 11, message: '长度为11个字符', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm() {

      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const dateTime = dateFormat()
          addTableData({
            userName: this.$data.ruleForm.name,
            phoneNumber: this.$data.ruleForm.phoneNumber,
            status: "接收中",
            createTime: dateTime,
            updateTime: dateTime,
          }).then(({code, data}) => {
            if (code === 200) {
              ElMessage.success({
                message: data,
                type: 'success'
              });
              this.$parent.getData()

            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
})
</script>