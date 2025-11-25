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
</script>
<template>
    <BannerComponent
        :title="banner.title"
        :subtitle="banner.subtitle"
        :button-text="banner.buttonText"
    />
    <div class="bg-blue-100">
        <h1 class="text-center text-2xl mb-16">Personagens Icônicos</h1>
        <ul class="flex justify-center">
            <li class="flex flex-col items-center">
                <img src="/images/banner/CharacterPonyo.jpg" alt="" class="rounded-2xl">
                <p class="text-2xl">Ponyo</p>
                <p>Ela é uma pequena criatura mágica semelhante a um peixe-dourado, filha de uma deusa do mar e de um feiticeiro humano</p>
            </li>
            <li class="flex flex-col items-center">
                <img src="/images/banner/TOTORO.jpg" alt="" class="rounded-2xl">
                <p class="text-2xl">Totoro</p>
                <p>Totoro é uma criatura mágica e gentil que vive na floresta. Grande, peludo e com aparência fofa, ele simboliza a natureza, a imaginação e o conforto infantil</p>
            </li>
            <li class="flex flex-col items-center">
                <img src="/images/banner/haku.jpg" alt="" class="rounded-2xl">
                <p class="text-2xl">Haku</p>
                <p>Haku é um garoto misterioso do filme A Viagem de Chihiro, que também possui a forma de um dragão branco. Inteligente, leal e enigmático.</p>
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
        background-color: lightskyblue;
        margin: 10px 10px 10px 10px;
        border-radius: 30px;
        width: 400px;
        padding-top: 20px;
        padding-bottom: 30px;
    }
    ul li p{
        text-align: center;
    }
</style>