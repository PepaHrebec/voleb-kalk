<script setup lang="ts">
defineProps<{
  content: string;
}>();
</script>

<template>
  <button>{{ content }}</button>
</template>

<style scoped>
button {
  padding: 12px 36px;
  background-color: var(--primary-blue);
  color: white;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2em;
  box-shadow: 0 4px 6px 0 var(--primary-blue);
  margin-bottom: 20px;
}
</style>
