<template>
  <div class="w-full min-h-screen bg-white flex items-center justify-center">
    <div class="overflow-hidden flex gap-1 font-[600] text-black text-2xl">
      <p class="text -translate-y-full">Youri</p>
      <p class="text -translate-y-full" :style="{animationDelay: '100ms'}">Scheepers</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.text {
  animation: text;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0,.9,1,.1);
}

@keyframes text {
  0% {
    transform: translateY(100%);
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>