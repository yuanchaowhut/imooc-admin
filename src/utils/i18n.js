import { watch } from 'vue'
import store from '@/store'
import i18n from '@/i18n'

export function generateTitle(title) {
    return i18n.global.t('msg.route.' + title)
}

export function watchSwitchLang(...callbacks) {
    watch(
        () => store.getters.language,
        (val) => {
            callbacks.forEach((callback) => callback(val))
        }
    )
}
