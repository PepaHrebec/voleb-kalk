<script setup lang="ts">
const props = defineProps<{
  text: string;
  clickedValue: number;
  alreadyAnsweredValue: number;
}>();

const selected = computed(() => {
  if (props.clickedValue === props.alreadyAnsweredValue) {
    return "selected";
  } else {
    return "";
  }
});
</script>

<template>
  <button @click="$emit('sendValue', clickedValue)" :class="['blue', selected]">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  padding: 12px 36px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2em;
  flex: 1;
  min-width: 150px;
  &:hover {
    cursor: pointer;
  }
}

.blue {
  color: var(--primary-blue);
  border: solid 2px var(--primary-blue);
  background-color: white;
}

.selected {
  color: white;
  background-color: var(--primary-blue);
}

@media (hover: hover) {
  .blue:hover {
    color: white;
    background-color: var(--primary-blue);
  }
}
</style>
