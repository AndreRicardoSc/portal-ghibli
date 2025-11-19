<script setup>
    import { useMovieStore } from '../stores/movie';
    const movieStore = useMovieStore();

    async function changePage() {
        
    }
</script>
<template>
    <ul class="flex gap-4 text-xl bg-black/80 py-2 px-4">
        <li v-for="page in movieStore.pages"
            class="border-2 border-pink px-2 rounded-2xl cursor-pointer hover:bg-white transition-all duration-300"
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