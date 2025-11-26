<script setup>
    import { motion } from 'motion-v';
    import { computed } from 'vue';
import RatingComponent from './RatingComponent.vue';
    const props = defineProps({
        title: String,
        subtitle: String,
        date: String,
        duration: String,
        language: String,
        poster: String,
        genres: Array,
        overview: String,
        rating: Number,
    });

    const radius = 50;
    const circumference = radius * 2 * Math.PI;

    const dashOffset = computed(() => {
        const progress = props.rating / 10;
        return circumference * (1 - progress);
    });
</script>
<template>
    <motion.div class="text-white bg-black/70 rounded-t-lg px-20"
        :initial="{ y: 300, opacity: 0 }"
        :animate="{ y: 0, opacity: 1 }"
        :transition="{ duration: 0.5 }"
    >
        <div class="flex flex-col gap-4 border-b py-10">
            <div class="w-full flex flex-col items-center text-center">
                <h1 class="text-4xl">{{ props?.title }}</h1>
                <h2 class="text-lg text-white/70">{{ props?.subtitle }}</h2>
                
            </div>
            <ul class="flex justify-center gap-5">
                <li>{{ props?.date }}</li> 
                | <li>{{ props?.duration }}</li>
                | <li>Idioma: {{ props?.language }}</li>
            </ul>
        </div>
        <div class="flex items-start gap-15 py-5">
            <img class="w-40 rounded-lg" :src="props?.poster" :alt="props?.title">
            <div class="flex flex-col text-sm">
                <div class="flex items-center gap-4">
                    <ul class="flex gap-2">
                        <li v-for="genre in props?.genres"
                            class="border rounded-2xl py-1 px-2"
                        >
                            {{ genre?.name }}
                        </li>
                    </ul>
                    <RatingComponent
                        :rating="props?.rating"
                    />
                </div>
                
                <p>{{ props?.overview }}</p>
            </div>
        </div>
    </motion.div>
</template>