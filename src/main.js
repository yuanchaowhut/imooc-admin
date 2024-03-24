import { createApp } from 'vue'
// 导入i18n实例（PS:导入放到 APP.vue 导入之前，因为后面我们会在 app.vue 中使用国际化内容)
import i18n from '@/i18n'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局样式
import installElementPlus from './plugins/element'
// 导入 svgIcon
import installIcons from '@/assets/icons'
import './styles/index.scss'
// 导入路由鉴权文件
import './permission'

const app = createApp(App)
installElementPlus(app) // 全局注册Element UI组件
installIcons(app) // 全局注册SvgIcon组件

app.use(store)
app.use(router)
app.use(i18n)
app.mount('#app')
