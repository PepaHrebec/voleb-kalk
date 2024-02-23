<script lang="ts"></script>

<template>
  <div class="names-flex-wrapper">
    <div class="names-wrapper">
      <h3>Švehla?</h3>
      <h3>Kramář?</h3>
      <h3>Komunismus?</h3>
      <h3 class="names-grayed">A co Henlein?</h3>
    </div>
  </div>
  <NuxtLink to="/about"
    ><PrimaryButton content="Spustit kalkulačku ->"
  /></NuxtLink>
</template>

<style scoped>
.names-flex-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0;
}

.names-grayed {
  color: var(--text-gray);
}

h3 {
  font-size: 1.6em;
}
</style>
