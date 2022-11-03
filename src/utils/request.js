import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        if (config.headers.post) {
            const ContentType = config.headers.post['Content-Type']
            if (ContentType && ContentType.indexOf('charset=') === -1) {
                config.headers.post['Content-Type'] = `${config.headers.post['Content-Type']}; charset=UTF-8`
            }
        }

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
            ElMessage.error(res.message)
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
