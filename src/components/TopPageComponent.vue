<script setup>
    import { motion } from 'motion-v';
import GenreList from './GenreList.vue';
    const props = defineProps(['title', 'subtitle'])
</script>
<template>
    <section class="flex flex-col items-center justify-center pt-30 pb-20 shadow-xl">
        <div>
            <motion.h1 class="text-primary text-3xl font-semibold">
                {{ props.title }}
            </motion.h1>
            <motion.p v-if="props.subtitle" class="text-secondary text-xl">
                {{ props.subtitle }}
            </motion.p>
        </div>
        <GenreList
            class="hidden md:flex"
        />
    </section>
</template>