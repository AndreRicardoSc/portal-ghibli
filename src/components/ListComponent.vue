<script setup>
    import { onMounted } from 'vue';
    import PagesComponent from './PagesComponent.vue';
    import { useCastStore } from '../stores/cast';
    import { useGenreStore } from '../stores/genre';
    const genreStore = useGenreStore();
    const castStore = useCastStore();

    const props = defineProps({
        items: Array,
        card: {
            type: Object,
            required: true
        },
        mode: {
            type: String,
            required: true
        }
    });

    onMounted(() => {
        genreStore.getGenres();
    })
</script>
<template>
    
    <section class="flex flex-col items-center bg-[url('/images/banner/background-banner.png')] bg-no-repeat bg-fixed bg-cover rounded-2xl py-20">
        <ul v-if="items.length > 0" class="flex flex-col items-center justify-center gap-20 mb-10 md:flex-row md:flex-wrap md:gap-10 bg-[url('/images/banner/background-banner.png')] bg-no-repeat bg-fixed bg-cover">
            <li v-for="(item, index) in props.items" :key="index">
                <component :is="props.card" :item="item"/>
            </li>
        </ul>
        <section v-else
            class="flex flex-col items-center justify-center"
        >
            <h2 class="text-primary font-semibold text-4xl">Desculpe, nenhum item encontrado!</h2>
        </section>
        <PagesComponent v-if="items.length > 0 && props.mode == 'list'"/>
        <div v-else-if="props.mode == 'pass'" class="flex gap-5 bg-black/60 p-4 rounded-lg">
            <button class="text-2xl bg-pink px-4 py-3 rounded-full" @click="castStore.setPage(castStore.currentPage - 1)">
                <span class="mdi mdi-chevron-double-left"></span>
            </button>
            <div class="text-center text-white">
                <p class="text-2xl md:texl-lg">Página:</p>
                <p class="text-2xl md:text-lg">{{ castStore.currentPage }}</p>
            </div>
            <button class="text-2xl bg-pink px-4 py-3 rounded-full" @click="castStore.setPage(castStore.currentPage + 1)">
                <span class="mdi mdi-chevron-double-right"></span>
            </button>
        </div>
    </section>
</template>