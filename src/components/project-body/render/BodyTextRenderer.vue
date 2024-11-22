<template>
  <p class="mt-2 mb-4 max-w-[540px] font-[500]">{{ text }}</p>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
  text: string;
}>();
</script>