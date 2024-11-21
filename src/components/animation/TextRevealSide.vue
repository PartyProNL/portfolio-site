<template>
  <div class="flex items-center">
    <div class="overflow-hidden h-[72px]" v-for="(char, index) in text">
      <p  class="appear overflow-hidden" :style="{animationDelay: (index/props.text!.length)*100+'ms'}">{{char}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String
})
</script>

<style scoped>
.appear {
  animation: appear;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  animation-duration: 0.3s;
  opacity: 0;
}

@keyframes appear {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>