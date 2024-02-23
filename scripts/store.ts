import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const list = ref([0, 0, 0, 0, 0, 0]);

  return { list };
});
