<script setup>
    import { computed } from 'vue';
    import { motion } from 'motion-v';

    import { useGenreStore } from '../stores/genre';
    const genreStore = useGenreStore();

    const props = defineProps(['image', 'name', 'classification', 'genres']);   
</script>
<template>
    <motion.div :key="props.index" class="flex flex-col w-70 items-center cursor-pointer border py-5 px-10 rounded-3xl md:max-h-96 md:min-h-96"
        :initial="{
            translateY: 100,
            filter: 'blur(5px)',
            opacity: 0
        }"
        :while-in-view="{
            translateY: 0,
            opacity: 1,
            filter: 'blur(0)'
        }"
        :hover="{ scale: 1.05 }"
    >
        <img class="w-100 rounded-4xl md:w-40" 
            :src="props.image" 
            :alt="`${props.name}-image`"
        >
        <div class="flex flex-col items-center gap-5 my-4 md:items-start">
            <div class="flex gap-2 items-center">
                <h3 class="text-2xl line-clamp-3 font-semibold text-start md:text-lg md:line-clamp-2">{{ props.name }}</h3>
                <p class="flex gap-1 text-xl text-amber-500 md:text-sm">
                    <span class="mdi mdi-star"></span>
                    {{ props?.classification.toFixed(1).replace('.', ',') }}
                </p>
            </div>
            <ul class="w-full flex flex-wrap justify-start gap-4 md:hidden">
                <li v-for="genreId in props.genres"
                    class="text-lg bg-pink rounded-2xl py-2 px-3"
                    @click="genreStore.setCurrentGenre(genreId)"
                    :class="
                        genreId == genreStore.currentGenre
                        ? 'text-pink font-bold border-2 border-pink bg-white'
                        : 'font-semibold border-none'
                    "
                >
                    {{ genreStore.getGenreName(genreId) }} 
                </li>
            </ul>
        </div>
    </motion.div>
</template>