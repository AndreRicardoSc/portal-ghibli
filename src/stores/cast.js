import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { useMovieStore } from "./movie";
import api from "../plugins/axios";

export const useCastStore = defineStore('castStore', () => {
  const movieStore = useMovieStore();

  const state = reactive({
    people: [],
    isLoading: false,
  });

  const people = computed(() => state.people);
  const isLoading = computed(() => state.isLoading);

  const getCast = async () => {
    try {
      if (movieStore.movies.length === 0) {
        await movieStore.getMovies(1);
      }

      state.isLoading = true;
      const allPeople = new Set();

      const requests = movieStore.movies.map(movie =>
        api.get(`/movie/${movie.id}/credits`)
      );

      const responses = await Promise.all(requests);

      for (const res of responses) {
        for (const person of res.data.cast) {
          allPeople.add(person.id)
        }
      }

      state.people = [...allPeople];
    } catch (err) {
      console.error('Erro ao buscar elenco:', err);
    } finally {
      state.isLoading = false;
    }
  };

  const getDetail = async(id) => {
    try{
      state.isLoading = true
      const response = await api.get(`/person/${id}`);
      console.log(response.data)
      return response.data;
    } catch(err){
      console.log(err);
    } finally{
      state.isLoading = false;
    }
  }

  return {
    people,
    getCast,
    getDetail,
    isLoading,
  };
}); 