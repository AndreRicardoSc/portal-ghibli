<script setup>
    import { onMounted } from 'vue';
    import MovieCard from './MovieCard.vue';
    import getImageUrl from '../services/images';
    import { useGenreStore } from '../stores/genre';
    const genreStore = useGenreStore();

    const props = defineProps(['movieList']);

    onMounted(() => {
        genreStore.getGenres();
    })
</script>
<template>
    <ul class="flex flex-col items-center justify-center gap-20 md:flex-row md:flex-wrap md:gap-10">
        <li v-for="(movie, index) in props.movieList" :key="index">
            <MovieCard 
                :image="getImageUrl(movie?.poster_path)"
                :name="movie?.title"
                :genres="movie?.genre_ids"
                :classification="movie.vote_average"
            />
        </li>
    </ul>
</template>