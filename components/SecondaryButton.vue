<script setup lang="ts">
const props = defineProps<{
  text: string;
  red: boolean;
}>();
</script>

<template>
  <button>{{ text }}</button>
</template>

<style scoped>
button {
  padding: 12px 36px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2em;
  flex: 1;
  &:hover {
    cursor: pointer;
  }
}

.red {
  color: red;
  border: solid 2px red;
  background-color: white;
  &:hover {
    color: white;
    background-color: red;
  }
}

.blue {
  color: var(--primary-blue);
  border: solid 2px var(--primary-blue);
  background-color: white;
  &:hover {
    color: white;
    background-color: var(--primary-blue);
  }
}
</style>
