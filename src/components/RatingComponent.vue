<script setup>
    import { motion } from 'motion-v'
    import { computed } from 'vue';

    const props = defineProps({
        rating: Number
    });

    const radius = 50;
    const circumference = radius * 2 * Math.PI;

    const dashOffset = computed(() => {
        const progress = props.rating / 10;
        return circumference * (1 - progress);
    });
</script>
<template>
  <div class="relative w-28 h-28 flex items-center justify-center">
    <motion.svg
      width="60"
      height="60"
      viewBox="0 0 120 120"
      class="absolute"
      :initial="{ scale: 0.3, rotate: -180, opacity: 0 }"
      :animate="{ scale: 1, rotate: 0, opacity: 1 }"
      :transition="{ duration: 0.8, easing: 'ease-out' }"
    >
      <circle cx="60" cy="60" r="50" stroke="#ffffff40" stroke-width="5" fill="none" />
      <motion.circle
        cx="60"
        cy="60"
        r="50"
        stroke="#FFDD00"
        stroke-width="5"
        fill="none"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :initial="{ strokeDashoffset: circumference }"
        :animate="{ strokeDashoffset: dashOffset }"
        :transition="{ duration: 1.2, easing: 'ease-out', delay: 0.3 }"
      />
    </motion.svg>
    <motion.div
      class="text-white text-xl"
      :initial="{ scale: 0, opacity: 0 }"
      :animate="{ scale: 1, opacity: 1 }"
      :transition="{ duration: 0.6, delay: 0.5 }"
    >
      {{ props?.rating?.toFixed(1) }}
    </motion.div>
  </div>
</template>
