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
    const banner = {
        title: 'Descubra o Universo Ghibli',
        subtitle: 'Conheça as obras do estúdio que marcou gerações de pessoas de todas as idades',
        buttonText: 'Conheça os Filmes!'
    }

    const characters = [
        {
            name: 'Ponyo',
            description: 'Ela é uma pequena criatura mágica semelhante a um peixe-dourado, filha de uma deusa do mar e de um feiticeiro humano.',
            image: '/images/banner/ponyo.jpg'
        },
        {
            name: 'Totoro',
            description: 'Totoro é uma criatura mágica e gentil que vive na floresta. Grande, peludo e com aparência fofa, ele simboliza a natureza, a imaginação e o conforto infantil.',
            image: '/images/banner/totoro.jpg'
        },
        {
            name: 'Kiki',
            description: 'Kiki é uma jovem bruxa que se muda para uma cidade para começar sua vida como entregadora de cartas. Ela é independente, corajosa e cheia de personalidade.',
            image: '/images/banner/kiki.jpg'
        },
    ]
</script>
<template>
    <BannerComponent
        :title="banner.title"
        :subtitle="banner.subtitle"
        :button-text="banner.buttonText"
    />
    <div>
        <h1 class=" text-secondary ml-10 font-bold text-4xl mb-16">Personagens Icônicos</h1>
        <ul class="flex justify-center">
            <li class="flex flex-col items-center">
                <p class="bg-blue-300 p-1.5 rounded-2xl"><img src="/images/banner/CharacterPonyo.jpg" alt="Ponyo" class="rounded-2xl"></p>
                <p class="text-2xl mb-2 font-bold text-secondary">Ponyo</p>
                <p>Ela é uma pequena criatura mágica semelhante a um peixe-dourado, filha de uma deusa do mar e de um feiticeiro humano.</p>
            </li>
            <li class="flex flex-col items-center">
                <p class="bg-blue-300 p-1.5 rounded-2xl"><img src="/images/banner/TOTORO.jpg" alt="Totoro" class="rounded-2xl"></p>
                <p class="text-2xl mb-2 font-bold text-secondary">Totoro</p>
                <p>Totoro é uma criatura mágica e gentil que vive na floresta. Grande, peludo e com aparência fofa, ele simboliza a natureza, a imaginação e o conforto infantil.</p>
            </li>
            <li class="flex flex-col items-center">
                <p class="bg-blue-300 p-1.5 rounded-2xl"><img src="/images/banner/haku.jpg" alt="Haku" class="rounded-2xl"></p>
                <p class="text-2xl mb-2 font-bold text-secondary">Haku</p>
                <p>Haku é um garoto misterioso, que também possui a forma de um dragão branco. Inteligente, leal e enigmático.</p>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    ul li img{
        width: 120px;
        height: 160px;
    }
    ul li{
        background-color: rgb(192, 221, 240);
        margin: 10px 30px 10px 30px;
        border-radius: 30px;
        width: 400px;
        padding-top: 20px;
        padding-bottom: 30px;
    }
    ul li p{
        text-align: center;
    }
</style>