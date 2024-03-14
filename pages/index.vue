<script setup lang="ts">
import { useAnswersStore } from "~/scripts/answersStore";

const answersStore = useAnswersStore();
const { viewedResults } = storeToRefs(answersStore);
</script>

<template>
  <main>
    <div class="names-flex-wrapper">
      <div class="names-wrapper">
        <h3>Švehla?</h3>
        <h3>Kramář?</h3>
        <h3>Komunismus?</h3>
        <h3 class="names-grayed">A co Henlein?</h3>
      </div>
    </div>
    <div class="middle">
      <div class="buttons-wrap">
        <NuxtLink to="/kalkulacka/intro/1"
          ><PrimaryButton content="Spustit kalkulačku ->"
        /></NuxtLink>
        <NuxtLink
          to="/kalkulacka/vysledek"
          v-if="viewedResults"
          class="results-btn"
          ><SecondaryButton :red="false" text="Zobrazit výsledek ->" />
        </NuxtLink>
      </div>
      <NuxtLink class="link-parties" to="/strany"
        >Strany, které v kalkulačce najdete -></NuxtLink
      >
    </div>
    <div class="about-wrap">
      <h2>O projektu</h2>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      </p>
    </div>
  </main>
</template>

<style scoped>
.names-flex-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 64px;
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
  text-decoration: none;
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

.buttons-wrap {
  display: flex;
  flex-direction: column;
}

.results-btn {
  padding-bottom: 20px;
}
</style>
