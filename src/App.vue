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
  --color-secondary: #915c51;
  --color-accent: #e65336;
}
body {
  height: 100vh;
}
#app {
  height: inherit;
  width: inherit;
  background-color: var(--color-primary);
}
</style>
