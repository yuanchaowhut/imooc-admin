<template>
  <!-- 一级 menu 菜单 -->
  <!--
  1.router：是否启用 vue-router 模式。启用该模式会在激活导航时以 index 作为 path 进行路由跳转。
  2.default-active：页面加载时默认激活菜单的index
  -->
  <el-menu
    :collapse="!$store.getters.sidebarOpened"
    :uniqueOpened="true"
    :default-active="activeMenu"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    router
  >
    <sub-menu v-for="item in routes" :key="item.path" :route="item"></sub-menu>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SubMenu from './sub-menu.vue'

const router = useRouter()
const routes = computed(() => {
  // 所有的一级导航路由
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})

// 默认激活，计算高亮menu的方法
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})

</script>

<style lang="scss" scoped></style>
