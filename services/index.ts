import { request } from './request';

import api from './api';
import apiTMDB from './apiTMDB';
import { IRegisterZod } from '../components/Forms/RegisterUserForm/registerSchema';

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
        endpoint: `/search/movie?query=${query}`,
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
