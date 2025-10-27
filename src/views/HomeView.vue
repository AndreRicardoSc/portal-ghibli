<script setup>
import { onMounted } from 'vue';    
import { useMovieStore } from '../stores/movie';
import getImageUrl from '../services/images';
const movieStore = useMovieStore();

onMounted(() => {
    movieStore.getMovies(movieStore.currentPage);
});
</script>
<template>
    <ul>
        <li v-for="movie in movieStore.movies"
            @click="movieStore.getDetail(movie.id)"
        >
            <img 
                :src="getImageUrl(movie.poster_path)" 
                alt="movie_path"
                class="w-20 h-40"
                >
            <p>
                {{ movie.title }}
            </p>
        </li>
    </ul>
    <section>
        <p>Current Page: {{ movieStore.currentPage }}</p>
        <ul class="flex gap-2">
            <h2>Total Pages:</h2>
            <li class="text-2xl border px-2 rounded-xl"
                v-for="page in movieStore.pages" 
                :key="page"
                @click="movieStore.getMovies(page)"
            >
                <p>{{ page }}</p>
            </li>
        </ul>
    </section>
</template>