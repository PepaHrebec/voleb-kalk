<script setup lang="ts">
import { useAnswersStore } from "~/scripts/answersStore";
import { useQuestionsStore } from "~/scripts/questionsStore";

const questionsStore = useQuestionsStore();
const { questionsList } = storeToRefs(questionsStore);

const answersStore = useAnswersStore();
const { answersList } = storeToRefs(answersStore);
const { importantList } = storeToRefs(answersStore);

const route = useRoute();

function answerAndRoute(answerValue: number) {
  answersStore.setAnswer(currentQuestionNum.value - 1, answerValue);
  setTimeout(async () => {
    await useRouter().push(
      currentQuestionNum.value !== questionsList.value?.length
        ? `/kalkulacka/otazky/${currentQuestionNum.value + 1}`
        : "/kalkulacka/otazky/souhrn"
    );
  }, 0);
}

const currentQuestionNum = computed(() => {
  return Number(route.params.id);
});

const currentAnswerValue = computed(() => {
  if (answersList.value !== undefined) {
    return answersList.value[currentQuestionNum.value - 1];
  }
  return 0;
});

const questionTitle = computed(() => {
  return questionsList.value !== undefined
    ? questionsList.value[currentQuestionNum.value - 1].title
    : ``;
});

useHead({
  title: `Otázka ${currentQuestionNum.value}`,
});
</script>

<template>
  <div class="question-wrap">
    <QuestionCard
      :text="
        questionsList !== undefined
          ? questionsList[currentQuestionNum - 1].description
          : ''
      "
      :title="questionTitle"
      :current-question-num="currentQuestionNum"
      :list-length="questionsList?.length"
      :is-intro="false"
      :important-list="importantList"
    />
    <AnswerButtons
      @send-value="answerAndRoute"
      :answer-value="currentAnswerValue"
    />
  </div>
</template>

<style scoped>
.question-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
