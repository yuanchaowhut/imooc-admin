import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'
import { isTokenTimeout } from '@/utils/auth'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // 在这个位置需要统一的去注入token
        if (store.getters.token) {
            // 如果token失效则退出到登录页面
            if (isTokenTimeout()) {
                store.dispatch('user/logout')
                return Promise.reject(new Error('token失效'))
            }
            config.headers.Authorization = `Bearer ${store.getters.token}`
        }
        // 配置接口国际化
        config.headers['Accept-Language'] = store.getters.language

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    // 网络请求成功
    (response) => {
        let res = response
        while (res.data && res.success === undefined) {
            res = res.data
        }
        if (res.success) {
            // 业务成功
            return res.data
        } else {
            // 业务失败
            let message = res.message
            if (res.code === 401) {
                // token 失效
                message = 'token 失效，请重新登录'
                store.dispatch('user/logout')
            } else if (res.code === 402) {
                // 单点登录被挤下
                message = '有其它设备登录，您被迫下线'
                store.dispatch('user/logout')
            }
            ElMessage.error(message)
            // reject一个error出去，以便外部Promise可以catch得到
            return Promise.reject(new Error(res.message))
        }
    },
    // 网络请求失败
    (error) => {
        ElMessage.error(error.message)
        return Promise.reject(error)
    }
)

export default service
