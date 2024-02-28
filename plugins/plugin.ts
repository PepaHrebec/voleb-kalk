import { defineNuxtPlugin } from "#app";
import { useAnswersStore, useQuestionsStore } from "~/scripts/store";

export default defineNuxtPlugin(async () => {
  const questions = useQuestionsStore(useNuxtApp().$pinia);
  const answers = useAnswersStore(useNuxtApp().$pinia);

  await answers.fillStore();
  await questions.fillStore();
});
