<script setup lang="ts">
import ComparisonCard from "~/components/ComparisonCard.vue";
import { useQuestionsStore } from "~/scripts/questionsStore";

const questionsStore = useQuestionsStore();
const { questionsList } = storeToRefs(questionsStore);
</script>
<template>
  <h2>Souhrn</h2>
  <div class="summary-card-wrap">
    <ComparisonCard
      v-for="(question, index) in questionsList"
      :question-number="index + 1"
      :question="question"
      :questions-length="questionsList?.length"
    />
  </div>
</template>
<style scoped>
.summary-card-wrap {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 12px;
  padding-bottom: 24px;
}
a {
  width: 90%;
}
</style>
