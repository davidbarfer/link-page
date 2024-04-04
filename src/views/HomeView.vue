<script setup lang="ts">
import { links, donate } from '@/components/data/links'
import ProfilePicture from '@/components/ProfilePicture.vue'
import LinkBtn from '@/components/LinkBtn.vue'
import Separator from '@/components/SeparatorLine.vue'
</script>

<template>
  <div class="flex flex-col items-center gap-y-8">
    <ProfilePicture class="mt-8" />
    <h1 class="font-bold text-xl text-center uppercase">david barrero</h1>
    <Separator />
    <LinkBtn
      v-for="item in links"
      :key="item.title"
      :title="item.title"
      :link="item.link"
      :alt="item.alt"
    ></LinkBtn>
    <Separator />
    <LinkBtn
      :title="donate.title"
      :link="donate.link"
      :alt="donate.alt"
    ></LinkBtn>
  </div>
</template>
