<template>
  <!--elment ui 内置的icon-->
  <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
  <!--非elment ui 内置的icon，比如本地svg图片或外链svg-->
  <svg-icon :icon="icon"></svg-icon>
  <!--标题-->
  <span>{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue'

// 定义props
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
