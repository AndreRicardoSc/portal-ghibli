<script setup>
    import { ref } from 'vue';
    import { motion } from 'motion-v';
    const props = defineProps({
        buttonText: String,
        color: String,
        link: String,
        animate: Boolean
    }); 

    const isHover = ref(false);
</script>
<template>
    <RouterLink :to="props.link"
        :class="`text-2xl text-center py-2 px-6 rounded-3xl max-w-100 border-2 transition-all duration-500 md:text-xl hover:bg-black/50`"
        :style="{
            backgroundColor: isHover ? `color-mix(in srgb, ${props.color} 30%, white)` : props.color,
            borderColor: isHover ? `${props.color}` : `transparent`,
            color: isHover ? `${props.color}` : `black`
        }" 
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
    >
        {{ props.buttonText }}
    </RouterLink>
</template>