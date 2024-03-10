<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
}>();
</script>
<template>
  <div class="warning-wrap">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>
<style>
.warning-wrap {
  border: dashed var(--primary-red);
  background-color: rgb(254, 214, 221);
  padding: 12px;
  color: var(--primary-red);
  border-radius: 8px;
}
</style>
