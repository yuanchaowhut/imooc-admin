import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'
import { set, get } from '@/utils/storage'

export default {
    namespaced: true,
    state: () => ({
        mainColor: get(MAIN_COLOR) || DEFAULT_COLOR
    }),
    mutations: {
        setMainColor(state, newColor) {
            state.mainColor = newColor
            set(MAIN_COLOR, newColor)
        }
    }
}
