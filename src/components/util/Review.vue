<template>
  <div class="bg-white text-black font-sans px-4 py-2">
    <p class="italic">"{{text}}"</p>
    <p class="mt-1 ml-auto w-fit">- {{user}}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: String,
  user: String
})
</script>