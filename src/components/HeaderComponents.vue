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
                <h1 class="mt-5 mb-5 ml-10"><RouterLink to="/">Ghibli</RouterLink></h1>
                <ul class="flex mr-30 mb-5 mt-5">
                    <li v-for="item of pages" :key="item" class="ml-17 hover:opacity-50 transition-all duration-500 bg-zinc-800 rounded-2xl pr-4 pl-4 pt-1 pb-1">
                        <RouterLink :to="item.link">{{ item.name }}</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
</template>