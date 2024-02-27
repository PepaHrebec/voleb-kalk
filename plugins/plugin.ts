import { defineNuxtPlugin } from "#app";
import { useQuestionsStore } from "~/scripts/store";

export default defineNuxtPlugin(async () => {
  const todos = useQuestionsStore(useNuxtApp().$pinia);

  await todos.fillStore();
});
