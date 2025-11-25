<script setup>
    const icons = [
        { class: 'mdi mdi-instagram'},
        { class: 'mdi mdi-whatsapp'},
        { class: 'mdi mdi-linkedin'},
    ]
</script>
<template>
    <div class="bg-black/80 text-white rounded-t-4xl mt-20">
        <ul class="flex justify-center text-4xl mb-6 pt-10 gap-5">
            <li v-for="icon in icons">
                <span :class="icon.class"></span>
            </li>
        </ul>
        <div class="flex flex-col items-center w-full border-t py-10 md:flex-row md:justify-center md:gap-4">
            <p class="mt-3 mb-3">Copyright  &copy;2025</p>
            <p>Todos os direitos reservados.</p>
        </div>
    </div>
</template>