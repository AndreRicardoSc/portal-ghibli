<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();

    const props = defineProps({
        movie: Object,
    });

    const year = new Date(props.movie.release_date).getFullYear();
</script>

<template>
    <div class="relative rounded-lg px-5 pb-10 hover:shadow-xl hover:translate-x-10 transition-all duration-200 cursor-pointer">
      <div class="w-4 h-4 bg-blue-300 rounded-full absolute -left-[34px] top-1"></div>
      <p class="text-sm text-cyan-500">{{ year }}</p>
      <h3 class="text-xl font-semibold text-slate-700 ml-5">{{ props.movie.title }}</h3>
        <p class=" ml-5">{{ props.movie.overview }}</p>
    </div>
</template>