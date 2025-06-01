import axios, { AxiosError } from 'axios';

// = ============================================================
const apiImageTMDB = axios.create({
    baseURL: 'https://image.tmdb.org/t/p/w500',
});

// = ============================================================
apiImageTMDB.interceptors.request.use(async (request) => {
    console.log('REQUEST: ', request);

    return request;
});

// = ============================================================
apiImageTMDB.interceptors.response.use(
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

export default apiImageTMDB;
