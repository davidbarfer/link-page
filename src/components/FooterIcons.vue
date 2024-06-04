<script setup lang="ts">
import linkedinIcon from '@/assets/linkedinIcon.vue'
import githubIcon from '@/assets/githubIcon.vue'
import instagramIcon from '@/assets/instagramIcon.vue'
import MailIcon from '@/assets/mailIcon.vue'
import { socialMedia } from '@/components/data/links.ts'
</script>

<template>
  <div class="flex justify-center gap-x-8 text-accent *:size-8">
    <a
      class="hover:scale-110"
      :href="socialMedia[0].link"
      :alt="socialMedia[0].alt"
      target="_blank"
      :aria-label="socialMedia[0].title"
    >
      <linkedinIcon />
    </a>
    <a
      class="hover:scale-110"
      :href="socialMedia[1].link"
      :alt="socialMedia[1].alt"
      target="_blank"
      :aria-label="socialMedia[1].title"
    >
      <githubIcon />
    </a>
    <a
      class="hover:scale-110"
      :href="socialMedia[2].link"
      :alt="socialMedia[2].alt"
      target="_blank"
      :aria-label="socialMedia[2].title"
    >
      <instagramIcon />
    </a>
    <a
      class="hover:scale-110"
      :href="socialMedia[3].link"
      :alt="socialMedia[3].alt"
      target="_blank"
      :aria-label="socialMedia[3].title"
    >
      <MailIcon />
    </a>
  </div>
</template>
