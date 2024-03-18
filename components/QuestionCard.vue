<script setup lang="ts">
defineProps<{
  title: string;
  isIntro: boolean;
  text: string;
  importantList?: boolean[] | undefined;
  currentQuestionNum?: number;
  listLength?: number;
}>();
</script>

<template>
  <main>
    <div class="top-wrap">
      <p>{{ currentQuestionNum }} / {{ listLength }}</p>
      <h1>{{ title }}</h1>
      <p>
        {{ text }}
      </p>
    </div>
    <div class="bottom-wrap">
      <QuestionNavButtons
        v-if="!isIntro"
        :current-question-num="currentQuestionNum"
        :list-length="listLength"
        :important-list="importantList"
        @sendValue="(value) => console.log(value)"
      />
    </div>
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
  max-width: 730px;
}

.top-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

h1 {
  font-size: 1.3em;
}

p {
  color: var(--text-gray);
  line-height: 1.4;
}
</style>
