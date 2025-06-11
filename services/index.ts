import { request } from './request';

import api from './api';
import apiTMDB from './apiTMDB';
import { IRegisterZod } from '../components/Forms/RegisterUserForm/registerSchema';
import { IReviewZod } from '../components/Forms/ReviewForm/reviewSchema';

//= =================================================================================
export const getTopRatedMovies = async () =>
    await request<IGetTopRatedMoviesResponse>({
        api: apiTMDB,
        method: 'get',
        endpoint: '/movie/top_rated?page=1',
    });

//= =================================================================================
export const getPopularMovies = async () =>
    await request<IGetPopularMoviesResponse>({
        api: apiTMDB,
        method: 'get',
        endpoint: '/movie/popular?page=1',
    });

//= =================================================================================
export const searchMovies = async ({ query }: ISearchMoviesRequest) =>
    await request<ISearchMoviesResponse>({
        api: apiTMDB,
        method: 'get',
        endpoint: `/search/movie?query=${query}&page=1`,
    });

//= =================================================================================
export const registerUser = async (data: IRegisterZod) =>
    await request({
        api,
        method: 'post',
        endpoint: '/api/auth/register',
        data,
    });

//= =================================================================================
export const loginUser = async (data: ILoginUserRequest) =>
    await request<ILoginUserResponse>({
        api,
        method: 'post',
        endpoint: '/api/auth/login',
        data,
    });

//= =================================================================================
export const getTrendingMovies = async () =>
    await request<IGetTrendingMoviesResponse>({
        api: apiTMDB,
        method: 'get',
        endpoint: '/trending/movie/day',
    });

//= =================================================================================
export const getGenres = async () =>
    await request<IGenreResponse>({
        api: apiTMDB,
        method: 'get',
        endpoint: '/genre/movie/list',
    });

//= =================================================================================
export const getPopularMoviesByGenre = async ({
    genreId,
}: IGetPopularMoviesByGenreRequest) =>
    await request<IGetPopularMoviesByGenreResponse>({
        api: apiTMDB,
        method: 'get',
        endpoint: `/discover/movie?sort_by=popularity.desc&page=1${
            genreId !== 0 ? `&with_genres=${genreId}` : ''
        }`,
    });

//= =================================================================================
export const getMovieById = async ({ id }: IGetMovieByIdRequest) =>
    await request<IGetMovieByIdResponse>({
        api: apiTMDB,
        method: 'get',
        endpoint: `/movie/${id}`,
    });

//= =================================================================================
export const newReview = async (data: IReviewZod) =>
    await request({
        api,
        method: 'post',
        endpoint: '/api/review',
        data,
    });
