<script setup lang="ts">
import type { ParsedParties } from "~/types/types";

const { data } = await useAsyncData("home", () =>
  queryContent<ParsedParties>("/parties").findOne()
);
</script>
<template>
  <main>
    <h2>Přehled stran</h2>
    <div class="parties-wrap">
      <PartyCard v-for="party in data?.parties" :party="party" />
    </div>
  </main>
</template>

<style scoped>
.parties-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  gap: 12px;
}
</style>
