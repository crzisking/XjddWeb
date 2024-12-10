import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:5005',
    timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
    config => {
        // 可以在这里添加 Token 或其他全局配置
        config.headers['Authorization'] = 'Bearer your-token';
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
request.interceptors.response.use(
    response => {
        return response.data; // 只返回数据部分
    },
    error => {
        console.error('API error:', error);
        return Promise.reject(error);
    }
);

export default request;