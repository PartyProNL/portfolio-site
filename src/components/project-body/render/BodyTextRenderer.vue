<template>
  <p class="mt-2 mb-4">{{ text }}</p>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
  text: string;
}>();
</script>