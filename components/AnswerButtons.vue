<script setup lang="ts"></script>

<template>
  <div class="wrap">
    <SecondaryButton text="Silně ano" :red="false" />
    <SecondaryButton text="Ano" :red="false" />
    <SecondaryButton text="Nevím" class="middle" :red="false" />
    <SecondaryButton text="Ne" :red="false" />
    <SecondaryButton text="Silně ne" :red="false" />
  </div>
</template>

<style scoped>
.wrap {
  width: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.middle {
  grid-column: 1/3;
}
</style>
