<script setup>
    import { motion } from 'motion-v';
    const props = defineProps({
        icon: String,
        title: String,
        subtitle: String,
        list: Object
    });
</script>
<template>
    <section class="flex items-center justify-center gap-20 pt-40 md:pt-30 pb-20 px-10 md:px-30">
        <div class="flex flex-col gap-5 md:gap-2"
            :class="
                props.list
                ? 'text-justify'
                : 'text-center items-center md:px-40 md:gap-3 md:pt-10'
            "
        >
            <motion.h1 class="flex items-center gap-5 md:items-end text-primary text-3xl md:text-4xl font-semibold">
                <p>{{ props.title }}</p>
                <span v-if="props.icon" :class="props.icon"></span>
            </motion.h1>
            <motion.p v-if="props.subtitle" class="text-secondary text-2xl md:text-xl">
                {{ props.subtitle }}
            </motion.p>
        </div>
        <list v-if="props.list"/>
    </section>
</template>