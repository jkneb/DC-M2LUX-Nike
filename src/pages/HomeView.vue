<script setup lang="ts"></script>

<template>
  <div class="heading">
    <h1>Découvrir</h1>
    <span class="subtitle dimmed">Mercredi 21 août</span>
  </div>

  <div class="img">
    <img src="../assets/Image01.png" alt="" />
  </div>

  <div class="heading">
    <span class="subtitle">Nouveautés</span>
    <h2 class="dimmed">Les dernières arrivés Nike</h2>
  </div>

  <div class="products">
    <div class="product">
      <RouterLink to="/product">
        <img src="../assets/Image03.png" alt="" />
        <div class="product-label">
          Nike Everyday Plus
          <div>4,99€</div>
        </div>
      </RouterLink>
    </div>
    <div class="product">
      <RouterLink to="/product">
        <img src="../assets/Image03.png" alt="" />
        <div class="product-label">
          Nike Everyday Plus
          <div>4,99€</div>
        </div>
      </RouterLink>
    </div>
  </div>

  <div class="img">
    <img src="../assets/Image02.png" alt="" />
  </div>
</template>

<style>
.heading {
  display: flex;
  flex-direction: column;
  gap: var(--Spacings-Spacing-12) 0;
  margin: var(--Spacings-Spacing-16) 0;
  padding: var(--Spacings-Spacing-32) var(--Spacings-Spacing-20)
    var(--Spacings-Spacing-8);
}
.products {
  width: 100%;
  overflow-x: auto;
  overscroll-behavior: auto;
  display: flex;
  gap: 0 var(--Spacings-Spacing-8);
  padding: 0 var(--Spacings-Spacing-20);
  margin-bottom: var(--Spacings-Spacing-16);
}
.products-title {
  padding: var(--Spacings-Spacing-32) var(--Spacings-Spacing-20) 0
    var(--Spacings-Spacing-20);
  font: var(--Typo-Title-sm);
}
.products-no-padding {
  padding: 0;
}
.products img {
  max-width: none;
  min-width: auto;
}
.products a {
  text-decoration: none;
}
.product {
  display: flex;
  flex-direction: column;
  gap: var(--Spacings-Spacing-20) 0;
}
.product-label {
  font: var(--Typo-Title-sm);
}
.product-label-small {
  font: 400 10.29px/120% Helvetica;
}
</style>
