<script setup>
    import { onMounted } from 'vue';
    import ListComponent from '../components/ListComponent.vue';
    import TopPageComponent from '../components/TopPageComponent.vue';
    import MovieCard from '../components/MovieCard.vue';

    import { useGenreStore } from '../stores/genre';
    import { useMovieStore } from '../stores/movie';

    const genreStore = useGenreStore();
    const movieStore = useMovieStore();

    const topPage = {
        icon: 'mdi mdi-movie-open-outline',
        title: 'Catálogo de Filmes',
        subtitle: 'Conheça o vasto acervo de filmes, podendo filtrar suas obras favoritas por gênero '
    }

    onMounted(() => {
        movieStore.getMovies(movieStore.currentPage);
        genreStore.getGenres();
    })
</script>

<template>
    <TopPageComponent
        :icon="topPage.icon"
        :title="topPage.title"
        :subtitle="topPage.subtitle"
    />
    <ListComponent
        :items="movieStore.movies"
        :card="MovieCard"
    />
</template>