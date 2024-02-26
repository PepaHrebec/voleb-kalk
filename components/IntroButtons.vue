<script setup lang="ts">
defineProps<{
  forward: string;
  back: string;
}>();
</script>

<template>
  <div class="buttons">
    <NuxtLink :to="back">
      <SecondaryButton text="Zpět" :red="true" class="red" />
    </NuxtLink>
    <NuxtLink :to="forward">
      <SecondaryButton text="Pokračovat" :red="true" class="blue" />
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
