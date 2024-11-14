<template>
  <div class="w-full min-h-screen bg-black">
    <div :class="{ 'quick-color-transition': isTransitioningToAbout, 'page-fade-out': isTransitioningToAbout }" class="w-full px-20 min-h-screen bg-black text-white page" :style="{backgroundColor: backgroundColor, color: textColor}">
      <div :class="{ 'header-back': isTransitioning}" class="header flex justify-between font-[Didot]">
        <div class="flex mt-auto items-center">
          <h2 class="font-thin tracking-tight text-3xl mr-2" style="font-stretch: 1000%">Youri Scheepers</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
        <h1 class="font-thin text-8xl leading-[0.8] mt-6">{{ project.name.toUpperCase() }}</h1>
      </div>

      <div :class="{ 'banner-parent-back': isTransitioning}" class="banner-parent min-w-full h-[520px] z-10">
        <div :class="{ 'banner-back': isTransitioning}" class="banner w-full h-[520px] bg-cover bg-center absolute left-0 z-10" :style="{backgroundImage: 'url('+project.image+')'}">
          <div :class="{ 'back-button-back': isTransitioning}" class="absolute font-serif top-4 left-20 translate-x-1/2 bg-white text-black back-button opacity-0 flex items-center text-lg">
            <p @click="goBack" @mouseenter="showIcon('left')" @mouseleave="setIcon('')"  class="h-full pl-12 pr-6 py-4">Projects</p>

            <p @click="toAbout" @mouseenter="showIcon('banner')" @mouseleave="setIcon('')" class="h-full pl-6 pr-12 py-4">About me</p>
          </div>
        </div>
      </div>

      <div class="font-[Spectral] translate-y-[-101px] z-0 flex">
        <div class="w-full">
          <h1 class="font-[Didot] name font-thin text-8xl leading-[0.8] mt-6">{{ project.name.toUpperCase() }}</h1>
          <h3 class="underline font-light underline-offset-8 my-6 text-3xl tracking-wide">{{ project.slogan }}</h3>

          <div :class="{ 'body-disappear': isTransitioning}" class="body">
            <ProjectBodyRenderer :parts="project.body"/>
          </div>
        </div>
        <div :class="{ 'body-disappear': isTransitioning}" class="body ml-40 mt-40 mr-8">
          <p class="font-bold">Dokkie</p>
          <p>Design</p>
        </div>
      </div>
    </div>

    <PageFooter :background-color="textColor" :text-color="backgroundColor"></PageFooter>
  </div>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {ProjectService} from "./services/ProjectService.ts";
import {inject, ref} from "vue";
import ProjectBodyRenderer from "./project-body/render/ProjectBodyRenderer.vue";
import PageFooter from "./PageFooter.vue";
import {useHead} from "@unhead/vue";

const backgroundColor = ref("#000000")
const textColor = ref("#FFFFFF")

const route = useRoute()
const projectId = parseInt(route.params.id as string);
const projectService = new ProjectService()
const project = projectService.getProject(projectId)!

const pageImage = `${window.location.origin}${project.image.replace("./", "/")}`
useHead({
  title: project.name,
  meta: [
    // Basic tags
    { name: "description", content: project.slogan},

    // Open Graph/Facebook tags
    { property: 'og:title', content: project.name },
    { property: 'og:description', content: project.slogan },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: pageImage },
    { property: 'og:url', content: window.location.href },

    // Twitter card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: project.name },
    { name: 'twitter:description', content: project.slogan },
    { name: 'twitter:image', content: pageImage }
  ],
  link: [
    // Canonical URL for the page
    { rel: 'canonical', href: window.location.href },
  ]
})

setTimeout(() => {
  backgroundColor.value = project.backgroundColor
  textColor.value = project.textColor
}, 300)

const setIcon: (value: string) => {} = inject("setIcon")!
setIcon('')

const isTransitioning = ref(false)
const router = useRouter()
const goBack = () => {
  if(isTransitioning.value) return;
  isTransitioning.value = true;
  backgroundColor.value = "#000000"
  textColor.value = "#FFFFFF"
  setIcon("")

  setTimeout(() => {
    router.push("/?from="+projectId)
  }, 1000)
}

const isTransitioningToAbout = ref(false)
const toAbout = () => {
  if(isTransitioningToAbout.value) return;
  isTransitioningToAbout.value = true;
  backgroundColor.value = "#000000"
  textColor.value = "#FFFFFF"
  setIcon("")

  setTimeout(() => {
    router.push("/about")
  }, 500)
}

const showIcon = (icon: string) => {
  if(!isTransitioning.value) setIcon(icon)
}
</script>

<style scoped>
.banner {
  background-size: 113%;
  animation: banner-expand 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes banner-expand {
  0% {
    width: calc(100% - 160px);
    margin-left: 80px;
    filter: grayscale(100%);
    transform: translateY(0);
    height: 520px;
  }

  100% {
    width: calc(100%);
    margin-left: 0;
    filter: grayscale(0%);
    transform: translateY(-101px);
    height: 400px;
  }
}

.header {
  animation: header-move 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes header-move {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}

.name {
  animation: name-appear 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-delay: 0.7s;
  opacity: 0;
}

@keyframes name-appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.page {
  transition: color, background-color 1s ease-in-out;
}

.back-button {
  animation: back-appear 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  opacity: 0;
}

@keyframes back-appear {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.banner-parent {
  animation: banner-parent-move 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
}

@keyframes banner-parent-move {
  0% {
    height: 520px
  }
  100% {
    height: 400px;
  }
}

.body {
  animation: body-appear 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-delay: 0.7s;
  opacity: 0;
}

@keyframes body-appear {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/**
Transitions back
 */
.banner-back {
  background-size: 113%;
  animation: banner-expand-back 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes banner-expand-back {
  100% {
    width: calc(100% - 160px);
    margin-left: 80px;
    filter: grayscale(100%);
    transform: translateY(0);
    height: 520px;
  }

  0% {
    width: calc(100%);
    margin-left: 0;
    filter: grayscale(0%);
    transform: translateY(-101px);
    height: 400px;
  }
}

.banner-parent-back {
  animation: banner-parent-move-back 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes banner-parent-move-back {
  100% {
    height: 520px
  }
  0% {
    height: 400px;
  }
}

.header-back {
  animation: header-move-back 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes header-move-back {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.back-button-back {
  animation: back-disappear 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes back-disappear {
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
  0% {
    opacity: 1;
    transform: translateY(0);
  }
}

.body-disappear {
  animation: body-disappear 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes body-disappear {
  100% {
    opacity: 0;
  }
  0% {
    opacity: 1;
  }
}

/* Fade to about */
.quick-color-transition {
  transition: color, background-color 0.5s ease-in-out;
}

.page-fade-out {
  animation: page-fade-out 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes page-fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

<style>
body::-webkit-scrollbar {
  display: none;
}
</style>