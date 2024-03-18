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
const { importantList } = storeToRefs(answersStore);

const dropdown = ref(false);
</script>
<template>
  <div class="summary-wrap">
    <div class="top">
      <div class="upper-row">
        <div class="question-number">
          {{ questionNumber }} / {{ questionsLength }}
        </div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="star star-top"
          v-if="
            importantList !== undefined
              ? importantList[questionNumber - 1]
              : false
          "
        >
          <path
            fill="currentColor"
            d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
          />
        </svg>
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
          <StarButton
            :important-list="importantList"
            :question-number="questionNumber"
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

.upper-row {
  display: flex;
  flex-direction: row;
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
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 12px 0 24px;
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

.star {
  transform: scale(1.2);
  color: var(--primary-blue);
  cursor: pointer;
}

.star-top {
  height: 1em;
  transform: translateY(2px);
}
</style>
