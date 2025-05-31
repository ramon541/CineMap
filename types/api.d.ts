interface IApiRequest {
    api: AxiosInstance;
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    endpoint: string;
    data?: any;
    timeout?: number;
    config?: AxiosRequestConfig;
}
