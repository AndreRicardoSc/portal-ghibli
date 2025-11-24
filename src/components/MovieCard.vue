<script setup>
    import { computed } from 'vue';
    import { motion } from 'motion-v';
    import getImageUrl from '../services/images';

    import { useGenreStore } from '../stores/genre';
    const genreStore = useGenreStore();

    const props = defineProps(['item']);   
</script>
<template>
    <motion.div :key="props.index" class="flex flex-col w-70 border-white bg-black/60 cursor-pointer items-center justify-center px-5 py-5 rounded-3xl md:max-h-96 md:min-h-96"
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
        :hover="{ scale: 1.05, opacity: 0.8 }"
    >
        <img class="w-100 rounded-4xl md:w-60 md:h-60 md:object-cover" 
            :src="getImageUrl(props.item?.poster_path)" 
            :alt="`${props.item?.title}-image`"
        >
        <div class="flex flex-col items-center gap-5 my-4 md:items-start">
            <div class="flex gap-2 items-center">
                <h3 class="text-2xl text-white line-clamp-3 font-semibold text-start md:text-lg md:line-clamp-2">{{ props.item?.title }}</h3>
                <p class="flex gap-1 text-xl text-amber-500 md:text-sm">
                    <span class="mdi mdi-star"></span>
                    {{ props?.item?.vote_average.toFixed(1).replace('.', ',') }}
                </p>
            </div>
            <ul class="w-full flex flex-wrap justify-start gap-4 md:hidden">
                <li v-for="genreId in props.item?.genre_ids"
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