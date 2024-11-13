<template>
  <div class="grid grid-cols-4 grid-rows-4 w-full h-full absolute top-0 left-0">
    <div v-for="i in 16" class="w-full h-full bg-black origin-center">
      <div :class="{ revert: reverse }" class="bg-white h-full w-0 group-hover:w-full transition-all" :style="{transitionDelay: getTransitionDelay(i)+'ms'}"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  reverse: Boolean
})

const getTransitionDelay = (i: number): number => {
  if(props.reverse) {
    return (16-i)*10
  } else {
    return i*10
  }
}
</script>

<style scoped>
.revert {
  margin-left: auto;
}
</style>