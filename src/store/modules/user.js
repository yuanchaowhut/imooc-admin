import { login } from '@/api/sys'
import md5 from 'md5'

export default {
    namespaced: true, // 带命名空间，避免相同命名的 action、mutation、getter 等造成干扰
    state: () => ({}),
    mutations: {},
    actions: {
        login(context, userInfo) {
            const { username, password } = userInfo
            return new Promise((resolve, reject) => {
                login({
                    username,
                    password: md5(password)
                })
                    .then((data) => {
                        resolve()
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        }
    }
}
