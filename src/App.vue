<template>
  <router-view/>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'
import { watchSwitchLang } from '@/utils/i18n'

const store = useStore()

onBeforeMount(async () => {
  const newStyleText = await generateNewStyle(store.getters.mainColor)
  writeNewStyle(newStyleText)
})

/**
 * 监听 语言变化，重新获取个人信息
 */
watchSwitchLang(() => {
  if (store.getters.token) {
    store.dispatch('user/getUserInfo')
  }
})
</script>

<style></style>
