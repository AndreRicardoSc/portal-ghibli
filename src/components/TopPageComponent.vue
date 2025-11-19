<script setup>
    import { motion } from 'motion-v';
import GenreList from './GenreList.vue';
    const props = defineProps(['icon','title', 'subtitle'])
</script>
<template>
    <section class="flex items-center justify-center gap-20 pt-40 md:pt-30 pb-20 shadow-xl px-10">
        <div class="flex flex-col gap-5 md:gap-2">
            <motion.h1 class="flex items-center gap-5 md:items-end text-primary text-3xl md:text-4xl font-semibold">
                <p>{{ props.title }}</p>
                <span v-if="props.icon" class="" :class="props.icon"></span>
            </motion.h1>
            <motion.p v-if="props.subtitle" class="text-secondary text-2xl md:text-xl">
                {{ props.subtitle }}
            </motion.p>
        </div>
        <GenreList/>
    </section>
</template>