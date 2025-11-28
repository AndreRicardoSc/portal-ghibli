<script setup>
    import { onMounted } from 'vue';
    import { useGenreStore } from '../stores/genre';
    const genreStore = useGenreStore();

    onMounted(() => {
        genreStore.getGenres();
    })
</script>

<template>
    <ul class="hidden md:flex flex-wrap gap-4 bg-primary p-5 w-1/2 rounded-xl border-4 border-secondary">
        <li v-for="genre in genreStore.genres"
            :key="genre.id"
            class="text-sm text-center bg-pink rounded-2xl py-2 px-2 cursor-pointer border border-pink hover:text-pink hover:bg-white transition-all duration-300"
            :class="
                genre.id == genreStore.currentGenre
                ? 'text-pink font-bold border-2 border-pink bg-white'
                : 'font-semibold'
            "
            @click="genreStore.setCurrentGenre(genre.id)"
        >
            {{ genre.name }}
        </li>
    </ul>
</template>
