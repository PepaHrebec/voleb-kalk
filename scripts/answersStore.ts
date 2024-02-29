import type { ParsedQuestions } from "~/types/types";

export const useAnswersStore = defineStore("answers", () => {
  let answersList = ref<number[] | undefined>([]);

  function setAnswer(answerPosition: number, answerValue: number) {
    if (answersList.value !== undefined) {
      answersList.value[answerPosition] = answerValue;
    }
    console.log(answersList.value);
  }

  async function fillAnswersStore() {
    const { data } = await useAsyncData("answersData", () =>
      queryContent<ParsedQuestions>("/questions").findOne()
    );
    for (let i = 0; i < (data.value?.questions.length ?? 0); i++) {
      if (
        (answersList.value?.length ?? 0) < (data.value?.questions.length ?? 0)
      ) {
        answersList.value?.push(0);
      }
    }
  }

  return { answersList, fillAnswersStore, setAnswer };
});
