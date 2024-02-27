import { defineStore } from "pinia";
import type { ParsedQuestions, Question } from "~/types/types";

export const useQuestionsStore = defineStore("questions", () => {
  let list = ref<Question[] | undefined>([]);

  async function fillStore() {
    const { data } = await useAsyncData("home", () =>
      queryContent<ParsedQuestions>("/questions").findOne()
    );
    list.value = data.value?.questions;
  }

  return { list, fillStore };
});
