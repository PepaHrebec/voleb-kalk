import { defineNuxtPlugin } from "#app";
import { useQuestionsStore } from "~/scripts/questionsStore";
import { useAnswersStore } from "~/scripts/answersStore";

export default defineNuxtPlugin(async () => {
  const questions = useQuestionsStore(useNuxtApp().$pinia);
  const answers = useAnswersStore(useNuxtApp().$pinia);

  await questions.fillQuestionsStore();
  await answers.fillAnswersStore();
});
