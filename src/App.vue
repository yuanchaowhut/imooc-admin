<template>
  <router-view/>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'

const store = useStore()

onBeforeMount(async () => {
  const newStyleText = await generateNewStyle(store.getters.mainColor)
  writeNewStyle(newStyleText)
})
</script>

<style></style>
