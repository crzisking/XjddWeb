import { createRouter, createWebHistory } from 'vue-router';

// 定义路由
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../App.vue'), // 懒加载组件
    },
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;