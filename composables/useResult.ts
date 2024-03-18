import { useAnswersStore } from "~/scripts/answersStore";
import type { ParsedAnswers } from "~/types/types";

function innerCalculation(
  partyAns: number,
  userAns: number,
  isImportant: boolean
) {
  if (partyAns === 5 || userAns === 5 || partyAns === 1 || userAns === 1) {
    if (Math.abs(partyAns - userAns) === 1) {
      return isImportant ? 0.25 * 2 : 0.25;
    }
  }

  if (userAns === 3 && (partyAns === 5 || partyAns === 1)) {
    return isImportant
      ? Math.abs(partyAns - userAns) * 2
      : Math.abs(partyAns - userAns);
  }

  if (userAns === 3) {
    return isImportant
      ? (Math.abs(partyAns - userAns) / 3) * 4 * 2
      : (Math.abs(partyAns - userAns) / 3) * 4;
  }

  return isImportant
    ? Math.abs(partyAns - userAns) * 2
    : Math.abs(partyAns - userAns);
}

export default async function useResult() {
  const partyAnswersData = await useAsyncData("partyAnswersData", () =>
    queryContent<ParsedAnswers>("/answers").findOne()
  );

  const answersStore = useAnswersStore();
  const { answersList, importantList } = storeToRefs(answersStore);

  const resultArr: {
    shortcut: string;
    value: number;
    name: string;
    percentage: number;
  }[] = [];

  if (partyAnswersData.data.value == undefined) {
    return null;
  }

  // turns "unanswered" into "do not know"
  answersList.value?.forEach((value, index) => {
    if (answersList.value !== undefined) {
      value === 0 ? (answersList.value[index] = 3) : null;
    }
  });

  // counts the amount of "important" answers
  let importantCount = 0;
  importantList.value?.forEach((curr) => {
    if (curr) {
      importantCount++;
    }
  });

  // goes through every party dataset and compares every users answer
  // with every party answer
  partyAnswersData.data.value.answers.forEach((partyData) => {
    const value = partyData.partyAnswers.reduce((acc, curr, index) => {
      const userValue =
        answersList.value !== undefined ? answersList.value[index] : 3;
      const isImportant =
        importantList.value !== undefined ? importantList.value[index] : false;
      return acc + innerCalculation(curr, userValue, isImportant);
    }, 0);
    // percentage is calculated as users score divided by the greatest possible score
    // this is then subtracted from 100 to get the percentage
    resultArr.push({
      shortcut: partyData.shortcut,
      name: partyData.name,
      value: value,
      percentage:
        answersList.value?.length !== undefined
          ? 100 -
            value / (((answersList.value?.length + importantCount) * 4) / 100)
          : 0,
    });
  });

  return resultArr.sort((a, b) => {
    return a.value - b.value;
  });
}
