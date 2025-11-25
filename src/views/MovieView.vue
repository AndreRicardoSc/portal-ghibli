<script setup>
    import { onMounted } from 'vue';
    import ListComponent from '../components/ListComponent.vue';
    import TopPageComponent from '../components/TopPageComponent.vue';
    import MovieCard from '../components/MovieCard.vue';
    import GenreList from '../components/GenreList.vue';

    import { useGenreStore } from '../stores/genre';
    import { useMovieStore } from '../stores/movie';

    const genreStore = useGenreStore();
    const movieStore = useMovieStore();

    onMounted(() => {
        movieStore.getMovies(movieStore.currentPage);
        genreStore.getGenres();
    })
</script>

<template>
    <TopPageComponent
        icon="mdi mdi-movie-open-outline"
        title="Catálogo de Filmes"
        subtitle="Conheça o vasto acervo de filmes, podendo filtrar suas obras favoritas por gênero"
        :list="GenreList"
    />
    <ListComponent
        :items="movieStore.movies"
        :card="MovieCard"
    />
</template>