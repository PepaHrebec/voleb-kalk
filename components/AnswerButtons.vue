<script setup lang="ts">
defineProps<{
  answerValue: number;
}>();

const templateText = ["Silně ano", "Ano", "Nevím", "Ne", "Silně ne"];
</script>

<template>
  <div class="answer-btns-wrap">
    <AnswerBtn
      v-for="(text, index) in templateText"
      @send-value="(value) => $emit('sendValue', value)"
      :text="text"
      :clickedValue="index + 1"
      :alreadyAnsweredValue="answerValue"
      :class="index === 2 ? `middle` : ``"
    />
  </div>
</template>

<style scoped>
.answer-btns-wrap {
  width: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 16px 0;
}

.middle {
  grid-column: 1/3;
}
</style>
