// 保存数据的key的前缀
const prefix = '__data__'

/**
 * 存储键值对
 * @param key
 * @param value 外部调用时不需要JSON.stringify，方法内部会自行处理
 * @param time 可选参数，可以指定过期时间，例如：10d表示10天，100h表示100小时等，方法内部会转化为时间戳
 */
export const setItem = (key, value, time) => {
    if (!localStorage) return false
    let t = null
    if (time && time.length >= 2) {
        try {
            t = new Date()
            const n = parseInt(time.substring(0, time.length - 1), 10)
            const f = time.substring(time.length - 1, time.length)

            switch (f) {
                case 's':
                    t.setSeconds(t.getSeconds() + n)
                    break
                case 'm':
                    t.setMinutes(t.getMinutes() + n)
                    break
                case 'h':
                    t.setHours(t.getHours() + n)
                    break
                case 'd':
                    t.setDate(t.getDate() + n)
                    break
                case 'w':
                    t.setDate(t.getDate() + n * 7)
                    break
                case 'M':
                    t.setMonth(t.getMonth() + n)
                    break
                case 'y':
                    t.setFullYear(t.getFullYear() + n)
                    break
            }
            t = t.getTime()
        } catch (e) {
            t = null
        }
    }
    try {
        localStorage.setItem(prefix + key, JSON.stringify({ data: value, time: t }))
    } catch (ex) {
        this.clear(true)
        localStorage.setItem(prefix + key, JSON.stringify({ data: value, time: t }))
    }
    return true
}

/**
 * 根据键获取值，如果值是一个对象会自动解析好返回。如果存储时设置了过期时间，则已过期的数据会自行删除，且返回null。
 * @param key
 */
export const getItem = (key) => {
    if (!localStorage) return null
    const value = localStorage.getItem(prefix + key)
    if (value) {
        const j = JSON.parse(value)
        if (j.time && j.time < new Date()) {
            localStorage.removeItem(prefix + key)
            return null
        }
        return j.data
    }
}

/**
 * 根据键删除对应的值
 * @param key
 */
export const removeItem = (key) => {
    if (localStorage) {
        localStorage.removeItem(prefix + key)
    }
}

/**
 * 清理localStorage存储，注意它指清空指定前缀的数据
 * @param justOverdue 可选参数，为true时，只数据清理过期数据，其它的仍然会保留
 */
export const clear = (justOverdue) => {
    if (!localStorage) return null
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf(prefix) !== -1) {
            if (justOverdue) {
                const value = localStorage.getItem(localStorage.key(i))
                if (value) {
                    const j = JSON.parse(value)
                    if (j.time && j.time < new Date()) {
                        localStorage.removeItem(localStorage.key(i))
                    }
                }
            } else {
                localStorage.removeItem(localStorage.key(i))
            }
        }
    }
}
