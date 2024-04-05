<script setup lang="ts">
const props = defineProps<{
  title: string
  link: string
  alt?: string
}>()
</script>

<template>
  <a
    class="flex justify-center rounded-full border-2 border-accent bg-secondary min-w-8 w-64 p-2 transition hover:bg-accent hover:text-primary hover:scale-105"
    :href="props.link"
    :alt="props.alt"
    target="_blank"
  >
    <button class="uppercase">{{ props.title }}</button>
  </a>
</template>
