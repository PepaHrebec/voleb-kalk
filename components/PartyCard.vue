<script setup lang="ts">
import type { Party } from "~/types/types";

defineProps<{
  party: Party;
}>();
</script>

<template>
  <div class="main-wrap" :id="party.shortcut">
    <div class="left" :style="{ backgroundColor: party.color }"></div>
    <div class="right-wrap">
      <div class="top">
        <h3>{{ party.name }}</h3>
        <p>
          Představitelé:
          <span class="rep">{{ party.representatives.join(", ") }}</span>
        </p>
      </div>
      <p>{{ party.description }}</p>
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

.rep {
  color: var(--text-gray);
}

.left {
  width: 8px;
  border-radius: 8px 0 0 8px;
  flex-shrink: 0;
}

.right-wrap {
  padding: 8px 8px 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.top {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

h3,
p {
  line-height: 1.4;
}
</style>
