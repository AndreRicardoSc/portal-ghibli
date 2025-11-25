<script setup>
  import HeaderComponents from './components/HeaderComponents.vue';
  import FooterComponents from './components/FooterComponents.vue';
</script>
<template>
  <header>
    <HeaderComponents/>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <FooterComponents/>
  </footer>
</template>
