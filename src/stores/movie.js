import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '../plugins/axios';
import { useGenreStore } from './genre';
import { useLoadingStore } from './loading';

const ghibliID = import.meta.env.VITE_GHIBLI_COMPANY_ID

export const useMovieStore = defineStore('movieStore', () => {

  const genreStore = useGenreStore();
  const loadingStore = useLoadingStore();

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
      loadingStore.setLoading(true);
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
      }


    } catch(err){
      console.log(err);
    } finally {
      loadingStore.setLoading(false);
    }
  }
  
  const getAllMovies = async() => {
    try{
      loadingStore.setLoading(true);

      const firstPage = await api.get(`/discover/movie?with_companies=${ghibliID}&page=1&sort_by=release_date.asc`);
      
      const totalPages = firstPage.data.total_pages;
      const allMovies = [...firstPage.data.results];

      const requests = [];

      for(let page = 2; page <= totalPages; page++){
        requests.push(
          api.get(`/discover/movie?with_companies=${ghibliID}&page=${page}&sort_by=release_date.asc`)
        );
      }

      const responses = await Promise.all(requests);

      for(const response of responses){
        allMovies.push(...response.data.results);
      }

      state.movies = allMovies;
    } catch(err){
      console.log(err);
    } finally{

      loadingStore.setLoading(false);
    }
  }

  const getDetail = async(id) => {
    loadingStore.setLoading(true);
    const response = await api.get(`/movie/${id}`);
    loadingStore.setLoading(false);
    return response.data
  }
  
  const setCurrentPage = async(page) => {
    state.currentPage = page;
    getMovies(page, genreStore.currentGenre);
  }

  return{
    movies,
    getMovies,
    getAllMovies,
    getDetail,
    pages,
    currentPage,
    setCurrentPage
  }
})