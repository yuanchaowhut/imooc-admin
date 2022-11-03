import axios from 'axios'

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
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error?.response)
    }
)

export default service
