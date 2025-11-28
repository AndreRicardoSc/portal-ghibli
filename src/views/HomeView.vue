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
    import { onMounted } from 'vue';
    import BannerComponent from '../components/BannerComponent.vue';
    import TimeLineComponent from '../components/TimeLineComponent.vue';
    import { useMovieStore } from '../stores/movie';
    const movieStore = useMovieStore();

    const banner = {
        title: 'Descubra o Universo Ghibli',
        subtitle: 'Conheça as obras do estúdio que marcou gerações de pessoas de todas as idades',
        buttonText: 'Conheça os Filmes!'
    }

    onMounted(async() => {
        await movieStore.getMovieTimeLine();
    })
</script>
<template>
    <BannerComponent
        :title="banner.title"
        :subtitle="banner.subtitle"
        :button-text="banner.buttonText"
    />
    <div class="max-w-2xl mx-auto py-10 ">
    <h2 class="text-3xl font-bold text-center mb-10 text-secondary">
        Linha do Tempo — Obras Mais Relevantes
    </h2>
    <div class="border-l-4 border-blue-300 pl-6 space-y-8">
        
        <TimeLineComponent
            v-for="movie in movieStore.movies"
            :key="movie.id"
            :movie="movie"
        />

    </div>
</div>

</template>
