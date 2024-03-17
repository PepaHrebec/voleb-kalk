<script setup lang="ts">
import useResult from "~/composables/useResult";
import { useQuestionsStore } from "~/scripts/questionsStore";

useHead({
  title: "Souhrn",
});

const trye = await useResult();

console.log(trye);

const questionsStore = useQuestionsStore();
const { questionsList } = storeToRefs(questionsStore);
</script>
<template>
  <h2>Souhrn</h2>
  <div class="summary-card-wrap">
    <SummaryCard
      v-for="(question, index) in questionsList"
      :question-number="index + 1"
      :question="question"
      :questions-length="questionsList?.length"
    />
  </div>
  <div class="bottom">
    <WarningCard
      title="Varování"
      content='Po odeslání budou Vaše nezodpovězené otázky počítány jako "Nevím". Zkontrolujte si, jestli jste nějaké neopomněl.'
    />
    <NuxtLink to="/kalkulacka/vysledek">
      <PrimaryButton content="Vyhodnotit" />
    </NuxtLink>
  </div>
</template>
<style scoped>
.summary-card-wrap {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 12px;
  padding-bottom: 24px;
  align-items: center;
}
.bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 24px;
  max-width: 630px;
  margin: 0 auto;
}
a {
  width: 100%;
}
</style>
