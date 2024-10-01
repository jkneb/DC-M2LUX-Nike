<script setup lang="ts">
import { ref } from "vue";
import Header from "../components/Header.vue";
import CaretDown from "../assets/icons/CaretDown.vue";
import Check from "../assets/icons/Check.vue";
import Close from "../assets/icons/Close.vue";

const isDrawerVisible = ref(false);
const selectedSize = ref("");

function showDrawer() {
  isDrawerVisible.value = true;
}
function hideDrawer() {
  isDrawerVisible.value = false;
}

const SIZES_MAP: { [key: string]: any } = {
  s: "S (32 au 39)",
  m: "M (40 au 44)",
  l: "L (45 au 49)",
};

function selectSize(event: any) {
  selectedSize.value = event.target.id;
  hideDrawer();
}
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
        <a>
          <img src="../assets/Image05.png" alt="" />
        </a>
      </div>
      <div class="product">
        <a>
          <img src="../assets/Image06.png" alt="" />
        </a>
      </div>
      <div class="product">
        <a>
          <img src="../assets/Image07.png" alt="" />
        </a>
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
        <button class="secondary" @click="showDrawer">
          <span v-if="selectedSize">{{ SIZES_MAP[selectedSize] }}</span>
          <span v-else>Choisir une taille</span>
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

  <div
    :class="{ overlay: true, visible: isDrawerVisible }"
    @click="hideDrawer"
  ></div>
  <div :class="{ drawer: true, visible: isDrawerVisible }">
    <button class="drawer-close-icon" @click="hideDrawer"><Close /></button>
    <div class="drawer-title">Sélectionnez une taille</div>

    <button
      v-for="item of Object.keys(SIZES_MAP)"
      class="drawer-option"
      :id="item"
      @click="selectSize($event)"
    >
      {{ SIZES_MAP[item] }}

      <Check v-if="selectedSize && selectedSize === item" />
    </button>
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

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: var(--Colors-Overlay-80);
  transition: opacity 250ms ease;
  opacity: 0;
  z-index: 2;
}
.overlay.visible {
  height: 100%;
  opacity: 1;
}
.drawer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 3;
  border-radius: 8px 8px 0 0;
  background: var(--Colors-Primary-White);
  transition: transform 250ms ease;
  transform: translateY(101%);
  padding-bottom: var(--Spacings-Spacing-40);
}
.drawer.visible {
  transform: translateY(0%);
}
.drawer-title {
  font: var(--Typo-Title-sm);
  padding: 28px var(--Spacings-Spacing-24);
}
.drawer-option {
  margin: 0;
  padding: 0;
  background: none;
  border-radius: 0;
  color: inherit;
  display: flex;
  border: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font: var(--Typo-Text-xl);
  border-top: 1px solid var(--Colors-Gray-200);
  padding: 28px var(--Spacings-Spacing-24);
}
.drawer-close-icon {
  position: absolute;
  top: 28px;
  right: var(--Spacings-Spacing-24);
  background: none;
  border: none;
  padding: 0;
  margin: 0;
}
</style>
