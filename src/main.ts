import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from  './router'
import {createPinia} from "pinia"; // 引入


const pinia = createPinia();// 路由
createApp(App)
    .use(ElementPlus)
    .use(router) // 使用路由
    .use(pinia) // 使用pinia
    .mount('#app')
