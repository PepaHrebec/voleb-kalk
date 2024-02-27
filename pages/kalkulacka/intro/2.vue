<script setup lang="ts"></script>

<template>
  <QuestionCard
    title="Úvod 2"
    :current-question-num="2"
    :list-length="2"
    :is-intro="true"
  />
  <IntroButtons
    forward="/kalkulacka/otazky/1"
    back="/kalkulacka/intro/1"
    forward-text="Otázky"
    back-text="Zpět"
  />
</template>

<style scoped></style>
