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
      await movieStore.getAllMovies();

      const allPeople = new Map();

      const requests = movieStore.movies.map(movie =>
        api.get(`/movie/${movie.id}/credits`)
      );

      const responses = await Promise.all(requests);

      for (const res of responses) {
        for (const person of res.data.cast) {
          if(!allPeople.has(person.id)){
            allPeople.set(person.id, person)
          }
        }
      }

      state.people = [...allPeople.values()];
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