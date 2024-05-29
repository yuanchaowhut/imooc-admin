import { generateColors } from '@/utils/theme'
import { getItem } from '@/utils/storage'
import { MAIN_COLOR } from '@/constant'

// getters 其实就相当于vuex里的计算属性
const getters = {
    token: (state) => state.user.token,

    userInfo: (state) => state.user.userInfo,

    hasUserInfo: (state) => JSON.stringify(state.user.userInfo) !== '{}',

    cssVar: (state) => {
        return {
            ...state.theme.variables,
            ...generateColors(getItem(MAIN_COLOR))
        }
    },

    sidebarOpened: (state) => state.app.sidebarOpened,

    language: (state) => state.app.language,

    mainColor: (state) => state.theme.mainColor,

    tagsViewList: (state) => state.app.tagsViewList
}

export default getters
