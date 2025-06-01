import { request } from './request';

import api from './api';
import apiTMDB from './apiTMDB';
import apiImageTMDB from './apiImageTMDB';

//= =================================================================================
export const getImageTMDB = async (path: string) =>
    await request({
        api: apiImageTMDB,
        method: 'get',
        endpoint: `${path}`,
    });

export const getTopRatedMovies = async () =>
    await request<IGetTopRatedMoviesResponse>({
        api: apiTMDB,
        method: 'get',
        endpoint: '/movie/top_rated?page=1',
    });
