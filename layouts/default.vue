<script lang="ts" setup>
defineOgImageComponent("NuxtSeo", {
  title: "Koho byste volili za První republiky?",
  theme: "#0470ee",
  siteName: "Volební kalkulačka",
});
</script>

<template>
  <div class="layout-wrap">
    <header>
      <NuxtLink to="/"
        ><h1 class="header-heading">Volební kalkulačka</h1></NuxtLink
      >
      <p>1918 - 1938</p>
    </header>
    <slot />
  </div>
</template>

<style scoped>
.layout-wrap {
  min-height: 100vh;
  padding: 16px;
  background-color: var(--main-bg-color);
}

header {
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-bottom: 64px;
}

a {
  text-decoration: none;
}

p {
  font-size: small;
  color: var(--text-gray);
}

.header-heading {
  font-weight: bold;
  color: black;
}

@media screen and (min-width: 400px) {
  .layout-wrap {
    padding: 16px 32px;
  }
}
</style>
