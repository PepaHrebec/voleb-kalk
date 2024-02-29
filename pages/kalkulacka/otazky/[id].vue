<script setup lang="ts">
import { useAnswersStore } from "~/scripts/answersStore";
import { useQuestionsStore } from "~/scripts/questionsStore";

const questionsStore = useQuestionsStore();
const { questionsList } = storeToRefs(questionsStore);

const answersStore = useAnswersStore();
const { answersList } = storeToRefs(answersStore);

const route = useRoute();

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
</script>

<template>
  <div class="question-wrap">
    <QuestionCard
      :title="questionTitle"
      :current-question-num="currentQuestionNum"
      :list-length="questionsList?.length"
      :is-intro="false"
    />
    <AnswerButtons
      @send-value="
        (value) => answersStore.setAnswer(currentQuestionNum - 1, value)
      "
      :answer-value="currentAnswerValue"
    />
  </div>
</template>

<style scoped>
.question-wrap {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
