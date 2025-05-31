interface IHttp<K> {
    get<T>(url: string, config?: K): Promise<T>;
    post<T, D = any>(url: string, data?: D, config?: K): Promise<T>;
    put<T, D = any>(url: string, data?: D, config?: K): Promise<T>;
    delete<T>(url: string, config?: K): Promise<T>;
    patch<T, D = any>(url: string, data?: D, config?: K): Promise<T>;
}

interface IHttpMethods {
    get: Function;
    post: Function;
    put: Function;
    delete: Function;
    patch: Function;
}
