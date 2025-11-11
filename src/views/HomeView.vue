<script setup>
    //EXEMPLO PARA PÁGINA DE ELENCO
    // const peopleDetails = ref([]);
    // onMounted( async() => {
    //     await castStore.getCast();

    //     const details = await Promise.all(
    //         castStore.people.map(id =>  castStore.getDetail(id))
    //     );

    //     peopleDetails.value = details;
    // })
    import BannerComponent from '../components/BannerComponent.vue';
</script>
<template>
    <BannerComponent
        :title="'Descubra o Universo Ghibli'"
        :subtitle="'Conheça as obras do estúdio que marcou gerações de pessoas de todas as idades'"
        :button-text="'Vamos conhecer os filmes!'"
    />
</template>