<template>
  <img class="max-w-full mt-4 max-h-[620px]" :src="url" :alt="altText">
  <p class="italic ml-4">{{ altText }}</p>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
  altText: string;
  url: string;
}>();
</script>