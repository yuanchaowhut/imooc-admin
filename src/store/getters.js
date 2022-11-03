// getters 其实就相当于vuex里的计算属性
const getters = {
    token: (state) => state.user.token
}

export default getters
