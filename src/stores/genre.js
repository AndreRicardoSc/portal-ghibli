import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { useMovieStore } from "./movie";
import { useLoadingStore } from "./loading";
import api from "../plugins/axios";

export const useGenreStore = defineStore('genreStore', () => {

    const movieStore = useMovieStore();
    const loadingStore = useLoadingStore();

    const state = reactive({
        genres: [],
        currentGenre: 0,
    })

    const genres = computed(() => state.genres);
    const currentGenre = computed(() => state.currentGenre);

    const getGenres = async() => {
        loadingStore.setLoading(true);
        const response = await api.get('genre/movie/list?');
        state.genres = response.data.genres;
        loadingStore.setLoading(false);
    }

    const setCurrentGenre = (id) => {
        state.currentGenre = id;
        movieStore.getMovies(1, id);
    }

    const getGenreName = (id) => {
        return genres.value.find(genre => genre.id == id)?.name
    }

    return {
        genres,
        currentGenre,
        setCurrentGenre,
        getGenreName,
        getGenres,
    }
})