<template>
  <div class="bg-slate-100 rounded-lg text-slate-800 px-4 py-2">
    <p class="font-[500]">"{{text}}"</p>
    <p class="mt-1 ml-auto w-fit font-[600]">- {{user}}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: String,
  user: String
})
</script>