<script setup>
    import { motion } from 'motion-v';
    import { useRouter } from 'vue-router';
    import getImageUrl from '../services/images';
    const props = defineProps({
        item: {
            type: Object,
            required: true
        }
    })

    const router = useRouter();
</script>

<template>
    <motion.div class="flex flex-col w-70 border-white bg-black/60 cursor-pointer items-center justify-center px-5 gap-2 py-5 rounded-3xl md:max-h-96 md:min-h-96"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :hover="{ scale: 1.05, opacity: 0.8, transition: { duration: 0.2 } }"
        :transition="{ duration: 0.5 }"
        @click="router.push({ name: 'castDetail', params: { id: props.item.id } })"
    >
        <img class="w-100 rounded-4xl md:w-60 md:h-60 md:object-cover" 
            :src="props.item.profile_path ? getImageUrl(props.item.profile_path) : '/images/default-people.png'"
            :alt="props.item.name">
        <div class="flex flex-col text-white gap-2 text-center">
            <h3 class="text-2xl md:text-lg">{{ props.item.name }}</h3>
            <p class="text-xl md:text-sm">{{ props.item.known_for_department }}</p>
        </div>
    </motion.div>
</template>
