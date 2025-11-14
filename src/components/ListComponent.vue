<script setup>
    import MovieCard from './MovieCard.vue';
    import getImageUrl from '../services/images';
    const props = defineProps(['movieList'])
</script>
<template>
    <ul class="flex flex-col items-start">
        <li v-for="movie in props.movieList">
            <MovieCard 
                :image="getImageUrl(movie?.poster_path)"
                :name="movie?.title"
                :sinopse="movie?.overview"
            />
        </li>
    </ul>
</template>