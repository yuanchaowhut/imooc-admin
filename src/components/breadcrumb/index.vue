<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in breadCrumbData" :key="item.path">
        <!-- 可点击项 -->
        <a v-if="index < breadCrumbData.length-1" class="redirect" @click.prevent="onLinkClick(item)">{{
            generateTitle(item.meta.title)
          }}</a>
        <!-- 不可点击项 -->
        <span v-else class="no-redirect">{{ generateTitle(item.meta.title) }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { generateTitle } from '@/utils/i18n'

// 生成面包屑数据
const route = useRoute()
const breadCrumbData = ref([])
const getBreadCrumbData = () => {
  breadCrumbData.value = route.matched.filter(item => item.meta && item.meta.title)
}
// 监听路由变化时触发
watch(route, () => {
  getBreadCrumbData()
}, { immediate: true })

// 处理点击事件
const router = useRouter()
const onLinkClick = (item) => {
  router.push(item.path)
}

// 将来需要进行主题替换，所以这里获取下动态样式
const store = useStore()
const linkHoverColor = ref(store.getters.cssVar.menuBg)
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .redirect {
    color: #666;
    font-weight: 600;
  }

  .redirect:hover {
    // 将来需要进行主题替换，所以这里不去写死样式
    color: v-bind(linkHoverColor);
  }

  :deep(.no-redirect) {
    color: #97a8be;
    cursor: text;
  }
}
</style>
