// 不需要显示在tags里的路由
const whiteList = ['/login', '/import', '/404', '/401']

/**
 * path 是否需要被缓存
 * @param {*} path
 * @returns
 */
export function isTags(path) {
    return !whiteList.includes(path)
}
