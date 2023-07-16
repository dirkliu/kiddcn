<template>
  <div class="page-formula">
    <el-form :model="formData">
      <el-form-item
        label="公式"
        prop="formula"
        :rules="[
          { required: true, message: '请输入计算公式', trigger: 'blur' },
          { validator: formulaValidator, trigger: 'blur'}
        ]"
      >
        <el-input type="textarea" v-model.trim="formData.formula"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        formula: ''
      }
    }
  },

  methods: {
    formulaValidator (rule, value, callback) {
      try {
        eval(value)
      } catch (err) {
        console.log('err:', err)
        callback(new Error('表达式错误'))
      }
      callback()
    }
  }
}
</script>

<style lang="scss">
.page-formula {
  padding: 20px;
}
</style>
