import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'
import { setItem, getItem } from '@/utils/storage'

export default {
    namespaced: true,
    state: () => ({
        mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR
    }),
    mutations: {
        setMainColor(state, newColor) {
            state.mainColor = newColor
            setItem(MAIN_COLOR, newColor)
        }
    }
}
