interface IApiRequest {
    api: AxiosInstance;
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    endpoint: string;
    data?: any;
    timeout?: number;
    config?: AxiosRequestConfig;
}

//= =================================================================================

// ------------ API TMDB ------------
interface IGetMoviesResponse<T> {
    page: number;
    results: Array<T>;
    total_pages: number;
    total_results: number;
}

interface MovieTMDB {
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

interface IGetTopRatedMoviesResponse extends IGetMoviesResponse<MovieTMDB> {}

interface IGetPopularMoviesResponse extends IGetMoviesResponse<MovieTMDB> {}

//= =================================================================================

// ------------ Own API ------------
interface ApiResponse<T> {
    sucess: boolean;
    message: string;
    data: T;
}

interface ILoginUserRequest extends Pick<IUser, 'email' | 'password'> {}
interface ILoginUserResponse
    extends ApiResponse<{
        user: Omit<IUser, 'password' | 'createdAt' | 'updatedAt'>;
        accessToken: IToken;
    }> {}
