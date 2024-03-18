<script setup lang="ts">
defineProps<{
  currentQuestionNum: number | undefined;
  listLength: number | undefined;
  importantList: boolean[] | undefined;
}>();
</script>

<template>
  <div
    v-if="currentQuestionNum !== undefined && listLength !== undefined"
    class="link-wrap"
  >
    <NuxtLink
      v-if="currentQuestionNum !== 1"
      :to="`/kalkulacka/otazky/` + (currentQuestionNum - 1)"
      class="arrow"
      ><div class="arrow-wrap">
        <div>&lt;-</div>
        <p>Zpět</p>
      </div></NuxtLink
    >
    <div class="arrow disabled" v-else>
      <div class="arrow-wrap">
        <div>&lt;-</div>
        <p>Zpět</p>
      </div>
    </div>
    <StarButton
      :question-number="currentQuestionNum"
      :important-list="importantList"
      class="star"
    />
    <NuxtLink
      class="arrow"
      v-if="currentQuestionNum !== listLength"
      :to="`/kalkulacka/otazky/` + (currentQuestionNum + 1)"
      ><div class="arrow-wrap">
        <div>-&gt;</div>
        <p>Dál</p>
      </div></NuxtLink
    >
    <div class="arrow disabled" v-else>
      <div class="arrow-wrap">
        <div>-&gt;</div>
        <p>Dál</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.link-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
}

.arrow {
  text-decoration: none;
  font-size: 1.8em;
  color: black;
}

.disabled {
  color: rgb(157, 157, 157);
}

.arrow-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.arrow-wrap p {
  font-size: 0.5em;
}

.star {
  transform: translateY(6px);
}
</style>
