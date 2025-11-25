<script setup>
    import { onMounted } from 'vue';
    import TopPageComponent from '../components/TopPageComponent.vue';
    import ListComponent from '../components/ListComponent.vue';
    import CastCard from '../components/CastCard.vue';

    import { useCastStore } from '../stores/cast';
    const castStore = useCastStore();

    onMounted(async() => {
        await castStore.getCast();
        console.log(castStore.people)
    })
</script>

<template>
    <TopPageComponent
        title="Catálogo de Elenco"
        icon="mdi mdi-star-outline"
        subtitle="Conheça todos os reais protagonistas dessas histórias incríveis criadas e que merecem total reconhecimento por seu árduo trabalho."
    />
    <ListComponent
        :items="castStore.paginatedPeople"
        :card="CastCard"
        mode="pass"
    />
</template>