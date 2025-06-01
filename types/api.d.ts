interface IApiRequest {
    api: AxiosInstance;
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    endpoint: string;
    data?: any;
    timeout?: number;
    config?: AxiosRequestConfig;
}

interface IGetTopRatedMoviesResponse {
    page: number;
    results: Array<IGetFilmResult>;
    total_pages: number;
    total_results: number;
}

interface IGetFilmResult {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
