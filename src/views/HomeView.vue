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
    import CharactersComponent from '../components/CharactersComponent.vue';

    const banner = {
        title: 'Descubra o Universo Ghibli',
        subtitle: 'Conheça as obras do estúdio que marcou gerações de pessoas de todas as idades',
        buttonText: 'Conheça os Filmes!'
    }

    const characters = [
        {
            movieId: 12429,
            name: 'Ponyo',
            description: 'Ela é uma pequena criatura mágica semelhante a um peixe-dourado, filha de uma deusa do mar e de um feiticeiro humano.',
            image: '/images/home/ponyo.png',
            backgroundColor: '#B4E8FF',
        },
        {
            movieId: 8392,
            name: 'Totoro',
            description: 'Totoro é uma criatura mágica e gentil que vive na floresta. Grande, peludo e com aparência fofa, ele simboliza a natureza, a imaginação e o conforto infantil.',
            image: '/images/home/totoro.png',
            backgroundColor: '#D8E6CA',
        },
        {
            movieId: 129,
            name: 'Haku',
            description: 'Haku é um garoto misterioso, que também possui a forma de um dragão branco. Inteligente, leal e enigmático.',
            image: '/images/home/haku.png',
            backgroundColor: '#F0F6FF',
        },
    ]
</script>
<template>
    <BannerComponent
        :title="banner.title"
        :subtitle="banner.subtitle"
        :button-text="banner.buttonText"
    />
    <section class="flex flex-col items-center gap-20 my-20">
        <h2 class="text-4xl font-bold text-primary">Personagens Icônicos</h2>
        <ul class="w-full flex justify-around">
            <li v-for="character in characters" :key="character.movieId">
                <CharactersComponent :character="character" />
            </li>
        </ul>
    </section>
</template>