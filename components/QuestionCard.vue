<script setup lang="ts">
const props = defineProps<{
  title: string;
  currentQuestionNum?: number;
  listLength?: number;
  isIntro: boolean;
}>();
</script>

<template>
  <main>
    <p>{{ currentQuestionNum }} / {{ listLength }}</p>
    <h1>{{ title }}</h1>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text
    </p>

    <QuestionNavButtons
      v-if="!isIntro"
      :current-question-num="currentQuestionNum"
      :list-length="listLength"
    />
  </main>
</template>

<style scoped>
main {
  width: auto;
  border-radius: 8px;
  padding: 32px;
  background-color: white;
  min-height: 50vh;
  border: solid 1px rgb(201, 201, 201);
  box-shadow: 11px 10px 12px -4px rgba(224, 224, 224, 1);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

h1 {
  font-size: 1.3em;
}

p {
  color: var(--text-gray);
}
</style>
