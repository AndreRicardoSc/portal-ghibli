<script setup>
    const props = defineProps(['title', 'subtitle', 'buttonText'])
</script>
<template>
    <section 
        class="flex flex-col justify-center items-center gap-10 w-screen h-screen bg-center bg-no-repeat bg-cover bg-[url('/images/banner/background-banner.png')]"
    >
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white/60"></div>
        <div class="text-center flex flex-col gap-2">
            <h1 class="text-5xl">{{ props.title }}</h1>
            <p class="text-xl text-black/70">{{ props.subtitle }}</p>
        </div>
        <button class="text-2xl bg-pink-500 py-2 px-4 rounded-2xl max-w-70">{{ props.buttonText }}</button>
    </section>
</template>
