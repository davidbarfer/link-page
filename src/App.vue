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
  --color-primary: rgb(30, 3, 66);
  --color-secondary: rgb(14, 70, 163);
  --color-accent: rgb(255, 200, 0);
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
