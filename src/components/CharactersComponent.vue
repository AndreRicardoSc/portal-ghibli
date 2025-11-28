<script setup>
    import { motion } from 'motion-v';
    import { useRouter } from 'vue-router';

    const props = defineProps({
        character: Object
    })

    const router = useRouter();
    const navigateToCharacter = () => {
        router.push({name: 'movieDetail', params: {id: props.character.movieId}})
    }
</script>

<template>
    <motion.div 
        class="flex flex-col items-center gap-5 cursor-pointer w-80 p-10 rounded-lg hover:shadow-lg"               
        @click="navigateToCharacter"
        :initial="{ opacity: 0 }"
        :while-in-view="{ opacity: 1 }"
        :transition="{ duration: 0.5, delay: 0.2 }"
    >
        <div class="flex flex-col items-center justify-center rounded-full w-60 h-60"
            :style="{
                backgroundColor: props.character.backgroundColor,
            }"
        >
            <img class="w-50 p-5" :src="props.character.image" :alt="props.character.name">
        </div>
        <div class="flex flex-col items-center gap-2">
            <h2 class="text-primary text-3xl font-light">{{ props.character.name }}</h2>
            <p class="text-secondary text-lg text-justify">{{ props.character.description }}</p>
        </div>
    </motion.div>
</template>