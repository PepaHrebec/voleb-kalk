<script setup lang="ts">
const props = defineProps<{
  results: {
    shortcut: string;
    value: number;
    name: string;
    percentage: number;
  };
}>();

const percentage = computed(() => {
  return props.results.percentage + "%";
});
</script>
<template>
  <div class="main-wrap">
    <div class="left"></div>
    <div class="right">
      <div class="top">
        <h3>{{ results.name }}</h3>
        <div class="percentage">{{ Math.round(results.percentage) }} %</div>
      </div>
      <div class="bottom">
        <div class="line">
          <div class="line-coloured" :style="{ width: percentage }"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main-wrap {
  background-color: white;
  border: solid 1px rgb(201, 201, 201);
  box-shadow: 11px 10px 12px -4px rgba(224, 224, 224, 1);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
}

.left {
  border-radius: 8px 0 0 8px;
  width: 8px;
  background-color: red;
}

.right {
  padding: 12px 12px 8px 16px;
  flex: 1;
}

.top {
  display: flex;
  flex-direction: row;
  gap: 12px;
}

.percentage {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-gray);
}

.bottom {
  padding: 24px 0 12px;
}

.line {
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: rgb(207, 207, 207);
}

.line-coloured {
  width: 70%;
  height: 8px;
  border-radius: 8px;
  background-color: var(--primary-blue);
}
</style>
