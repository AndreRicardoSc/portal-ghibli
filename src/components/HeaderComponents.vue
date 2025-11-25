<script setup>
import { RouterLink } from 'vue-router';
import { motion } from 'motion-v';

const pages = [
    {link: '/', name: 'Início'},
    {link: '/movies', name: 'Filmes'},
    {link: '/cast', name: 'Elenco'},
    {link: '/', name: 'Sobre Nós'},
]

</script>

<template>
        <motion.div class="bg-black/80 text-white absolute w-full rounded-b-2xl shadow-xl z-100"
            :initial="{ scale: 0, opacity: 0 }"
            :animate="{ scale: 1, opacity: 1 }"
            :transition="{ duration: 0.3 }"
        >
            <nav class="flex justify-between">
                <RouterLink to="/">
                    <img src="/images/logo-ghibli.png" alt="logo" class="w-15 h-20 ml-10 mt-0.5"></img>
                </RouterLink>
                <ul class="flex mr-10 mb-5 mt-5">
                    <li v-for="item of pages" :key="item" class="transition-all duration-500 rounded-2xl px-4 py-2 group">
                        <RouterLink class="link" :to="item.link">{{ item.name }}</RouterLink>
                        <div
                            class="h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                        ></div>
                    </li>
                </ul>
            </nav>
        </motion.div>
</template>
<style scoped>
    .bar:hover {
        animation: show-bar 1s ease-in;
    }
    
</style>