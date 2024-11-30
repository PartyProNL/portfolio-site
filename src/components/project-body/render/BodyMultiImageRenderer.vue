<template>
  <div class="max-w-full my-2 flex flex-col lg:flex-row gap-4">
    <img v-for="url in urls" class="h-screen w-fit lg:h-auto lg:w-auto max-h-[80vh] drop-shadow-lg" :src="url" :alt="altText">
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
  altText: string;
  urls: string[];
}>();
</script>