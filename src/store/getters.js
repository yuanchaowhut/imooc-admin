import variables from '@/styles/variables.module.scss'

// getters 其实就相当于vuex里的计算属性
const getters = {
    token: (state) => state.user.token,

    userInfo: (state) => state.user.userInfo,

    hasUserInfo: (state) => JSON.stringify(state.user.userInfo) !== '{}',

    cssVar: (state) => variables,

    sidebarOpened: (state) => state.app.sidebarOpened,

    language: (state) => state.app.language
}

export default getters
