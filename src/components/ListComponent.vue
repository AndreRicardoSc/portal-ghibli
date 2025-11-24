<script setup>
    import { onMounted } from 'vue';
    import { useGenreStore } from '../stores/genre';
    import PagesComponent from './PagesComponent.vue';
    const genreStore = useGenreStore();

    const props = defineProps({
        items: Array,
        card: {
            type: Object,
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
        <PagesComponent v-if="items.length > 0"/>
    </section>
</template>