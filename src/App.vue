<script setup>
  import LoadingComponent from './components/LoadingComponent.vue';
  import { useLoadingStore } from './stores/loading';
  const loadingStore = useLoadingStore();
</script>
<template>
  <LoadingComponent v-if="loadingStore.isLoading"/>
  <RouterView/>
</template>
