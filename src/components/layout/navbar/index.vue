<template>
  <div class="navbar">
    <!--侧边栏显示/隐藏按钮-->
    <hamburger class="hamburger-container" />
    <!--面包屑组件-->
    <bread-crumb id="guide-breadcrumb" class="breadcrumb-container" />
    <!--右边头像/按钮等-->
    <div class="right-menu">
      <!--引导页-->
      <guide class="right-menu-item hover-effect"></guide>
      <!--全文检索-->
      <header-search class="right-menu-item hover-effect"></header-search>
      <!--全屏-->
      <screenfull class="right-menu-item hover-effect"></screenfull>
      <!--动态换肤(主题)-->
      <theme-slect class="right-menu-item hover-effect"></theme-slect>
      <!--国际化-->
      <lang-select class="right-menu-item hover-effect" />
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="$store.getters.userInfo.avatar"
          ></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>{{$t('msg.navBar.home')}}</el-dropdown-item>
            </router-link>
            <a target="_blank" href="">
              <el-dropdown-item>{{$t('msg.navBar.course')}}</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">
              {{$t('msg.navBar.logout')}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import Hamburger from '@/components/hamburger'
import BreadCrumb from '@/components/breadcrumb'
import LangSelect from '@/components/lang-select'
import ThemeSlect from '@/components/theme-select'
import Screenfull from '@/components/screenfull'
import HeaderSearch from '@/components/header-search'
import Guide from '@/components/guide'

const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    ::v-deep .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
      }
    }

    ::v-deep .avatar-container {
      cursor: pointer;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
