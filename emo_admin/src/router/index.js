import { createRouter, createWebHashHistory } from 'vue-router'
const router=createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            redirect: '/admin',
        },
        {
            path: '/admin',
            name: 'admin',
            meta:{
                title:'管理员首页'
            },
            children:[
                {
                    path: '/admin',
                    redirect: '/admin/workbench',
                },
                {
                    path: '/admin/resource_management',
                    name: 'resource_management',
                    meta:{
                        title:'资源管理'
                    },
                    component: () => import(/* webpackChunkName: "about" */ '../pages/resource_management/index.vue'),
                    children:[
                        {
                            path: '/admin/resource_management/emo',
                            name: 'emo',
                            meta:{
                                title:'资源管理——表情包'
                            },
                            component: () => import( '../pages/resource_management/page/emo_page.vue'),
                        },
                        {
                            path: '/admin/resource_management/avatar',
                            name: 'avatar',
                            meta:{
                                title:'资源管理——头像'
                            },
                            component: () => import(/* webpackChunkName: "about" */ '../pages/resource_management/page/avatar_page.vue'),
                        },
                        {
                            path: '/admin/resource_management/background',
                            name: 'background',
                            meta:{
                                title:'资源管理——壁纸'
                            },
                            component: () => import(/* webpackChunkName: "about" */ '../pages/resource_management/page/background_page.vue'),
                        }
                    ]
                },
                {
                    path: '/admin/workbench',
                    name: 'workbench',
                    meta:{
                        title:'工作台'
                    },
                    component: () => import(/* webpackChunkName: "about" */ '../pages/workbench/index.vue')
                },
                {
                    path: '/admin/resource_upload',
                    name: 'upload',
                    meta:{
                        title:'资源上传'
                    },
                    component: () => import(/* webpackChunkName: "about" */ '../pages/upload/index.vue')
                },
                {
                    path: '/admin/tags_admin',
                    name: 'tagsAdmin',
                    meta:{
                        title:'标签管理'
                    },
                    component: () => import(/* webpackChunkName: "about" */ '../pages/tagsAdmin/tags_admin.vue')
                }
            ],
            component: () => import(/* webpackChunkName: "about" */ '../layout/index.vue')
        },
    ]

})
router.afterEach((to,from)=>{
    document.title = to.meta.title;
})
export default router
