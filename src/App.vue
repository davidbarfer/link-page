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
