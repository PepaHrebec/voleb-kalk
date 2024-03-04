<script setup lang="ts">
import { useAnswersStore } from "~/scripts/answersStore";
import type { Question } from "~/types/types";

defineProps<{
  question: Question;
  questionNumber: number;
}>();

const answersStore = useAnswersStore();
const { answersList } = storeToRefs(answersStore);
</script>
<template></template>
<style scoped></style>
