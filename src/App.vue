<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="bg-zinc-500">
    <RouterView />
  </main>
</template>

<style>
body {
  height: 100vh;
}
#app {
  height: inherit;
  width: auto;
}
</style>
