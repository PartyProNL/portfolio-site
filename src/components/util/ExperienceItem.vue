<template>
  <div class="flex flex-col mt-4 tracking-wide">
    <p class="text-lg font-[600] text-slate-800">{{ what }}</p>
    <p class="font-[500] text-slate-700">{{ where }}</p>
    <p class="font-[500] text-slate-700">{{ from }}-{{ to }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  what: String,
  where: String,
  from: String,
  to: String
})
</script>