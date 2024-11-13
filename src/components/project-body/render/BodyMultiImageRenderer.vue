<template>
  <div class="h-[600px] max-w-full mt-8 flex gap-4">
    <img v-for="url in urls" class="h-full" :src="url" :alt="altText">
  </div>
  <p class="italic ml-4">{{ altText }}</p>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
  altText: string;
  urls: string[];
}>();
</script>