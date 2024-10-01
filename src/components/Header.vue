<script setup lang="ts">
import CaretLeft from "../assets/icons/CaretLeft.vue";

const props = defineProps(["backLink"]);
</script>

<template>
  <header>
    <div class="left-section">
      <RouterLink :to="props.backLink">
        <CaretLeft />
        <span class="sr-only">Retour</span>
      </RouterLink>
    </div>
    <div class="middle-section">
      <h1><slot /></h1>
    </div>
    <div class="right-section"></div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--Colors-Primary-White);
  padding: var(--Spacings-Spacing-20) var(--Spacings-Spacing-16)
    var(--Spacings-Spacing-12) var(--Spacings-Spacing-16);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left-section,
.right-section {
  display: flex;
  align-items: center;
  width: 68px;
}
.left-section a,
.right-section a {
  display: flex;
  align-items: center;
}
.middle-section {
  flex: 1;
  text-align: center;
}

header h1 {
  font: var(--Typo-Text-2xl);
}
</style>
