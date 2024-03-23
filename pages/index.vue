<script setup lang="ts">
import { useAnswersStore } from "~/scripts/answersStore";

useHead({
  title: "Volební kalkulačka",
  meta: [
    { name: "description", content: "Prvorepubliková volební kalkulačla." },
  ],
});

const answersStore = useAnswersStore();
const { viewedResults } = storeToRefs(answersStore);
</script>

<template>
  <main>
    <div class="names-flex-wrapper">
      <div class="names-wrapper">
        <h2>Švehla?</h2>
        <h2>Kramář?</h2>
        <h2>Komunismus?</h2>
        <h2 class="names-grayed">A co Henlein?</h2>
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
        Tato volební kalkulačka je neoficiální verzí známé
        <a href="https://www.volebnikalkulacka.cz/">Volební kalkulačky</a> z
        dílny Cesko.Digital, kterým vzdávám velký dík. Nijak se netajím tím, že
        jsem od nich z velké části přebral design a barevné schéma, ale krom
        toho jde o zcela originální počin, který vznikl pouze z mého zájmu o
        historii, politiku a web.
      </p>
    </div>
    <div class="about-wrap">
      <h2>Motivace</h2>
      <p>
        Období První republiky je v české historii až mytizované období, které
        ale naráželo na potíže stejně tak, jako my dnes. Sudetští Němci, Velká
        hospodářská krize, náboženské roztržky a z pohledu dnešní doby možná až
        fanatické členské základy politických stran. Kalkulačka nevznikla pouze
        pro zábavu, ale také proto, aby informovala o tématech, které byly pro
        První republiku stěžejní, a o stranách, které je prosazovaly.
      </p>
    </div>
    <div class="about-wrap">
      <h2>Historické zdroje</h2>
      <p>
        Ačkoliv nás od konce První republiky nedělí ještě ani 100 let, bylo
        zjišťování podrobnějších informací o "běžnějších" politických tématech
        až pozoruhodně namáhavé. Skoro každý Vám poví o Benešovi a Mnichovu, ale
        např. o postojích Národních Socialistů je informací opravdu poskrovnu.
        Většina otázek a programů je tedy čerpána z nespočtu vysokoškolských
        prací a především z knihy Dr. Přemysla Pražáka "Přehled a program
        politických stran v Československu" z roku 1935.
      </p>
    </div>
    <img
      src="~/assets/ziv.png"
      class="decorative-img left-hang"
      alt="Logo Živnostenské strany"
      style="box-shadow: 5px 7px 24px -4px #fb7185; top: 0px; left: 10vw"
    />
    <img
      src="~/assets/sdpf.png"
      class="decorative-img left-hang"
      alt="Vlajka Sudetoněmecké strany"
      style="
        top: 100px;
        right: 9vw;
        width: 150px;
        box-shadow: 5px 7px 24px -4px #fb7185;
        border-radius: 4px;
      "
    />
    <img
      src="~/assets/ns.png"
      class="decorative-img right-hang"
      alt="Vlajka Mladého Národního Sjednocení"
      style="
        top: 160px;
        left: 5vw;
        width: 150px;
        box-shadow: 5px 7px 24px -4px #1e3a8a;
      "
    />
  </main>
</template>

<style scoped>
main {
  position: relative;
}

.decorative-img {
  background: transparent;
  background-color: var(--main-bg-color);
  width: 100px;
  position: absolute;
}

.left-hang {
  transition: all 300ms;
  transform: rotate(20deg);
  &:hover {
    transform: rotate(-30deg);
    transform: scale(1.1);
  }
}

.right-hang {
  transition: all 300ms;
  transform: rotate(-15deg);
  &:hover {
    transform: rotate(30deg);
    transform: scale(1.1);
  }
}

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
  padding-bottom: 24px;
  width: 100%;
  max-width: 630px;
  margin: 0 auto;
  & > h2 {
    font-size: 1.3em;
  }
  & > p {
    line-height: 1.2;
  }
  & a {
    color: black;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

.buttons-wrap {
  display: flex;
  flex-direction: column;
}

.results-btn {
  padding-bottom: 20px;
}

@media screen and (max-width: 870px) {
  .decorative-img {
    display: none;
  }
}
</style>
