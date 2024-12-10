import { createRouter, createWebHistory } from 'vue-router';

// 定义路由
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/mainPage.vue'), // 懒加载组件
    },
    {
        path: '/menu',
        name: 'menu',
        component: () => import('../views/FootMenu.vue'), // 懒加载组件
    },
    {
        path: '/rank',
        name: 'rank',
        component: () => import('../views/RankingListView/index.vue'), // 懒加载组件
    },
    {
        path: '/community',
        name: 'community',
        component: () => import('../views/CommunityView/index.vue'), // 懒加载组件
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/TestView/index.vue'), // 懒加载组件
    }
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;