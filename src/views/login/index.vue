<template>
  <div class="login-container">
    <el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginRules">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!--用户名-->
      <el-form-item prop="username">
        <span class="svg-container">
          <!--直接使用element ui的小图标-->
          <!--<el-icon><avatar/></el-icon>-->
          <svg-icon icon="user"/>
        </span>
        <el-input type="text" name="username" placeholder="请输入账号" v-model="loginForm.username"/>
      </el-form-item>
      <!--密码-->
      <el-form-item prop="password">
        <span class="svg-container">
          <!--使用外部svg图标-->
          <!--<svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>-->
          <svg-icon icon="password"/>
        </span>
        <el-input :type="passwordType" name="password" placeholder="请输入密码" v-model="loginForm.password"/>
        <span class="show-pwd" @click="onChangePwdType">
          <svg-icon :icon="passwordType==='password'?'eye-close':'eye-open'"/>
        </span>
      </el-form-item>
      <!--登录按钮-->
      <el-button type="primary" style="width: 100%; margin-bottom: 30px"
                 :loading="loading" @click="handleLogin">登录
      </el-button>
    </el-form>
  </div>
</template>

<script setup>
// 如果要使用element ui的小图标，则需要先安装，参考：https://element-plus.gitee.io/zh-CN/component/icon.html
// import { Avatar } from '@element-plus/icons'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { validatePassword } from '@/views/login/rules'

// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})
// 验证规则
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [{
    required: true,
    trigger: 'blur',
    validator: validatePassword()
  }]
})

// 处理密码框文本显示
const passwordType = ref('password')
const onChangePwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}

// 处理登录
const loading = ref(false)
const loginFormRef = ref(null)
const store = useStore()
const handleLogin = () => {
  loginFormRef.value.validate(valid => {
    if (!valid) return
    store.dispatch('user/login', loginForm.value).then((res) => {
      loading.value = false
      console.log(res)
      // TODO 登录后操作
    }).catch(err => {
      console.log(err)
    })
  })
}

</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
