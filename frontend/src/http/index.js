import axios from 'axios';

export const API_URL = 'http://194.67.108.17/api/v1/'

const api = axios.create({
    withCredentionals: true,
    baseURL: API_URL,
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer: ${localStorage.getItem('access')}`;
    return config;
});

export default api;

