import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { set, get } from '@/utils/storage'

/**
 * 获取时间戳
 * @returns {*}
 */
export const getTimeStamp = () => {
    return get(TIME_STAMP)
}

/**
 * 设置时间戳
 */
export const setTimeStamp = () => {
    set(TIME_STAMP, Date.now())
}

/**
 * token是否超时失效
 * @returns {boolean}
 */
export const isTokenTimeout = () => {
    const current = Date.now()
    const cache = get(TIME_STAMP)
    return current - cache > TOKEN_TIMEOUT_VALUE
}
