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

interface GenreTMDB {
    id: number;
    name: string;
}

interface IProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

interface IProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface ISpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

interface MovieDetailsTMDB {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null;
    budget: number;
    genres: Array<GenreTMDB>;
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: Array<string>;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<IProductionCompany>;
    production_countries: Array<IProductionCountry>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<ISpokenLanguage>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

//= =================================================================================

interface IGenreResponse {
    genres: Array<GenreTMDB>;
}

interface IGetTopRatedMoviesResponse extends IGetMoviesResponse<MovieTMDB> {}

interface IGetPopularMoviesResponse extends IGetMoviesResponse<MovieTMDB> {}

interface ISearchMoviesRequest {
    query: string;
}
interface ISearchMoviesResponse extends IGetMoviesResponse<MovieTMDB> {}

interface IGetTrendingMoviesResponse extends IGetMoviesResponse<MovieTMDB> {}

interface IGetPopularMoviesByGenreRequest {
    genreId: number;
}
interface IGetPopularMoviesByGenreResponse
    extends IGetMoviesResponse<MovieTMDB> {}

interface IGetMovieByIdRequest {
    id: number;
}

interface IGetMovieByIdResponse extends MovieDetailsTMDB {}

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
