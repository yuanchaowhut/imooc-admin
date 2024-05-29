import { LANG, TAGS_VIEW } from '@/constant'
import { setItem, getItem } from '@/utils/storage'

export default {
    namespaced: true,
    state: () => ({
        sidebarOpened: true,
        language: getItem(LANG) || 'zh',
        tagsViewList: getItem(TAGS_VIEW) || []
    }),
    mutations: {
        triggerSidebarOpened(state) {
            state.sidebarOpened = !state.sidebarOpened
        },
        setLanguage(state, lang) {
            setItem(LANG, lang)
            state.language = lang
        },
        addTagsViewList(state, tag) {
            const isFind = state.tagsViewList.find((item) => item.path === tag.path)
            if (!isFind) {
                state.tagsViewList.push(tag)
                setItem(TAGS_VIEW, state.tagsViewList)
            }
        },
        /**
         * @func
         * @desc 为指定的 tag 修改 title（tag 修改了title之后的tag对象）
         */
        changeTagsView(state, { index, tag }) {
            state.tagsViewList[index] = tag
            setItem(TAGS_VIEW, state.tagsViewList)
        },

        /**
         * 删除 tag
         * @param {type: 'other'||'right'||'index', index: index} payload
         */
        removeTagsView(state, payload) {
            if (payload.type === 'index') {
                // 关闭自己
                state.tagsViewList = state.tagsViewList.filter((item, index) => index !== payload.index)
                return
            } else if (payload.type === 'other') {
                // 关闭其它
                state.tagsViewList = state.tagsViewList.filter((item, index) => index === payload.index)
            } else if (payload.type === 'right') {
                // 关闭右侧
                state.tagsViewList = state.tagsViewList.filter((item, index) => index <= payload.index)
            }
            setItem(TAGS_VIEW, state.tagsViewList)
        }
    }
}
