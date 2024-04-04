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
  --color-primary: #671f00;
  --color-secondary: #be4229;
  --color-accent: #fffb00;
}
body {
  height: 100vh;
}
#app {
  height: inherit;
  width: inherit;
  background-color: var(--color-primary);
  color: var(--color-accent);
}
</style>
