<script setup lang="ts">
defineProps<{
  forward: string;
  back: string;
  forwardText: string;
  backText: string;
}>();
</script>

<template>
  <div class="buttons">
    <NuxtLink :to="back">
      <SecondaryButton :text="backText" :red="true" />
    </NuxtLink>
    <NuxtLink :to="forward">
      <SecondaryButton :text="forwardText" :red="false" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 16px;
}
</style>
