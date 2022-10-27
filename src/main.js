import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局样式
import installElementPlus from './plugins/element'
// 导入 svgIcon
import installIcons from '@/assets/icons'
import './styles/index.scss'

const app = createApp(App)
installElementPlus(app) // 全局注册Element UI组件
installIcons(app) // 全局注册SvgIcon组件

app.use(store).use(router).mount('#app')
