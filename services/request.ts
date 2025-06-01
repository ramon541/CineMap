import axios, { AxiosResponse } from 'axios';

const { CancelToken } = axios;

export const request = async <T>({
    api,
    method,
    endpoint,
    data,
    timeout = 10000, // 10 seconds
    config = {},
}: IApiRequest): Promise<T> => {
    return new Promise(async (resolve, reject) => {
        const source = CancelToken.source();
        config = { ...config, cancelToken: source.token };

        const reqExpire = new Promise((_, reject) => {
            setTimeout(() => {
                source.cancel('Request timed out');
                reject(new Error(`Request timed out: ${endpoint}`));
            }, timeout);
        });

        try {
            const httpMethods: IHttpMethods = {
                get: async () => await api.get<T>(endpoint, config),
                post: async () => await api.post<T>(endpoint, data, config),
                put: async () => await api.put<T>(endpoint, data, config),
                delete: async () => await api.delete<T>(endpoint, config),
                patch: async () => await api.patch<T>(endpoint, data, config),
            };

            const response = (await Promise.race([
                httpMethods[method](),
                reqExpire,
            ])) as AxiosResponse<T>;

            if (axios.isAxiosError(response)) reject(response);

            resolve(response?.data);
        } catch (error) {
            reject(error);
        }
    });
};
