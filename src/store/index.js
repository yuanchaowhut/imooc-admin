import { createStore } from 'vuex'
import user from './modules/user.js'

export default createStore({
    modules: {
        user
    }
})

// 关于 namespaced: true 的作用的理解：https://vuex.vuejs.org/zh/guide/modules.html#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4
// const store = createStore({
//   modules: {
//     account: {
//       namespaced: true,
//
//       // 模块内容（module assets）
//       state: () => ({ ... }), // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
//       getters: {
//         isAdmin () { ... } // -> getters['account/isAdmin']
//       },
//       actions: {
//         login () { ... } // -> dispatch('account/login')
//       },
//       mutations: {
//         login () { ... } // -> commit('account/login')
//       },
//
//       // 嵌套模块
//       modules: {
//         // 这里没有设置 namespaced:true，故继承父模块的命名空间
//         myPage: {
//           state: () => ({ ... }),
//           getters: {
//             profile () { ... } // -> getters['account/profile']
//           }
//         },
//
//         // 进一步嵌套命名空间
//         posts: {
//           namespaced: true, 这里设置了 namespaced:true，有单独的命名空间
//
//           state: () => ({ ... }),
//           getters: {
//             popular () { ... } // -> getters['account/posts/popular']
//           }
//         }
//       }
//     }
//   }
// })
