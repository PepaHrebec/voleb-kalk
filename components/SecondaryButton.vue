<script setup lang="ts">
const props = defineProps<{
  text: string;
  red: boolean;
}>();

const color = computed(() => {
  return props.red ? "red" : "blue";
});
</script>

<template>
  <button :class="color">{{ text }}</button>
</template>

<style scoped>
button {
  padding: 12px 36px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2em;
  flex: 1;
  min-width: 150px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
}

.red {
  color: red;
  border: solid 2px red;
  background-color: white;
}

.blue {
  color: var(--primary-blue);
  border: solid 2px var(--primary-blue);
  background-color: white;
}

@media (hover: hover) {
  .blue:hover {
    color: white;
    background-color: var(--primary-blue);
  }

  .red:hover {
    color: white;
    background-color: red;
  }
}
</style>
