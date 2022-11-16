<template>
  <!-- 支持渲染多级 menu 菜单 -->
  <el-submenu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
    </template>
    <!--递归渲染children(由于你并不知道children里边到底是叶子还是树枝，故要递归自身)-->
    <sub-menu v-for="item in route.children" :key="item.path" :route="item"></sub-menu>
  </el-submenu>
  <!-- 渲染 item 项 -->
  <el-menu-item v-else :index="route.path">
    <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
import MenuItem from './menu-item.vue'

// 定义props
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
