import router from '@/router'
import store from '@/store'

// 白名单
const whiteList = ['/login']

/**
 * 路由前置守卫
 */
router.beforeEach(async (to, form, next) => {
    // 存在 token ，进入主页
    // if (store.state.user.token) {
    // 快捷访问
    if (store.getters.token) {
        // 有token的情况下自动登录
        if (to.path === '/login') {
            next('/')
        } else {
            // 判断是否存在用户信息，若不存在用户信息，则需要获取用户信息
            if (!store.getters.hasUserInfo) {
                await store.dispatch('user/getUserInfo')
            }
            next()
        }
    } else {
        // 没有token的情况如果在白名单里，直接通过，不在里边则跳转到login页面
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }
})
