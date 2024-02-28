import { defineStore } from "pinia";
import type { ParsedQuestions, Question } from "~/types/types";

export const useQuestionsStore = defineStore("questions", () => {
  let questionsList = ref<Question[] | undefined>([]);

  async function fillStore() {
    const { data } = await useAsyncData("questionsData", () =>
      queryContent<ParsedQuestions>("/questions").findOne()
    );
    questionsList.value = data.value?.questions;
  }

  return { questionsList, fillStore };
});

export const useAnswersStore = defineStore("answers", () => {
  let answersList = ref<number[] | undefined>([]);

  async function fillStore() {
    const { data } = await useAsyncData("answersData", () =>
      queryContent<ParsedQuestions>("/questions").findOne()
    );
    for (let i = 0; i < (data.value?.questions.length ?? 0); i++) {
      if (
        (answersList.value?.length ?? 0) < (data.value?.questions.length ?? 0)
      ) {
        answersList.value?.push(i);
      }
    }
  }

  return { answersList, fillStore };
});
