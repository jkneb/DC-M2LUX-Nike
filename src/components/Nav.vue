<script setup lang="ts">
import HouseSimple from "../assets/icons/HouseSimple.vue";
import ListMagnifyingGlass from "../assets/icons/ListMagnifyingGlass.vue";
import HeartStraight from "../assets/icons/HeartStraight.vue";
import BagSimple from "../assets/icons/BagSimple.vue";
import User from "../assets/icons/User.vue";
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">
          <HouseSimple />
          Home
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/shop">
          <ListMagnifyingGlass />
          Shop
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/favourites">
          <HeartStraight />
          Favourites
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/bag">
          <BagSimple />
          Bag
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/profile">
          <User />
          Profile
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: var(--Colors-Primary-White);
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
}
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  min-height: 82px;
  padding: var(--Spacings-Spacing-8) 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: calc(var(--Spacings-Spacing-40) + 4px);
}
nav ul li {
  display: flex;
}
nav a {
  font: var(--Typo-Text-xs);
  color: var(--Colors-Gray-600);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px 0;
}
nav svg {
  stroke: var(--Colors-Gray-600);
}
nav a.router-link-active {
  color: var(--Colors-Primary-Dark);
}
nav a.router-link-active svg {
  stroke: var(--Colors-Primary-Dark);
}
</style>
