import { useAnswersStore } from "~/scripts/answersStore";
import type { ParsedAnswers } from "~/types/types";

function innerCalculation(partyAns: number, userAns: number) {
  if (partyAns === 5 || userAns === 5 || partyAns === 1 || userAns === 1) {
    if (Math.abs(partyAns - userAns) === 1) {
      return 0.25;
    }
  }
  if (userAns === 3) {
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

  const resultArr: {
    shortcut: string;
    value: number;
    name: string;
    percentage: number;
  }[] = [];

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
      name: partyData.name,
      value: value,
      percentage:
        answersList.value?.length !== undefined
          ? 100 - value / ((answersList.value?.length * 4) / 100)
          : 0,
    });
  });

  return resultArr.sort((a, b) => {
    return a.value - b.value;
  });
}
