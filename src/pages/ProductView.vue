<script setup lang="ts">
import Header from "../components/Header.vue";
import CaretDown from "../assets/icons/CaretDown.vue";
</script>

<template>
  <Header backLink="/">
    <span>Jordan Flight Essentials</span>
  </Header>

  <div class="view-with-header">
    <div class="img">
      <img src="../assets/Image04.png" alt="" />
    </div>

    <div class="products products-no-padding">
      <div class="product">
        <RouterLink to="/product">
          <img src="../assets/Image05.png" alt="" />
        </RouterLink>
      </div>
      <div class="product">
        <RouterLink to="/product">
          <img src="../assets/Image06.png" alt="" />
        </RouterLink>
      </div>
      <div class="product">
        <RouterLink to="/product">
          <img src="../assets/Image07.png" alt="" />
        </RouterLink>
      </div>
    </div>

    <div class="heading">
      <span class="subtitle">Chaussettes d'entraînement</span>
      <h2>Nike everyday Plus</h2>
      <span class="subtitle">4,99€</span>
    </div>

    <div class="main">
      <p>
        The Nike Everyday Plus Cushioned Socks bring comfort to your workout
        with extra cushioning under the heel and forefoot and a snug, supportive
        arch band. Sweat-wicking power and breathability up top help keep your
        feet dry and cool to help push you through that extra set.
        <br /><br />
        Shown: Multi-Color<br />
        Style: SX6897-965
      </p>
    </div>

    <div class="bloc-section">
      <div class="button-group">
        <button class="secondary">
          Choisir une taille
          <CaretDown />
        </button>
        <button>Ajouter au panier</button>
      </div>
    </div>

    <div class="bloc-section">
      <h3>Livraison</h3>
      <p>Chez vous en 48h</p>
      <br />
      <h3>Click & Collect</h3>
      <a>Trouver un magasin</a>
    </div>
  </div>

  <div class="products-title">Vous pourriez aimer aussi</div>
  <div class="products">
    <div class="product">
      <a>
        <img src="../assets/Image08.png" alt="" />
        <div class="product-label-small">
          Nike Everyday Max
          <div>24€</div>
        </div>
      </a>
    </div>
    <div class="product">
      <a>
        <img src="../assets/Image09.png" alt="" />
        <div class="product-label-small">
          Air force one low
          <div>99,99€</div>
        </div>
      </a>
    </div>
    <div class="product">
      <a>
        <img src="../assets/Image05.png" width="166" height="193" alt="" />
        <div class="product-label-small">
          Nike Everyday Plus
          <div>4,99€</div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.view-with-header {
  padding-top: 56px; /* header height */
}
.heading {
  margin-top: 0;
  padding-top: var(--Spacings-Spacing-20);
}
.bloc-section {
  padding: var(--Spacings-Spacing-40) var(--Spacings-Spacing-20) 0;
}
.products {
  padding-bottom: var(--Spacings-Spacing-40);
}
</style>
