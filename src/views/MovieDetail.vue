<script setup>
import { ref, onMounted, computed } from 'vue';
import getImageUrl from '../services/images';
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
                #FF6F91 100%
            ),
            url(${getImageUrl(movie.value.backdrop_path, 'original')})
        `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
});
</script>

<template>
    <section class="h-screen flex flex-col justify-center px-30" :style="backgroundStyle">
        
        <div>
            <h1>{{ movie.title }}</h1>
            <ul>
                <li>{{ movie.release_date }}</li>
            </ul>
        </div>

    </section>
</template>
