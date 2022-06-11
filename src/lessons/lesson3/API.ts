import axios from 'axios';
import {log} from "util";

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'f3f43142';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`http://www.omdbapi.com/?s=title&apikey=f3f43142`)
          .then(data => console.log(data.data.Search))
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
