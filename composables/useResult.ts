import { useAnswersStore } from "~/scripts/answersStore";
import type { ParsedAnswers } from "~/types/types";

function innerCalculation(partyAns: number, userAns: number) {
  if (partyAns === 5 || userAns === 5 || partyAns === 1 || userAns === 1) {
    if (Math.abs(partyAns - userAns) === 1) {
      return 0.5;
    }
  }
  if (partyAns === 3 || userAns === 3) {
    return Math.abs(partyAns - userAns) / 2;
  }

  return Math.abs(partyAns - userAns);
}

export default async function useResult() {
  const partyAnswersData = await useAsyncData("partyAnswersData", () =>
    queryContent<ParsedAnswers>("/answers").findOne()
  );

  const answersStore = useAnswersStore();
  const { answersList } = storeToRefs(answersStore);

  const resultArr: { shortcut: string; value: number }[] = [];

  if (partyAnswersData.data.value == undefined) {
    return null;
  }

  answersList.value?.forEach((value) => {
    value === 0 ? 3 : value;
  });

  partyAnswersData.data.value.answers.forEach((partyData) => {
    const value = partyData.partyAnswers.reduce((acc, curr, index) => {
      const userValue =
        answersList.value !== undefined ? answersList.value[index] : 3;
      return acc + innerCalculation(curr, userValue);
    }, 0);
    resultArr.push({
      shortcut: partyData.shortcut,
      value: value,
    });
  });

  return resultArr.sort((a, b) => {
    return a.value - b.value;
  });
}
