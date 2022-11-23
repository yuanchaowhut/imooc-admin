import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh'
import enLocale from './lang/en'
import store from '@/store'

// 定义数据源
const messages = {
    en: {
        msg: {
            ...enLocale
        }
    },
    zh: {
        msg: {
            ...zhLocale
        }
    }
}

// locale 不能写死，要从vuex中读取，vuex有定义初始值
const getLanguage = () => {
    return store && store.getters && store.getters.language
}

// 创建 locale 变量
const locale = getLanguage()

// 创建 i18n 实例
const i18n = createI18n({
    // 使用 Composition API 模式，则需要将其设置为false
    legacy: false,
    // 全局注入 $t 函数
    globalInjection: true,
    locale,
    messages
})

export default i18n
