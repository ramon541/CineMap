import { request } from './request';

import api from './api';
import apiTMDB from './apiTMDB';

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
