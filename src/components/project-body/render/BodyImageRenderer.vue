<template>
  <div class="w-full aspect-video p-4 bg-slate-900 my-1">
    <div class="bg-cover bg-center w-full aspect-video" :style="{backgroundImage: `url(${url})`}"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
  altText: string;
  url: string;
}>();
</script>