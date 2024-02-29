import { defineStore } from "pinia";
import type { ParsedQuestions, Question } from "~/types/types";

export const useQuestionsStore = defineStore("questions", () => {
  let questionsList = ref<Question[] | undefined>([]);

  async function fillQuestionsStore() {
    const { data } = await useAsyncData("questionsData", () =>
      queryContent<ParsedQuestions>("/questions").findOne()
    );
    questionsList.value = data.value?.questions;
  }

  return { questionsList, fillQuestionsStore };
});
