<script setup lang="ts">
const props = defineProps<{
  title: string
  link: string
  alt?: string
}>()
</script>

<template>
  <a
    class="flex justify-center rounded-full border-2 border-accent bg-secondary hover:opacity-80 min-w-8 w-64 p-2"
    :href="props.link"
    :alt="props.alt"
    target="_blank"
  >
    <button class="uppercase">{{ props.title }}</button>
  </a>
</template>
