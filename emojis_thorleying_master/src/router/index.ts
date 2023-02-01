import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// @ts-ignore
const router=createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/emo',
        },
        {
            path: '/emo',
            name: 'emo',
            meta: {
                title: '表情包'
            },
            component: () => import(/* webpackChunkName: "about" */ '../pages/emoil_home/index.vue')
        },
        {
            path: '/avatar',
            name: 'avatar',
            meta: {
                title: '头像'
            },
            component: () => import(/* webpackChunkName: "about" */ '../pages/avatar_home/index.vue')
        },
        {
            path: '/background',
            name: 'background',
            meta: {
                title: '壁纸'
            },
            component: () => import(/* webpackChunkName: "about" */ '../pages/background_home/index.vue')
        },
    ]
});
router.afterEach((to,from)=>{
    // @ts-ignore
    document.title = to.meta.title;
})
export default router
