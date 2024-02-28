<script setup lang="ts">
defineProps<{
  currentQuestionNum: number | undefined;
  listLength: number | undefined;
}>();
</script>

<template>
  <div
    v-if="currentQuestionNum !== undefined && listLength !== undefined"
    class="link-wrap"
  >
    <NuxtLink
      v-if="currentQuestionNum !== 1"
      :to="`/kalkulacka/otazky/` + (currentQuestionNum - 1)"
      class="arrow"
      >&lt;-</NuxtLink
    >
    <div class="arrow disabled" v-else>&lt;-</div>
    <NuxtLink
      class="arrow"
      v-if="currentQuestionNum !== listLength"
      :to="`/kalkulacka/otazky/` + (currentQuestionNum + 1)"
      >-&gt;</NuxtLink
    >
    <div class="arrow disabled" v-else>-&gt;</div>
  </div>
</template>

<style scoped>
.link-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
}

.arrow {
  text-decoration: none;
  font-size: 1.8em;
  color: black;
}

.disabled {
  color: rgb(157, 157, 157);
}
</style>
