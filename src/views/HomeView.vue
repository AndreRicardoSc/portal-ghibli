<script setup>
    //EXEMPLO PARA PÁGINA DE ELENCO
    // const peopleDetails = ref([]);
    // onMounted( async() => {
    //     await castStore.getCast();

    //     const details = await Promise.all(
    //         castStore.people.map(id =>  castStore.getDetail(id))
    //     );

    //     peopleDetails.value = details;
    // })
    import { onMounted } from 'vue';
    import ListComponent from '../components/ListComponent.vue';
    import { useMovieStore } from '../stores/movie';
    
    const movieStore = useMovieStore();

    onMounted(() => {
        movieStore.getMovies(1);
    })
</script>
<template>
    
    <ListComponent
        :movie-list="movieStore.movies"
    />
</template>