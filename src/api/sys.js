import request from '@/utils/request'

/**
 * 登录
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 */
export const login = (data) => {
    return request({
        url: 'sys/login',
        method: 'POST',
        data
    })
}
