<script setup lang="ts"></script>

<template>
  <div class="intro-wrap">
    <QuestionCard
      title="Průběh kalkulačky"
      text='Na otázky půjde odpovídat v rozsahu "Silně ano" až "Silně ně", přičemž je také možné otázky přeskočit nebo se k nim vracet šedými šipkami ve spodních rozích. Přeskočené otázky se budou registrovat jako "Nevím" a nebude jim přikládána taková váha. Po poslední otázce pujde všechny ještě zrevidovat.'
      :current-question-num="2"
      :list-length="2"
      :is-intro="true"
    />
    <IntroButtons
      forward="/kalkulacka/otazky/1"
      back="/kalkulacka/intro/1"
      forward-text="Otázky"
      back-text="Zpět"
    />
  </div>
</template>

<style scoped>
.intro-wrap {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
