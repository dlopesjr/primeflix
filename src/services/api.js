import axios from 'axios';

//URL da API: /movie/latest?api_key=b83e824be5500c7af44427015a750d1a&Language=pt-BR


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;