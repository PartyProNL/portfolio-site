<template>
  <p class="mt-2 mb-8 max-w-[540px] font-[500] tracking-wide">{{ text }}</p>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
  text: string;
}>();
</script>