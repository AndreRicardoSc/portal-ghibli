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
    <section class="bg-[url('/images/banner/background-banner.png')] bg-no-repeat bg-fixed bg-cover rounded-2xl py-20">
        <ul v-if="movieList && movieList?.length > 0" 
            class="flex flex-col items-center justify-center gap-20 md:flex-row md:flex-wrap md:gap-10"
        >
            <li v-for="(movie, index) in props.movieList" :key="index">
                <MovieCard class=""
                    :image="getImageUrl(movie?.poster_path)"
                    :name="movie?.title"
                    :genres="movie?.genre_ids"
                    :classification="movie.vote_average"
                />
            </li>
        </ul>
        <section v-else
            class="flex flex-col items-center justify-center"
        >
            <h2 class="text-primary font-semibold text-4xl">Desculpe, nenhum item encontrado!</h2>
        </section>
    </section>
</template>