import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { useMovieStore } from "./movie";
import { watch } from "vue";

export const useGenreStore = defineStore('genreStore', () => {

    const movieStore = useMovieStore();

    const state = reactive({
        genres: [],
        currentGenre: 0,
    })

    const genres = computed(() => state.genres);
    const currentGenre = computed(() => state.currentGenre);

    const getGenresIds = async() => {
        const genreIds = new Set();
        for(let movie of movieStore.movies){
            for(let id of movie.genre_ids){
                genreIds.add(id);
            }
        }
        state.genres = [...genreIds];
    }

    const setCurrentGenre = (id) => {
        state.currentGenre = id;
        movieStore.getMovies(movieStore.currentPage, id);
    }

    watch(
        () => movieStore.movies,
        () => getGenresIds(),
        { deep: true }
    );

    return {
        genres,
        currentGenre,
        getGenresIds,
        setCurrentGenre
    }
})