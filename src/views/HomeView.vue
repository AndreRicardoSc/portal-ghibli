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
    <div class="max-w-2xl mx-auto py-10 ">
  <h2 class="text-3xl font-bold text-center mb-10 text-secondary">
    Linha do Tempo — Obras Mais Relevantes
  </h2>
  <div class="border-l-4 border-blue-300 pl-6 space-y-8">
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">1986</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">O Castelo no Céu</h3>
      <p class=" ml-5">A aventura que consolidou o DNA Ghibli: céu, máquinas, inocência e tempestade.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">1988</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">Meu Amigo Totoro</h3>
      <p class=" ml-5">O guardião fofamente colossal que virou a própria face do estúdio.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">1989</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">Kiki — A Aprendiz de Feiticeira</h3>
      <p class=" ml-5">Um voo suave sobre amadurecimento, solidão e descobertas — Ghibli em estado puro.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">1991</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">Only Yesterday</h3>
      <p class=" ml-5">Um mergulho quieto na vida adulta; memória que respira como campo ao entardecer.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">1992</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">Porco Rosso</h3>
      <p class=" ml-5">Um piloto amaldiçoado e charmoso — o Ghibli mais adulto daquela década.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">1993</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">Ocean Waves</h3>
      <p class=" ml-5">Um estudo juvenil de sentimentos, simples e real como verão nublado.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">1994</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">Pom Poko</h3>
      <p class=" ml-5">Tanukis guerreiros em defesa da natureza — sátira, caos e poesia.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">1995</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">Sussurros do Coração</h3>
      <p class=" ml-5">Primeiro amor embalado por violões, sonhos e coragem de criar.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">1997</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">Princesa Mononoke</h3>
      <p class=" ml-5">Um trovão épico: natureza vs. ganância — talvez o filme mais denso da casa.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">1999</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">Meus Vizinhos, os Yamadas</h3>
      <p class=" ml-5">Humor minimalista, pincelado como tirinhas vivas.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">2001</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">A Viagem de Chihiro</h3>
      <p class=" ml-5">O portal definitivo: fantasia, espírito e amadurecimento. O monumento Ghibli.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">2002</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">O Reino dos Gatos</h3>
      <p class=" ml-5">Um passeio leve pelo absurdo felino — divertido e mágico.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">2004</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">O Castelo Animado</h3>
      <p class=" ml-5">Romance, guerra e metamorfoses — uma casa que anda e um coração que acorda.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">2006</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">Contos de Terramar</h3>
      <p class=" ml-5">Uma jornada sombria sobre equilíbrio e identidade.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">2008</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">Ponyo</h3>
      <p class=" ml-5">Um oceano alegre que transborda vida — um tsunami de carinho animado.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">2010</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">O Mundo dos Pequeninos (Arrietty)</h3>
      <p class=" ml-5">Um respiro doce: miniaturas, jardins e amizade frágil como pétala.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">2011</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">Da Colina Kokuriko</h3>
      <p class=" ml-5">Juventude, nostalgia e manhãs com cheiro de papel antigo.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">2013</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">Vidas ao Vento</h3>
      <p class=" ml-5">A história de um sonhador que construiu aviões e pagou um preço emocional por isso.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">2014</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">As Memórias de Marnie</h3>
      <p class=" ml-5">Um laço delicado feito de mistério, solidão e cura.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">2020</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">Aya e a Bruxa</h3>
      <p class=" ml-5">Uma virada ousada para o 3D — um experimento incomum.</p>
    </div>
    <div class="relative">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">2023</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">O Menino e a Garça</h3>
      <p class=" ml-5">Miyazaki retornando com uma história sobre perda, legado e mundos que se dobram como vento.</p>
    </div>

  </div>
</div>

</template>
