<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface ParsedParties extends ParsedContent {
  parties: {
    name: string;
    description: string;
    circleColor: string;
  }[];
}

const { data } = await useAsyncData("home", () =>
  queryContent<ParsedParties>("/parties").findOne()
);
</script>
<template>
  <div class="parties-wrap">
    <PartyCard v-for="party in data?.parties" :party="party" />
  </div>
</template>

<style scoped>
.parties-wrap {
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
