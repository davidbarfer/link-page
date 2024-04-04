<script setup lang="ts">
import ProfilePicture from '@/components/ProfilePicture.vue'
import LinkBtn from '@/components/LinkBtn.vue'
import { links } from '@/components/data/links'
</script>

<template>
  <div class="flex flex-col items-center gap-y-8">
    <ProfilePicture />
    <LinkBtn
      v-for="item in links"
      :key="item.title"
      :title="item.title"
      :link="item.link"
      :alt="item.alt"
    ></LinkBtn>
  </div>
</template>
