<template>
  <RouterView class="overflow-hidden z-0" @mousemove="updateMouse"/>

  <div ref="mouseElement" class="size-16 top-0 left-0 absolute pointer-events-none text-white z-10">
    <div ref="mouseInner" class="size-16 bg-[#E84855] rounded-full flex justify-center items-center mouse-scale scale-[.25]">
      <svg v-if="activeIcon == 'left'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>

      <svg v-if="activeIcon == 'banner'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
      </svg>

      <svg v-if="activeIcon == 'right'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import {provide, ref} from "vue";

const mouseElement = ref<HTMLElement>()
const mouseInner = ref<HTMLElement>()
const activeIcon = ref('')

const updateMouse = (event: MouseEvent) => {
  mouseElement.value!.style.transform = `translate(${event.x-32}px, ${event.y-32}px)`
}

const updateMouseSize = () => {
  let scale = 1;
  if(activeIcon.value == '') scale = 0.25;

  mouseInner.value!.style.transform = `scale(${scale})`
}

const setIcon = (value: string) => {
  activeIcon.value = value;
  updateMouseSize()
}

provide("setIcon", setIcon)
</script>

<style scoped>
.mouse-scale {
  transform-origin: center;
  transition: transform 0.2s ease-in-out;
}
</style>