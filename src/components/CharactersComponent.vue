<script setup>
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
    <div class="flex flex-col items-center gap-5 cursor-pointer w-100" @click="navigateToCharacter">
        <div class="flex flex-col items-center justify-center rounded-full w-60 h-60"
            :style="{
                backgroundColor: props.character.backgroundColor,
            }"
        >
            <img class="w-50 p-5" :src="props.character.image" :alt="props.character.name">
        </div>
        <div class="flex flex-col items-center gap-2">
            <h2 class="text-primary text-3xl font-light">{{ props.character.name }}</h2>
            <p class="text-secondary text-md text-justify">{{ props.character.description }}</p>
        </div>
    </div>
</template>