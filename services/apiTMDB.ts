import axios, { AxiosError } from 'axios';

// = ============================================================
const apiTMDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

// = ============================================================
apiTMDB.interceptors.request.use(async (request) => {
    console.log('REQUEST: ', request);

    request.headers.Authorization = `Bearer ${process.env.EXPO_PUBLIC_TMDB_KEY}`;
    if (request.url) {
        request.url +=
            (request.url.includes('?') ? '&' : '?') + 'language=pt-BR';
    }

    return request;
});

// = ============================================================
apiTMDB.interceptors.response.use(
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

export default apiTMDB;
