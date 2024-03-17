<script setup lang="ts">
useHead({
  title: "Návod - 1",
});
</script>

<template>
  <div class="intro-wrap">
    <QuestionCard
      title="Dobové reálie"
      text="Bude Vám prezentován set otázek, které jsou založené na volebních programech stran z První republiky. Je třeba zmínit, že volby První republiky byly značně stavovsky a etnicky děleny a tak není možné vytvořit naprosto přesný obraz, protože např. zemědělec by volil Agrárníky navzdory nepřesné programové shodě, to samé se Slováky a Ľudovou stranou."
      :current-question-num="1"
      :list-length="2"
      :is-intro="true"
    />
    <IntroButtons
      forward="/kalkulacka/intro/2"
      back="/"
      forward-text="Další"
      back-text="Menu"
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
