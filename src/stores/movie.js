import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '../plugins/axios';

export const useMovieStore = defineStore('movieStore', () => {

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

  const getMovies = async(page) => {
    try{
      const response = await api.get(`/discover/movie?with_companies=10342&language=pt-BR&page=${page}&sort_by=release_date.asc`);
      state.movies = response.data.results;
      state.currentPage = response.data.page;
      state.pages = response.data.total_pages;
    } catch(err){
      console.log(err);
    }
  }

  return{
    movies,
    getMovies,
    pages,
    currentPage
  }
})