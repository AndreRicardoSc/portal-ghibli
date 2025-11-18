<script setup>
    import { onMounted } from 'vue';
    import { useGenreStore } from '../stores/genre';
    const genreStore = useGenreStore();

    onMounted(() => {
        genreStore.getGenres();
    })
</script>

<template>
    <ul class="flex flex-wrap gap-4">
        <li v-for="genre in genreStore.genres"
            class="text-lg text-center bg-pink rounded-2xl py-2 px-3"
            :class="
                genre.id == genreStore.currentGenre
                ? 'text-pink font-bold border-2 border-pink bg-white'
                : 'font-semibold border-none'
            "
            @click="genreStore.setCurrentGenre(genre.id)"
        >
            {{ genre.name }}
        </li>
    </ul>
</template>
