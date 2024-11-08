<template>
  <div class="w-full px-20 h-screen max-h-screen overflow-hidden bg-black text-white">
    <div class="header flex justify-between font-[Didot]">
      <div class="flex mt-auto items-center">
        <h2 class="font-thin tracking-tight text-3xl mr-2" style="font-stretch: 1000%">Youri Scheepers</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
      <h1 class="font-thin text-8xl leading-[0.8] mt-6">{{ project.name.toUpperCase() }}</h1>
    </div>

    <div class="min-w-full h-[520px] z-10">
      <div class="banner w-full h-[520px] bg-cover bg-center absolute left-0 z-10" :style="{backgroundImage: 'url('+project.image+')'}">

      </div>
    </div>

    <div class="font-[Spectral] translate-y-[-101px] z-0">
      <h1 class="font-[Didot] name font-thin text-8xl leading-[0.8] mt-6">{{ project.name.toUpperCase() }}</h1>
      <h3 class="underline font-light underline-offset-8 my-6 text-3xl tracking-wide">{{ project.slogan }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ProjectService} from "./services/ProjectService.ts";
import {inject} from "vue";

const route = useRoute()
const projectId = parseInt(route.params.id as string);
const projectService = new ProjectService()
const project = projectService.getProject(projectId)!

const setIcon: (value: string) => {} = inject("setIcon")!
setIcon('')
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
  }

  100% {
    width: calc(100%);
    margin-left: 0;
    filter: grayscale(0%);
    transform: translateY(-101px);
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
</style>