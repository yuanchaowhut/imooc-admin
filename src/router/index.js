import { createRouter, createWebHashHistory } from 'vue-router'

// 公开路由表
const publicRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index')
    },
    {
        path: '/',
        component: () => import('@/components/layout/index'),
        redirect: '/profile',
        children: [
            {
                path: '/profile',
                name: 'profile',
                component: () => import('@/views/profile/index'),
                meta: {
                    title: 'profile',
                    icon: 'el-icon-user'
                }
            },
            {
                path: '/404',
                name: '404',
                component: () => import('@/views/error-page/404')
            },
            {
                path: '/401',
                name: '401',
                component: () => import('@/views/error-page/401')
            }
        ]
    }
]

// 私有路由表
const privateRoutes = [
    {
        path: '/user',
        component: () => import('@/components/layout/index'),
        redirect: '/user/manage',
        meta: {
            title: 'user',
            icon: 'personnel'
        },
        children: [
            {
                path: '/user/manage',
                component: () => import('@/views/user-manage/index'),
                meta: {
                    title: 'userManage',
                    icon: 'personnel-manage'
                }
            },
            {
                path: '/user/role',
                component: () => import('@/views/role-list/index'),
                meta: {
                    title: 'roleList',
                    icon: 'role'
                }
            },
            {
                path: '/user/permission',
                component: () => import('@/views/permission-list/index'),
                meta: {
                    title: 'permissionList',
                    icon: 'permission'
                }
            },
            {
                path: '/user/info/:id',
                name: 'userInfo',
                component: () => import('@/views/user-info/index'),
                meta: {
                    title: 'userInfo'
                }
            },
            {
                path: '/user/import',
                name: 'import',
                component: () => import('@/views/import/index'),
                meta: {
                    title: 'excelImport'
                }
            }
        ]
    },
    {
        path: '/article',
        component: () => import('@/components/layout/index'),
        redirect: '/article/ranking',
        meta: {
            title: 'article',
            icon: 'article'
        },
        children: [
            {
                path: '/article/ranking',
                component: () => import('@/views/article-ranking/index'),
                meta: {
                    title: 'articleRanking',
                    icon: 'article-ranking'
                }
            },
            {
                path: '/article/:id',
                component: () => import('@/views/article-detail/index'),
                meta: {
                    title: 'articleDetail'
                }
            },
            {
                path: '/article/create',
                component: () => import('@/views/article-create/index'),
                meta: {
                    title: 'articleCreate',
                    icon: 'article-create'
                }
            },
            {
                path: '/article/editor/:id',
                component: () => import('@/views/article-create/index'),
                meta: {
                    title: 'articleEditor'
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...publicRoutes, ...privateRoutes]
})

export default router
