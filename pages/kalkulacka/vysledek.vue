<script setup lang="ts">
import useResult from "~/composables/useResult";
const results = await useResult();
</script>
<template>
  <h2>Výsledky</h2>
  <div class="results-wrap">
    <ResultsCard v-for="result in results" :results="result" />
  </div>
</template>
<style scoped>
.results-wrap {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 0;
}
</style>
