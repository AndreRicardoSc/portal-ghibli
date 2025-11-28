import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useLoadingStore = defineStore("loading", () => {

  const state = reactive({
    isLoading: false,
  });

  const isLoading = computed(() => state.isLoading);

  const setLoading = (value) => {
    state.isLoading = value;
  };

  return {
    isLoading,
    setLoading,
  };
});