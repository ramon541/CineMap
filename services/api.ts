import axios, { AxiosError } from 'axios';
import { useGlobalStore } from '../store/useSharedGlobalState';

// = ============================================================
const api = axios.create({
    baseURL: 'http://192.168.100.13:3000',
});

// = ============================================================
api.interceptors.request.use(async (request) => {
    console.log('REQUEST: ', request);

    if (!request.url?.includes('auth')) {
        const token = useGlobalStore.getState().token;

        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
});

// = ============================================================
api.interceptors.response.use(
    async (response) => {
        console.log('RESPONSE: ', response);

        return response;
    },
    (error: AxiosError) => {
        axios.CancelToken.source().cancel('Request canceled by interceptor.');

        console.log('RESPONSE ERROR: ', error);
        return Promise.reject(error.response?.data);
    }
);

export default api;
