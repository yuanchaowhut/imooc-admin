import { login } from '@/api/sys'
import md5 from 'md5'
import { set, get } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'

export default {
    namespaced: true, // 带命名空间，避免相同命名的 action、mutation、getter 等造成干扰
    state: () => ({
        token: get(TOKEN) || ''
    }),
    mutations: {
        setToken(state, token) {
            // 存vuex
            state.token = token
            // 存localStorage
            set(TOKEN, token)
        }
    },
    actions: {
        login(context, userInfo) {
            const { username, password } = userInfo
            return new Promise((resolve, reject) => {
                login({
                    username,
                    password: md5(password)
                })
                    .then((data) => {
                        this.commit('user/setToken', data.token)
                        router.push('/') // 跳转到系统内部
                        resolve()
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        }
    }
}
