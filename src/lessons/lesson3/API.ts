import axios from 'axios';

const key = 'dee006b3';
const configOMB = {
    baseURL: `http://www.omdbapi.com`,
};
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string, page?: string) => {
        return page
            ? axiosInstance.get(`/?apikey=${key}&s=${title}&page=${page}`)
            : axiosInstance.get(`/?apikey=${key}&s=${title}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`/?apikey=${key}&s=${title}&type=${type}`);
    }
};


export default API;
