import type { ParsedQuestions } from "~/types/types";

export const useAnswersStore = defineStore("answers", () => {
  let answersList = ref<number[] | undefined>([]);
  let importantList = ref<boolean[] | undefined>([]);
  let viewedResults = ref<boolean>(false);

  function setAnswer(answerPosition: number, answerValue: number) {
    if (answersList.value !== undefined) {
      answersList.value[answerPosition] = answerValue;
    }
    console.log(answersList.value);
  }

  async function fillAnswersStore() {
    const { data } = await useAsyncData("questionsData", () =>
      queryContent<ParsedQuestions>("/questions").findOne()
    );
    for (let i = 0; i < (data.value?.questions.length ?? 0); i++) {
      if (
        (answersList.value?.length ?? 0) < (data.value?.questions.length ?? 0)
      ) {
        answersList.value?.push(0);
        importantList.value?.push(false);
      }
    }
  }

  return {
    answersList,
    importantList,
    viewedResults,
    fillAnswersStore,
    setAnswer,
  };
});
