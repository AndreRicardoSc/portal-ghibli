<script setup>
import { Motion, motion } from "motion-v";
</script>

<template>
  <div 
    class="fixed inset-0 flex items-center justify-center z-50"
    style="
      background: linear-gradient(120deg, #1a1a1a, #2b2d33, #1a1a1a);
      background-size: 200% 200%;
      animation: ghibliSky 6s ease-in-out infinite;
    "
  >

    <motion.div
      class="relative w-40 h-40 flex items-center justify-center"
      :initial="{ rotate: 0, scale: 0.8 }"
      :animate="{ rotate: 360, scale: 1 }"
      :transition="{ duration: 2, repeat: Infinity, repeatType: 'reverse' }"
    >

      <div class="absolute w-full h-full">
        <motion.img 
          src="/images/susuwatari.png"
          class="w-15 h-10 absolute top-0 left-1/2 -translate-x-1/2"
          :initial="{ y: -10 }"
          :animate="{ y: 10 }"
          :transition="{ duration: 1.4, repeat: Infinity, repeatType: 'reverse' }"
        />
      </div>

      <div class="absolute w-full h-full rotate-120">
        <motion.img 
          src="/images/susuwatari.png"
          class="w-15 h-10 absolute top-0 left-1/2 -translate-x-1/2"
          :initial="{ y: -10 }"
          :animate="{ y: 10 }"
          :transition="{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }"
        />
      </div>

      <div class="absolute w-full h-full rotate-240">
        <motion.img 
          src="/images/susuwatari.png"
          class="w-15 h-10 absolute top-0 left-1/2 -translate-x-1/2"
          :initial="{ y: -10 }"
          :animate="{ y: 10 }"
          :transition="{ duration: 1, repeat: Infinity, repeatType: 'reverse' }"
        />
      </div>

      <motion.div
        class="w-6 h-6 rounded-full bg-yellow-300 shadow-[0_0_15px_#ffd35c]"
        :initial="{ scale: 0.5, opacity: 0.7 }"
        :animate="{ scale: 1, opacity: 1 }"
        :transition="{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }"
      />
    </motion.div>

    <motion.p
      class="absolute bottom-10 text-white/80 text-sm font-light tracking-wide"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ duration: 2, repeat: Infinity, repeatType: 'reverse' }"
    >
      Espíritos estão organizando tudo para você…
    </motion.p>
  </div>
</template>

<style>
@keyframes ghibliSky {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
