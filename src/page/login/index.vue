<template>
  <div class="login-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-form">
      <h2 class="login-title">管理系统</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.username === 'yang' && this.form.password === '123') {
            this.$router.push('/one')
          } else {
            this.$message.error('请输入正确的用户名和密码')
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style acoped>
.login-container {
  position: relative;
  width: 100%;
  height:100%;
  background-color: green
}
.login-form {
  position: absolute;
  width: 350px;
  height: 250px;
  top:0;
  left:0;
  bottom: 0;
  right: 0;
  margin: auto;
  padding:30px;
  background-color: rgb(255, 255, 255, 0.8); /* 透明背景色 */
  border-radius: 20px; /* 圆角 */

}

/* 标题 */
.login-title {
  color: #303133;
  text-align: center;
}
</style>
