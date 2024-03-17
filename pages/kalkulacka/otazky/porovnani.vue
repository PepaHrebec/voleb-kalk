<script setup lang="ts">
import ComparisonCard from "~/components/ComparisonCard.vue";
import { useQuestionsStore } from "~/scripts/questionsStore";

useHead({
  title: "Porovnání",
});

const questionsStore = useQuestionsStore();
const { questionsList } = storeToRefs(questionsStore);
</script>
<template>
  <h2>Porovnání Vašich otázek se stranami</h2>
  <div class="summary-card-wrap">
    <ComparisonCard
      v-for="(question, index) in questionsList"
      :question-number="index + 1"
      :question="question"
      :questions-length="questionsList?.length"
    />
    <NuxtLink to="/kalkulacka/vysledek">
      <PrimaryButton content="Zpět na výsledky" />
    </NuxtLink>
  </div>
</template>
<style scoped>
.summary-card-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 12px;
  padding-bottom: 24px;
}
a {
  padding: 24px 0;
  width: 100%;
  max-width: 630px;
}
</style>
