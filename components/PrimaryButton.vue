<script setup lang="ts">
defineProps<{
  content: string;
}>();
</script>

<template>
  <button>{{ content }}</button>
</template>

<style>
button {
  padding: 8px 24px;
  background-color: var(--primary-blue);
  color: white;
  border-radius: 8px;
  font-weight: bold;
}
</style>
