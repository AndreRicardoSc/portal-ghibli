<script setup>
    import {  motion } from 'motion-v';
    import ButtonComponent from './ButtonComponent.vue';
    const props = defineProps(['title', 'subtitle', 'buttonText']);

    const button = {
        text: 'Conheça os Filmes!',
        color: 'var(--pink)',
        link: '/'
    }
</script>
<template>
    <section 
        class="flex justify-center items-center w-screen h-screen bg-center bg-no-repeat bg-cover bg-[url('/images/banner/background-banner.png')] md:items-start md:justify-start md:pt-40 md:pl-10"
    >
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        <div class="flex flex-col items-center gap-10 z-10 md:items-start">
            <div class="text-center flex flex-col gap-2 md:text-start">
                <motion.h1 
                    class="font-bold text-5xl text-primary"
                    :initial="{ translateX: -100, opacity: 0 }"
                    :animate="{ translateX: 0, opacity: 1 }"
                    :transition="{ duration: 1, ease: 'anticipate' }"
                >
                    {{ props.title }}
                </motion.h1>
                <motion.p 
                    class="text-xl text-secondary"
                    :initial="{ translateX: -100, opacity: 0 }"
                    :animate="{ translateX: 0, opacity: 1 }"
                    :transition="{ duration: 1, ease: 'anticipate', delay: 0.5 }"
                >
                    {{ props.subtitle }}
                </motion.p>
            </div>
            <motion.div
                :initial="{ translateY: 20, opacity: 0 }"
                :animate="{ translateY: 0, opacity: 1 }"
                :transition="{ duration: 1, ease: 'anticipate', delay: 1 }"
            >
                <ButtonComponent
                    :button-text="button.text"
                    :color="button.color"
                    :link="button.link"
                />
            </motion.div>
        </div>
        <div 
            class="overflow-hidden"
        >
            <motion.img 
                class="w-200 absolute object-cover drop-shadow-2xl hidden md:block" src="/images/banner/ponyo.png" alt="ponyo"
                :initial="{ translateX: -300, translateY: -300, opacity: 0 }"
                :animate="{ translateX: -150, translateY: 20, opacity: 1 }"
                :transition="{ duration: 1.8, ease: [0.2, 1.25, 0.5, 1] }"
            />
            <motion.img 
                class="w-200 absolute object-cover drop-shadow-2xl hidden md:block" src="/images/banner/sosuke.png" alt="sosuke"
                :initial="{ translateX: 200, translateY: 200, opacity: 0 }"
                :animate="{ translateX: -70, translateY: 50, opacity: 1 }"
                :transition="{ duration: 1.8, ease: [0.2, 1.25, 0.5, 1] }"               
            />
        </div>
    </section>
</template>
