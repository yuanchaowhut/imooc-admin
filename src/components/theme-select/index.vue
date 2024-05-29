<template>
  <!-- 主题图标
  v-bind：https://v3.cn.vuejs.org/api/instance-properties.html#attrs -->
  <el-dropdown
    v-bind="$attrs"
    trigger="click"
    class="theme"
    @command="handleSetTheme"
  >
    <div>
      <el-tooltip :content="$t('msg.navBar.themeChange')">
        <svg-icon id="guide-theme" icon="change-theme" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t('msg.theme.themeColorChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 展示弹出层 -->
  <div>
    <!--
    1.v-model双向绑定一个自定义组件的用法：https://cn.vuejs.org/guide/components/events.html#usage-with-v-model
    2.通常情况下这个自定义组件是一个模态框，v-model 绑定的变量用于控制显示隐藏;
    3.如果用 <custom :prop="prop" @event="handleEvent" /> 也可以实现目标，但显然不如 v-model 来的简洁。
    -->
    <color-picker v-model="colorPickerVisible"></color-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ColorPicker from '@/components/color-picker'
// 拾取颜色弹框是否可见
const colorPickerVisible = ref(false)
// 设置主题
const handleSetTheme = command => {
  colorPickerVisible.value = true
}
</script>

<style lang="scss" scoped></style>
