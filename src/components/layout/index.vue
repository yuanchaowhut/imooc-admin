<template>
  <div class="app-wrapper" :class="[$store.getters.sidebarOpened ? 'open-sidebar' : 'hide-sidebar']">
    <!-- 左侧 menu -->
    <sidebar id="guide-sidebar"
             class="sidebar-container"
             :style="{ backgroundColor: variables.menuBg }"
    />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <navbar />
        <!-- tags -->
        <tags-view id="guide-tags"></tags-view>
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import Sidebar from './sidebar'
import Navbar from './navbar'
import AppMain from './appmain'
import TagsView from '../tagsview'
import variables from '@/styles/variables.module.scss'

</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration} linear;
}

.hide-sidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}

.hide-sidebar .sidebar-container {
  width: #{$hideSideBarWidth}!important;
}
</style>
