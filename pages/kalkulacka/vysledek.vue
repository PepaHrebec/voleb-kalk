<script setup lang="ts">
import useResult from "~/composables/useResult";
import { useAnswersStore } from "~/scripts/answersStore";
import type { ParsedParties } from "~/types/types";

const results = await useResult();

const { data } = await useAsyncData("home", () =>
  queryContent<ParsedParties>("/parties").findOne()
);

const answersStore = useAnswersStore();
const { viewedResults } = storeToRefs(answersStore);
viewedResults.value = true;
</script>

<template>
  <h2>Výsledky</h2>
  <div class="results-wrap">
    <ResultsCard
      v-for="result in results"
      :results="result"
      :party="
        data?.parties.find((party) => {
          return party.shortcut === result.shortcut;
        })
      "
    />
    <WarningCard
      class="warning"
      title="Upřesnění"
      content="Rád bych ještě jednou poznamenal, že kompas Vás více méně staví do pozice etnického Čecha s nekonkrétním zaměstnáním, protože pouhá etnická nebo třídní příslušnost by kompletně rozhodila Vaše volební preference."
    />
  </div>
  <div class="buttons-wrap">
    <NuxtLink to="/"><PrimaryButton content="Zpět do menu" /></NuxtLink>
    <NuxtLink to="/kalkulacka/otazky/porovnani" class="secondary-btn"
      ><SecondaryButton :red="false" text="Porovnat s odpověďmi stran" />
    </NuxtLink>
    <NuxtLink
      to="/kalkulacka/otazky/souhrn"
      v-if="viewedResults"
      class="secondary-btn"
      ><SecondaryButton :red="false" text="Poupravit odpovědi" />
    </NuxtLink>
  </div>
</template>
<style scoped>
.results-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px 0 12px;
}

.warning,
.buttons-wrap {
  margin-bottom: 36px;
}

.buttons-wrap {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 630px;
  margin: 0 auto;
}
</style>
