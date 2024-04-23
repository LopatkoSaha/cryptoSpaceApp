import axios from 'axios';

import store from '../Components/store/store';

// Создание экземпляра Axios с использованием middleware
const axiosInst = axios.create();

// Добавление middleware для запросов
axiosInst.interceptors.request.use( function (config) {
    
    if( config.url ==='http://localhost:4500/portfolioUser' || config.url ==='http://localhost:4500/buyCurrency'){
        const token = store.getState().user.token;
        config.headers.token = token;
    }
    return config;
}, function (error) {
    console.error('Error in request:', error);
    return Promise.reject(error);
});

// Добавление middleware для ответов
axiosInst.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // Обработка ошибок
    console.error('Error in response:', error);
    return Promise.reject(error);
});

export default axiosInst;
