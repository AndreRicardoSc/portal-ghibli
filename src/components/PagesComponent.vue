<script setup>
    import { useMovieStore } from '../stores/movie';
    const movieStore = useMovieStore();


</script>
<template>
    <ul>
        <li v-for="page in movieStore.pages">
            {{ page }}
        </li>
    </ul>
</template>