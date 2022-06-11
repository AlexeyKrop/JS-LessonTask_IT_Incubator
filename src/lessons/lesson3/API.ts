import axios from 'axios';


const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'f3f43142';
const axiosInstance = axios.create(configOMB);

export const API = {
    searchFilmsByTitle: (title: string) => {
      return axiosInstance.get(`?s=${title}&apikey=f3f43142`)
        .then(data => console.log(data.data))


    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
