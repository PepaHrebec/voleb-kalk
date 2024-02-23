<script setup lang="ts">
defineProps<{
  party: {
    name: string;
    description: string;
    circleColor: string;
  };
}>();
</script>

<template>
  <div class="wrap">
    <div class="top">
      <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
        <circle r="18" cx="20" cy="20" :fill="party.circleColor" />
      </svg>
      <h2>{{ party.name }}</h2>
    </div>
    <p>{{ party.description }}</p>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
}
.top {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}

svg {
  transform: scale(0.8);
}
</style>
