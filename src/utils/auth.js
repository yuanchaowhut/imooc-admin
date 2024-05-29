import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { setItem, getItem } from '@/utils/storage'

/**
 * 获取时间戳
 * @returns {*}
 */
export const getTimeStamp = () => {
    return getItem(TIME_STAMP)
}

/**
 * 设置时间戳
 */
export const setTimeStamp = () => {
    setItem(TIME_STAMP, Date.now())
}

/**
 * token是否超时失效
 * @returns {boolean}
 */
export const isTokenTimeout = () => {
    const current = Date.now()
    const cache = getItem(TIME_STAMP)
    return current - cache > TOKEN_TIMEOUT_VALUE
}
