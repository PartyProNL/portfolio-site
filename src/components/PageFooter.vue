<template>
  <div class="w-full" :style="{backgroundColor: backgroundColor, color: textColor}">
    <div class="w-full px-20 py-10 flex gap-40">
      <div class="flex flex-col">
        <h4 class="font-semibold pb-2">Pages</h4>
        <RouterLink class="" to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>

      <div class="flex flex-col">
        <h4 class="font-semibold pb-2">Contact</h4>
        <p>LinkedIn</p>
        <p>E-mail</p>
        <p>GitHub</p>
      </div>

      <div class="flex flex-col">
        <h4 class="font-semibold pb-2">Download resume</h4>
        <p>In English</p>
        <p>In Dutch</p>
      </div>
    </div>

    <p class="w-full flex justify-center pb-4">Made by Youri Scheepers</p>
  </div>

</template>

<script setup lang="ts">
defineProps({
  textColor: String,
  backgroundColor: String,
})
</script>