<script setup>
import { ref, onMounted, computed } from 'vue';
import getImageUrl from '../services/images';
import { getFormatedTime } from '../services/time';
import MovieDetailComponent from '../components/MovieDetailComponent.vue';
import { useMovieStore } from '../stores/movie';

const movieStore = useMovieStore();

const props = defineProps({
    id: String
});

const movie = ref(null);

onMounted(async () => {
    movie.value = await movieStore.getDetail(props.id);
    console.log(movie.value)
});

const backgroundStyle = computed(() => {
    if (!movie.value) return {};
    return {
        backgroundImage: `
            linear-gradient(
                to bottom, 
                rgba(0,0,0,0) 0%,
                rgba(0,0,0,0) 30%, 
                #ffffff 100%
            ),
            url(${getImageUrl(movie.value.backdrop_path, 'original')})
        `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
});
</script>

<template>
    <section class="h-screen flex flex-col justify-end px-30" :style="backgroundStyle">
        
        <MovieDetailComponent
            :title="movie?.title"
            :subtitle="movie?.tagline"
            :date="movie?.release_date"
            :duration="getFormatedTime(movie?.runtime)"
            :language="movie?.spoken_languages[0]?.english_name"
            :poster="getImageUrl(movie?.poster_path, 'w500')"
            :genres="movie?.genres"
            :overview="movie?.overview"
            :rating="movie?.vote_average"
        />

    </section>
</template>
