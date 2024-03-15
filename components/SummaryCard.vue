<script setup lang="ts">
import { useAnswersStore } from "~/scripts/answersStore";
import type { Question } from "~/types/types";

defineProps<{
  question: Question;
  questionNumber: number;
  questionsLength: number | undefined;
}>();

const templateText = [
  "Nezodpovězeno",
  "Silně ano",
  "Ano",
  "Nevím",
  "Ne",
  "Silně ne",
];

const answersStore = useAnswersStore();
const { setAnswer } = answersStore;

const { answersList } = storeToRefs(answersStore);

const dropdown = ref(false);
</script>
<template>
  <div class="summary-wrap">
    <div class="top">
      <div class="question-number">
        {{ questionNumber }} / {{ questionsLength }}
      </div>
      <h3>
        <NuxtLink :to="`/kalkulacka/otazky/${questionNumber}`" class="title">{{
          question.title
        }}</NuxtLink>
      </h3>
      <div>
        Odpověď:
        {{
          answersList !== undefined
            ? templateText[answersList[questionNumber - 1]]
            : "Nezodpovězeno"
        }}
      </div>
    </div>
    <div class="dropdown-wrap">
      <Transition name="show">
        <div class="btns" v-if="dropdown">
          <AnswerButtons
            :answer-value="
              answersList !== undefined ? answersList[questionNumber - 1] : 0
            "
            @send-value="(value) => setAnswer(questionNumber - 1, value)"
          />
        </div>
      </Transition>
      <div>
        <button @click="dropdown = !dropdown" class="dropdown-btn">
          {{ dropdown ? "Schovat výběr" : "Změnit odpověď" }}
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.top {
  padding: 12px;
}

.dropdown-wrap {
  border-radius: 0 0 12px 12px;
}

.summary-wrap {
  background-color: white;
  border: solid 1px rgb(201, 201, 201);
  box-shadow: 11px 10px 12px -4px rgba(224, 224, 224, 1);
  width: 100%;
  max-width: 630px;
  border-radius: 12px;
}

.btns {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding: 12px 0;
}

.title {
  font-size: 1.1em;
  text-decoration: none;
  color: black;
}

h3 {
  padding: 12px 0 4px;
}

.question-number {
  color: var(--text-gray);
}

.dropdown-btn {
  width: 100%;
  border: none;
  border-radius: 0 0 12px 12px;
  padding: 12px;
  font-size: 1.1em;
  cursor: pointer;
}

.show-enter-active,
.show-leave-active {
  transition: opacity 0.2s ease;
}

.show-enter-from,
.show-leave-to {
  opacity: 0;
}
</style>
