<script setup lang="ts"></script>

<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/shop">Shop</RouterLink></li>
      <li><RouterLink to="/favourites">Favourites</RouterLink></li>
      <li><RouterLink to="/bag">Bag</RouterLink></li>
      <li><RouterLink to="/profile">Profile </RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  bottom: 0;
  z-index: 1;
}
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: calc(var(--Spacings-Spacing-40) + 4px);
}
</style>
