<script setup lang="ts">
defineProps<{
  answerValue: number;
}>();
</script>

<template>
  <div class="answer-btns-wrap">
    <AnswerBtn
      @send-value="(value) => $emit('sendValue', value)"
      text="Silně ano"
      :clickedValue="1"
      :alreadyAnsweredValue="answerValue"
    />
    <AnswerBtn
      @send-value="(value) => $emit('sendValue', value)"
      text="Ano"
      :clickedValue="2"
      :alreadyAnsweredValue="answerValue"
    />
    <AnswerBtn
      @send-value="(value) => $emit('sendValue', value)"
      text="Nevím"
      class="middle"
      :clickedValue="3"
      :alreadyAnsweredValue="answerValue"
    />
    <AnswerBtn
      @send-value="(value) => $emit('sendValue', value)"
      text="Ne"
      :clickedValue="4"
      :alreadyAnsweredValue="answerValue"
    />
    <AnswerBtn
      @send-value="(value) => $emit('sendValue', value)"
      text="Silně ne"
      :clickedValue="5"
      :alreadyAnsweredValue="answerValue"
    />
  </div>
</template>

<style scoped>
.answer-btns-wrap {
  width: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.middle {
  grid-column: 1/3;
}
</style>
