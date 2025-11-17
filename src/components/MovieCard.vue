<script setup>
    import { motion } from 'motion-v';

    import { useGenreStore } from '../stores/genre';
    const genreStore = useGenreStore();

    const props = defineProps(['image', 'name', 'classification', 'genres']);

</script>
<template>
    <motion.div class="flex flex-col w-70 items-center cursor-pointer border py-5 px-10 rounded-3xl md:max-h-96 md:min-h-96"
        :hover="{ scale: 1.05 }"
    >
        <img class="w-100 rounded-4xl md:w-40" 
            :src="props.image" 
            :alt="`${props.name}-image`"
        >
        <div class="flex flex-col items-center gap-5 my-4 md:items-start">
            <div class="flex gap-2 items-center">
                <h3 class="text-2xl line-clamp-2 font-semibold text-start md:text-lg md:line-clamp-3">{{ props.name }}</h3>
                <p class="flex gap-1 text-lg text-amber-500 md:text-sm">
                    <span class="mdi mdi-star"></span>
                    {{ props?.classification.toFixed(1).replace('.', ',') }}
                </p>
            </div>
            <ul class="flex flex-wrap gap-4 md:hidden">
                <li class="border rounded-2xl py-1 px-2 md:text-xs" v-for="genreId in props.genres">
                    {{ genreStore.getGenreName(genreId) }} 
                </li>
            </ul>
        </div>
    </motion.div>
</template>