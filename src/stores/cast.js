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
      if (movieStore.movies.length === 0) return;

      state.isLoading = true;
      const allPeople = new Map();

      const requests = movieStore.movies.map(movie =>
        api.get(`/movie/${movie.id}/credits`)
      );

      const responses = await Promise.all(requests);

      for (const res of responses) {
        for (const person of res.data.cast) {
          if (!allPeople.has(person.id)) {
            allPeople.set(person.id, { ...person });
          }
        }
      }

      state.people = Array.from(allPeople.values());
    } catch (err) {
      console.error('Erro ao buscar elenco:', err);
    } finally {
      state.isLoading = false;
    }
  };

  return {
    people,
    getCast,
    isLoading,
  };
}); 