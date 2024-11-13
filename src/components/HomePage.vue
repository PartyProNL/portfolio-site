<template>
  <div class="w-full px-20 h-screen max-h-screen overflow-hidden bg-black text-white">
    <div class="flex justify-between font-[Didot]">
      <div class="flex mt-auto items-center" @mouseenter="setIcon('banner')" @mouseleave="setIcon('')" @click="openAbout">
        <h2 class="font-thin tracking-tight text-3xl mr-2" style="font-stretch: 1000%">Youri Scheepers</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
      <h1 class="font-thin text-8xl leading-[0.8] mt-6">{{ getCurrentProject().name.toUpperCase() }}</h1>
    </div>

    <div class="min-w-full h-[520px] relative">
      <FollowingImage :class="{ 'carousel-transition': !isCarouselJumping, disappear: isTransitioning && currentProjectIndex !== -2, appear: currentProjectIndex !== -2 && !pageOpenPassed }" :enabled="false"  :style="{ transform: 'translateX('+getCarouselTranslation(-2)+')'}" class="absolute" :image="projects[projects.length-2].image"></FollowingImage>
      <FollowingImage :class="{ 'carousel-transition': !isCarouselJumping, disappear: isTransitioning && currentProjectIndex !== -1, appear: currentProjectIndex !== -1 && !pageOpenPassed }" :enabled="false"  :style="{ transform: 'translateX('+getCarouselTranslation(-1)+')'}" class="absolute" :image="projects[projects.length-1].image"></FollowingImage>

      <FollowingImage :class="{ 'carousel-transition': !isCarouselJumping, disappear: isTransitioning && currentProjectIndex !== index, appear: currentProjectIndex !== index && !pageOpenPassed }" :enabled="!isTransitioning" v-for="(project, index) in projects" :style="{ transform: 'translateX('+getCarouselTranslation(index)+')'}" class="absolute" @mouseleave="setIcon('')" :image="project.image">
        <div v-if="index == currentProjectIndex" @click="previousProject" @mouseenter="setIcon('left')" class="h-full w-[20%]"></div>
        <div @click="openProject(index)" v-if="index == currentProjectIndex" @mouseenter="setIcon('banner')" class="h-full w-[60%]"></div>
        <div v-if="index == currentProjectIndex" @click="nextProject" @mouseenter="setIcon('right')" class="h-full w-[20%]"></div>
      </FollowingImage>

      <FollowingImage :class="{ 'carousel-transition': !isCarouselJumping, disappear: isTransitioning && currentProjectIndex !== projects.length, appear: currentProjectIndex !== projects.length && !pageOpenPassed }" :enabled="false"  :style="{ transform: 'translateX('+getCarouselTranslation(projects.length)+')'}" class="absolute" :image="projects[0].image"></FollowingImage>
      <FollowingImage :class="{ 'carousel-transition': !isCarouselJumping, disappear: isTransitioning && currentProjectIndex !== projects.length+1, appear: currentProjectIndex !== projects.length+1 && !pageOpenPassed }" :enabled="false"  :style="{ transform: 'translateX('+getCarouselTranslation(projects.length+1)+')'}" class="absolute" :image="projects[1].image"></FollowingImage>
    </div>

    <div class="font-[Spectral]">
      <h3 class="underline font-light underline-offset-8 my-6 text-3xl tracking-wide">{{ getCurrentProject().slogan }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import {inject, ref} from "vue";
import FollowingImage from "./util/FollowingImage.vue";
import {ProjectService} from "./services/ProjectService.ts";
import {Project} from "./models/Project.ts";
import {useRoute, useRouter} from "vue-router";

const setIcon: (value: string) => {} = inject("setIcon")!

const projectService = new ProjectService();
const projects = ref(projectService.getProjects());
const currentProjectIndex = ref(0)

const route = useRoute()
const router = useRouter()
if(route.query.from) {
  currentProjectIndex.value = parseInt(route.query.from as string)
  router.replace(Object.assign({}, route.query))
}

const getCarouselTranslation = (index: number): string => {
  return `calc(${(index-currentProjectIndex.value)*100}% + ${(index-currentProjectIndex.value)*32}px)`;
}

const getCurrentProject = (): Project => {
  if(currentProjectIndex.value == -1) return projects.value[projects.value.length-1]
  if(currentProjectIndex.value == projects.value.length) return projects.value[0]
  return projects.value[currentProjectIndex.value];
}

const nextProject = () => {
  currentProjectIndex.value++

  // Move to correct position if at end of carousel
  if(currentProjectIndex.value == projects.value.length) {
    setTimeout(() => {
      isCarouselJumping.value = true
      currentProjectIndex.value = 0

      setTimeout(() => {
        isCarouselJumping.value = false
      }, 10)
    }, 1000)
  }
}

const isCarouselJumping = ref(false)
const previousProject = () => {
  currentProjectIndex.value--

  // Move to correct position if at end of carousel
  if(currentProjectIndex.value == -1) {
    setTimeout(() => {
      isCarouselJumping.value = true
      currentProjectIndex.value = projects.value.length-1

      setTimeout(() => {
        isCarouselJumping.value = false
      }, 10)
    }, 1000)
  }
}

const isTransitioning = ref(false)
const openProject = (id: number) => {
  if(isTransitioning.value) return;
  isTransitioning.value = true;

  setTimeout(() => {
    router.push("/project/"+id)
  }, 500)
}

const openAbout = () => {
  router.push("/about")
}

let pageOpenPassed = false
setTimeout(() => {
  pageOpenPassed = true
}, 10)
</script>

<style scoped>
.carousel-transition {
  transition: transform 1s cubic-bezier(.27,0,.15,1);
}

.appear {
  animation: appear 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  opacity: 0;
}

.disappear {
  animation: disappear 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes disappear {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>