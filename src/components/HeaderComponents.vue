<script setup>
import { RouterLink } from 'vue-router';


const pages = [
    {link: '/', name: 'Início'},
    {link: '/', name: 'Filmes'},
    {link: '/', name: 'Elenco'},
    {link: '/', name: 'Sobre Nós'},
]

</script>

<template>
        <div class="bg-black/80 text-white m-10 rounded-4xl shadow-xl">
            <nav class="flex justify-between">
                <RouterLink to="/">
                    <img src="/images/logo-ghibli.png" alt="logo" class="w-15 h-20 ml-5 mt-0.5"></img>
                </RouterLink>
                <ul class="flex mr-30 mb-5 mt-5">
                    <li v-for="item of pages" :key="item" class="ml-17 transition-all duration-500 rounded-2xl pr-4 pl-4 pt-2 pb-2 group">
                        <RouterLink class="link" :to="item.link">{{ item.name }}</RouterLink>
                        <div
                            class="h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                        ></div>
                    </li>
                </ul>
            </nav>
        </div>
</template>
<style scoped>
    .bar:hover {
        animation: show-bar 1s ease-in;
    }
    
</style>