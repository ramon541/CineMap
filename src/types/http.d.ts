interface IHttp<D> {
    get<T>(url: string, config?: D): Promise<T>;
    post<T, D = any>(url: string, data?: D, config?: D): Promise<T>;
    put<T, D = any>(url: string, data?: D, config?: D): Promise<T>;
    delete<T>(url: string, config?: D): Promise<T>;
    patch<T, D = any>(url: string, data?: D, config?: D): Promise<T>;
}

interface IHttpMethods {
    get: Function;
    post: Function;
    put: Function;
    delete: Function;
    patch: Function;
}
