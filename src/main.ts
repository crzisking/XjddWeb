import { createApp } from 'vue'
import './style.css'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from  './router'
import {createPinia} from "pinia"; // 引入


const pinia = createPinia();// 路由
createApp(App)
    .use(Antd)
    .use(router) // 使用路由
    .use(pinia) // 使用pinia
    .mount('#app')
