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
  --color-primary: #1e0342;
  --color-secondary: #0e46a3;
  --color-accent: rgb(255, 200, 0);
}
body {
  display: flex;
  height: 100vh;
  width: 100%;
}
#app {
  height: inherit;
  width: inherit;
  background-color: var(--color-primary);
  color: var(--color-accent);
}
</style>
