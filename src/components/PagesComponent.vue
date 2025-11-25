<script setup>
    import { useMovieStore } from '../stores/movie';
    const movieStore = useMovieStore();

</script>
<template>
    <ul class="flex flex-wrap gap-4 text-xl justify-center bg-black/60 rounded-2xl py-2 px-4 w-1/2 md:w-1/4">
        <li v-for="page in movieStore.pages"
            class="text-3xl md:text-xl border-2 border-pink px-3 py-1 rounded-full cursor-pointer hover:bg-white transition-all duration-300 "
            @click="movieStore.setCurrentPage(page)"
            :class="movieStore.currentPage === page
                ? 'bg-white'
                : 'bg-pink'
            "
        >
            {{ page }}
        </li>
    </ul>
</template>