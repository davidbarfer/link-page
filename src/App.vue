<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
:root {
  --color-primary: rgb(10, 25, 47); /* Azul muy oscuro */
  --color-secondary: rgb(42, 82, 109); /* Azul oscuro pero más claro */
  --color-accent: rgb(255, 200, 0); /* Amarillo brillante */
}
html {
  background-color: var(--color-primary);
}
body {
  display: flex;
  height: 100vh;
  width: 100%;
}
#app {
  height: inherit;
  width: inherit;
  color: var(--color-accent);
}
</style>
