import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '../plugins/axios';
import { useGenreStore } from './genre';
const ghibliID = import.meta.env.VITE_GHIBLI_COMPANY_ID

export const useMovieStore = defineStore('movieStore', () => {

  const genreStore = useGenreStore();

  const state = reactive({
    movies: [],
    pages: 0,
    currentPage: 1,
  });

  const movies = computed(() => state.movies);
  
  const pages = computed(() => {
    const array = [];
    for(let i = 1; i <= state.pages; i++) array.push(i);
    return array
  });

  const currentPage = computed(() => state.currentPage);

  const getMovies = async(page, genreId) => {
    try{
      state.movies = [];
      state.pages = 0;
      state.currentPage = 1;

      if(genreId) {
        const response = await api.get(`/discover/movie?with_companies=${ghibliID}&page=${page}&sort_by=release_date.asc&with_genres=${genreId}`);
        state.movies = response.data.results;
        state.currentPage = response.data.page;
        state.pages = response.data.total_pages;
      } else {
        const response = await api.get(`/discover/movie?with_companies=${ghibliID}&page=${page}&sort_by=release_date.asc`);
        state.movies = response.data.results;
        state.currentPage = response.data.page;
        state.pages = response.data.total_pages;
        console.log(response.data.results)
      }


    } catch(err){
      console.log(err);
    }
  }
  
  const getDetail = async(id) => {
    const response = await api.get(`/movie/${id}`);
    return response.data
  }
  
  const getMovieTimeLine = async() => {
    const response = await api.get(`/discover/movie?with_companies=${ghibliID}&sort_by=popularity.desc`);
    const first10 = response.data.results.slice(0, 10);

    const ordered = first10.sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      return dateA - dateB;
    });
    
    state.movies = ordered;
  }

  const setCurrentPage = async(page) => {
    state.currentPage = page;
    getMovies(page, genreStore.currentGenre);
  }

  return{
    movies,
    getMovies,
    getMovieTimeLine,
    getDetail,
    pages,
    currentPage,
    setCurrentPage
  }
})