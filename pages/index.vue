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
  <div class="middle">
    <NuxtLink to="/kalkulacka/intro"
      ><PrimaryButton content="Spustit kalkulačku ->"
    /></NuxtLink>
    <NuxtLink class="link-parties" to="/strany"
      >Strany, které v kalkulačce najdete -></NuxtLink
    >
  </div>
  <div class="about-wrap">
    <h2>O projektu</h2>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text
    </p>
  </div>
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

.middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

.link-parties {
  color: var(--primary-blue);
  font-size: 1em;
}

.about-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  & > h2 {
    font-size: 1.3em;
  }
  & > p {
    line-height: 1.2;
  }
}
</style>
