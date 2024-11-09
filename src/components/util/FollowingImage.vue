<template>
  <div class="w-full h-full">
    <div ref="banner" class="banner w-full h-full bg-cover bg-center flex" :style="{backgroundImage: `url(${props.image})`}" @mouseenter="startBannerZoom" @mousemove="updateBannerZoom" @mouseleave="resetBannerZoom">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";

const props = defineProps({
  image: String,
  enabled: Boolean
})

watch(props, () => {
  if(!props.enabled) {
    resetBannerZoom()
  }
})

const banner = ref<HTMLElement>()
const updateBannerZoom = (event: MouseEvent) => {
  if(!props.enabled) {
    banner.value!.style.backgroundPositionX = "50%"
    banner.value!.style.backgroundPositionY = "50%"
    return;
  }

  const rect = banner.value!.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Calculate the percentage position
  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  const deltaY = yPercent-50
  const yNewPercent = 50 + deltaY/2

  // Log the percentage position or use it as needed
  banner.value!.style.backgroundPositionX = xPercent+"%"
  banner.value!.style.backgroundPositionY = yNewPercent+"%"
}

const startBannerZoom = () => {
  banner.value!.style.backgroundSize = "113%"
}

const resetBannerZoom = () => {
  banner.value!.style.backgroundSize = "110%"
  banner.value!.style.backgroundPositionX = "50%"
  banner.value!.style.backgroundPositionY = "50%"
}
</script>

<style scoped>
.banner {
  background-size: 113%;
  transition: background-position 0.5s, background-size 0.5s;
  filter: grayscale(100%)
}
</style>