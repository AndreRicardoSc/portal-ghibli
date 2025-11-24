<script setup>
    import { onMounted } from 'vue';
    import MovieCard from './MovieCard.vue';
    import getImageUrl from '../services/images';
    import { useGenreStore } from '../stores/genre';
    const genreStore = useGenreStore();

    const props = defineProps({
        items: Array,
        card: {
            type: Object,
            required: true
        }
    });

    onMounted(() => {
        genreStore.getGenres();
    })
</script>
<template>
    <ul class="flex flex-col items-center justify-center gap-20 md:flex-row md:flex-wrap md:gap-10 bg-[url('/images/banner/background-banner.png')] bg-no-repeat bg-fixed bg-cover">
        <li v-for="(item, index) in props.items" :key="index">
            <component :is="props.card" :item="item"/>
        </li>
    </ul>
</template>