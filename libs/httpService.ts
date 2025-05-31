import { AxiosInstance, AxiosRequestConfig } from 'axios';

export const http = (instance: AxiosInstance): IHttp<AxiosRequestConfig> => {
    return {
        get: async <T>(
            url: string,
            config?: AxiosRequestConfig
        ): Promise<T> => {
            return instance
                .get<T>(url, config)
                .then((response) => response.data);
        },
        post: async <T, D = any>(
            url: string,
            data?: D,
            config?: AxiosRequestConfig
        ): Promise<T> => {
            return instance
                .post<T>(url, data, config)
                .then((response) => response.data);
        },
        put: async <T, D = any>(
            url: string,
            data?: D,
            config?: AxiosRequestConfig
        ): Promise<T> => {
            return instance
                .put<T>(url, data, config)
                .then((response) => response.data);
        },
        delete: async <T>(
            url: string,
            config?: AxiosRequestConfig
        ): Promise<T> => {
            return instance
                .delete<T>(url, config)
                .then((response) => response.data);
        },
        patch: async <T, D = any>(
            url: string,
            data?: D,
            config?: AxiosRequestConfig
        ): Promise<T> => {
            return instance
                .patch<T>(url, data, config)
                .then((response) => response.data);
        },
    };
};
