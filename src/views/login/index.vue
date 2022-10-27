<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!--用户名-->
      <el-form-item prop="username">
        <span class="svg-container">
          <!--直接使用element ui的小图标-->
          <!--<el-icon><avatar/></el-icon>-->
          <svg-icon icon="user" />
        </span>
        <el-input type="text" name="username" placeholder="请输入账号" v-model="hello"/>
      </el-form-item>
      <!--密码-->
      <el-form-item prop="password">
        <span class="svg-container">
          <!--使用外部svg图标-->
          <!--<svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>-->
          <svg-icon icon="password" />
        </span>
        <el-input type="password" name="password" placeholder="请输入密码"/>
        <span class="svg-container">
          <svg-icon icon="eye" />
        </span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
// 如果要使用element ui的小图标，则需要先安装，参考：https://element-plus.gitee.io/zh-CN/component/icon.html
// import { Avatar } from '@element-plus/icons'
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
