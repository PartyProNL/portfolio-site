<template>
  <div class="w-full h-full">
    <div ref="banner" class="banner w-full h-full bg-cover bg-center flex" :style="{backgroundImage: `url(${props.image})`}" @mouseenter="startBannerZoom" @mousemove="updateBannerZoom" @mouseleave="resetBannerZoom">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const props = defineProps({
  image: String
})

const banner = ref<HTMLElement>()
const updateBannerZoom = (event: MouseEvent) => {
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
  banner.value!.style.backgroundSize = "102%"
}

const resetBannerZoom = () => {
  banner.value!.style.backgroundSize = "100%"
  banner.value!.style.backgroundPositionX = "50%"
  banner.value!.style.backgroundPositionY = "50%"
}
</script>

<style scoped>
.banner {
  transition: background-position 0.5s, background-size 0.5s;
}
</style>