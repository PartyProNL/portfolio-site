<template>
  <img class="w-full my-2 drop-shadow-lg" :src="url" :alt="altText">
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
  altText: string;
  url: string;
}>();
</script>