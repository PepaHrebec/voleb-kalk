<template>
  <div class="layout-wrap">
    <header class="header">
      <h1 class="header-heading">Volební kalkulačka</h1>
    </header>
    <slot />
  </div>
</template>

<style scoped>
.layout-wrap {
  min-height: 100vh;
  padding: 4px;
  background-color: var(--main-bg-color);
}

.header-heading {
  font-weight: bold;
}
</style>
