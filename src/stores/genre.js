import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { useMovieStore } from "./movie";
import { watch } from "vue";
import api from "../plugins/axios";

export const useGenreStore = defineStore('genreStore', () => {

    const movieStore = useMovieStore();

    const state = reactive({
        genres: [],
        currentGenre: 0,
    })

    const genres = computed(() => state.genres);
    const currentGenre = computed(() => state.currentGenre);

    const getGenres = async() => {
        const response = await api.get('genre/movie/list?');
        state.genres = response.data.genres;
    }

    const setCurrentGenre = (id) => {
        state.currentGenre = id;
        movieStore.getMovies(1, id);
    }

    const getGenreName = (id) => {
        return genres.value.find(genre => genre.id == id).name
    }

    return {
        genres,
        currentGenre,
        setCurrentGenre,
        getGenreName,
        getGenres,
    }
})