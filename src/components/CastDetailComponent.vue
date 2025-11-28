<script setup>
    import { motion } from 'motion-v';
    import getImageUrl from '../services/images';
import { onMounted } from 'vue';

    const props = defineProps({
        name: String,
        birthday: String,
        deathday: String,
        place_of_birth: String,
        biography: String,
        profile_path: String,
        known_for_department: String,
        popularity: Number,
        also_known_as: Array,
    });

    onMounted(() => {
        console.log(props?.profile_path)
    })
</script>
<template>
    <motion.div class="text-white bg-black/70 rounded-t-lg px-20 w-full"
        :initial="{ y: 300, opacity: 0 }"
        :animate="{ y: 0, opacity: 1 }"
        :transition="{ duration: 0.5 }"
    >
        <div class="flex flex-col gap-4 border-b py-10">
            <div class="w-full flex flex-col items-center text-center">
                <h1 class="text-4xl">{{ props?.name }}</h1>
                <h2 class="text-lg text-white/70">{{ props?.known_for_department }}</h2>

            </div>
            <ul class="flex justify-center gap-5">
                <li>{{ props?.birthday }}</li>
                <li v-if="props?.deathday">| {{ props?.deathday }}</li>
                | <li>{{ props?.place_of_birth }}</li>
            </ul>
        </div>
        <div class="flex items-start gap-15 py-5">
            <img class="w-40 rounded-lg" 
                :src="props?.profile_path ? getImageUrl(props?.profile_path) : '/images/default-people.png'" 
                :alt="props?.name"
            >
            <div class="flex flex-1 flex-col text-sm gap-10">
                <div class="flex flex-col gap-2">
                    <h2 class="text-lg">Nomes populares:</h2>
                    <ul class="flex gap-2">
                        <li v-for="know in props.also_known_as"
                            class="border rounded-2xl py-1 px-2 "
                        >
                            {{ know }}
                        </li>
                    </ul>
                </div>
                <p class="text-justify">{{ props?.biography }}</p>
            </div>
        </div>
    </motion.div>
</template>