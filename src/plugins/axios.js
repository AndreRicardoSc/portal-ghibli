import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_TMDB_BASE_URL,
    headers:{
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    },
    params:{
        language: 'pt-BR'
    }
});

export default api;