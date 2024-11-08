<template>
  <div class="w-full px-20 h-screen max-h-screen overflow-hidden text-[#280003] cursor-none">
    <div class="flex justify-between font-[Spectral]">
      <h2 class="font-semibold tracking-tight text-3xl mt-auto" style="font-stretch: 1000%">Youri Scheepers</h2>
      <h1 class="font-regular tracking-tight text-6xl mt-6 mb-2">{{ getCurrentProject().name }}</h1>
    </div>

    <div class="min-w-full h-[520px] mt-4 relative">
      <FollowingImage v-for="(project, index) in projects" :style="{ transform: 'translateX('+getCarouselTranslation(index)+')'}" class="absolute carousel-transition" @mouseleave="activeIcon = ''" :image="project.image">
        <div v-if="index == currentProjectIndex" @click="previousProject" @mouseenter="activeIcon = 'left'" class="h-full w-[20%]"></div>
        <div v-if="index == currentProjectIndex" @mouseenter="activeIcon = 'banner'" class="h-full w-[60%]"></div>
        <div v-if="index == currentProjectIndex" @click="nextProject" @mouseenter="activeIcon = 'right'" class="h-full w-[20%]"></div>
      </FollowingImage>
    </div>

    <div class="font-[Salo]">
      <h3 class="underline font-medium underline-offset-8 my-6 text-3xl tracking-wide">{{ getCurrentProject().slogan }}</h3>
    </div>

    <div ref="mouseElement" class="size-16 top-0 left-0 absolute pointer-events-none text-white">
      <div ref="mouseInner" class="size-16 bg-[#586F6B] rounded-full flex justify-center items-center mouse-scale">
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
  </div>
</template>

<script setup lang="ts">
import { ref} from "vue";
import FollowingImage from "./util/FollowingImage.vue";
import {ProjectService} from "./services/ProjectService.ts";
import {Project} from "./models/Project.ts";

const mouseElement = ref<HTMLElement>()
const mouseInner = ref<HTMLElement>()
const activeIcon = ref()

const projectService = new ProjectService();
const projects = ref(projectService.getProjects());
const currentProjectIndex = ref(0)

const getCarouselTranslation = (index: number): string => {
  return `calc(${(index-currentProjectIndex.value)*100}% + ${(index-currentProjectIndex.value)*32}px)`;
}

const getCurrentProject = (): Project => { return projects.value[currentProjectIndex.value]; }

document.addEventListener("mousemove", (event: MouseEvent) => {
  let scale = 1;
  if(activeIcon.value == '') scale = 0.25;

  mouseElement.value!.style.transform = `translate(${event.x-32}px, ${event.y-32}px)`
  mouseInner.value!.style.transform = `scale(${scale})`
})

const nextProject = () => {
  currentProjectIndex.value++
}

const previousProject = () => {
  currentProjectIndex.value--
}
</script>

<style scoped>
.mouse-scale {
  transform-origin: center;
  transition: transform 0.2s ease-in-out;
}

.carousel-transition {
  transition: transform 1s cubic-bezier(.27,0,.15,1);
}
</style>