<script setup>
  import HeaderComponents from './components/HeaderComponents.vue';
</script>
<template>
  <header class="relative">
    <HeaderComponents/>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

