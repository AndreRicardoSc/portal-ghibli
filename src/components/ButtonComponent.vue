<script setup>
    import { motion } from 'motion-v';
    const props = defineProps({
        buttonText: String,
        color: String,
        link: String,
        animate: Boolean
    }); 
</script>
<template>
    <RouterLink
        :class="`text-2xl text-center py-2 px-6 rounded-3xl max-w-100 border-2 border-transparent bg-${props.color} hover:bg-${props.color}/30 hover:border-${props.color} hover:text-${props.color} transition-all duration-500 md:text-xl`" 
        :to="props.link"
    >
        {{ props.buttonText }}
    </RouterLink>
</template>