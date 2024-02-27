<script setup lang="ts"></script>

<template>
  <QuestionCard
    title="Úvod"
    :current-question-num="1"
    :list-length="2"
    :is-intro="true"
  />
  <IntroButtons
    forward="/kalkulacka/intro/2"
    back="/"
    forward-text="Další"
    back-text="Menu"
  />
</template>
