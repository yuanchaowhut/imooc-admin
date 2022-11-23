import { LANG } from '@/constant'
import { set, get } from '@/utils/storage'

export default {
    namespaced: true,
    state: () => ({
        sidebarOpened: true,
        language: get(LANG) || 'zh'
    }),
    mutations: {
        triggerSidebarOpened(state) {
            state.sidebarOpened = !state.sidebarOpened
        },
        setLanguage(state, lang) {
            set(LANG, lang)
            state.language = lang
        }
    }
}
