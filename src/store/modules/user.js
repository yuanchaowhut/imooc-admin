import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { set, get, clear } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'

export default {
    namespaced: true, // 带命名空间，避免相同命名的 action、mutation、getter 等造成干扰
    state: () => ({
        token: get(TOKEN) || '',
        userInfo: {}
    }),
    mutations: {
        setToken(state, token) {
            // 存vuex
            state.token = token
            // 存localStorage
            set(TOKEN, token)
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
        }
    },
    actions: {
        /**
         * 用户登录
         * @param context
         * @param userInfo
         * @returns {Promise<unknown>}
         */
        login(context, userInfo) {
            const { username, password } = userInfo
            return new Promise((resolve, reject) => {
                login({
                    username,
                    password: md5(password)
                })
                    .then((data) => {
                        // 保存 token
                        this.commit('user/setToken', data.token)
                        // 缓存时间戳作为token的有效期起始点
                        setTimeStamp()
                        // 跳转到系统首页
                        router.push('/')
                        resolve()
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        /**
         * 获取用户信息
         * @param context
         * @returns {Promise<AxiosResponse<any>>}
         */
        async getUserInfo(context) {
            const res = await getUserInfo()
            this.commit('user/setUserInfo', res)
            return res
        },

        /**
         * 退出登录
         * @param context
         */
        logout(context) {
            // 清除vuex缓存数据、清除浏览器缓存数据、跳转到登录页面
            this.commit('user/setToken', '')
            this.commit('user/setUserInfo', {})
            clear()
            router.push('/login')
        }
    }
}
