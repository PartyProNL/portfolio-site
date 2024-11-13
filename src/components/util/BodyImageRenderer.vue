<template>
  <img class="mt-8 max-w-[1000px]" :src="url" :alt="altText">
  <p class="italic ml-4">{{ altText }}</p>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
  altText: string;
  url: string;
}>();
</script>