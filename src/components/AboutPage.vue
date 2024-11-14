<template>
 <div :class="{disappear: isTransitioning}" class="font-[Didot] text-white w-full h-screen flex bg-white gap-[1px] body overflow-hidden">
   <div class="bg-black w-1/2 flex flex-col justify-between">
     <div class="px-4 py-4">
      <div @click="toPage('/')" @mouseenter="setIcon('left')" @mouseleave="setIcon('')"  class="bg-white text-black flex items-center gap-2 px-4 py-2 w-fit pr-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        <p>Back to projects</p>
      </div>

       <h2 class="mt-8 text-[7rem] leading-[6rem]">How do you want to get to know me?</h2>
     </div>

     <div class="text-slate-700">
       <h1 class="text-[6rem] leading-[5rem] tracking-tighter">YOURI</h1>
       <h2 class="text-[6rem] leading-[5rem] tracking-tight">SCHEEPERS</h2>
     </div>
   </div>

   <div class="w-1/2 flex flex-col bg-white gap-[1px]">
     <div @click="toPage('/about/professional')" @mouseenter="setIcon('professional')" @mouseleave="setIcon('')" class="bg-black h-full px-20 flex flex-col justify-center hover:text-black transition-colors relative group">
       <CascadingBackground :reverse="false"/>
       <h3 class="text-4xl z-10">On a</h3>
       <h2 class="text-7xl z-10 tracking-tight group-hover:tracking-widest transition-all">PROFESSIONAL</h2>
       <h3 class="text-4xl z-10">Level</h3>
     </div>

     <div @click="toPage('/about/personal')" @mouseenter="setIcon('personal')" @mouseleave="setIcon('')" class="bg-black h-full px-20 flex flex-col justify-center hover:text-black transition-colors relative group">
       <CascadingBackground :reverse="true"/>
       <h3 class="text-4xl z-10">On a</h3>
       <h2 class="text-7xl z-10 tracking-tight group-hover:tracking-widest transition-all">PERSONAL</h2>
       <h3 class="text-4xl z-10">Level</h3>
     </div>
   </div>
 </div>
</template>

<script setup lang="ts">
import {inject, ref} from "vue";
import CascadingBackground from "./util/CascadingBackground.vue";
import {useRouter} from "vue-router";
import {setupSEO} from "./util/SEO.ts";

const setIcon: (value: string) => {} = inject("setIcon")!
setIcon('')

setupSEO(
    "About me",
    "Choose how you want to learn more about me, either professionally or personally",
    "./img/banner-1.jpg"
)

const router = useRouter()

const isTransitioning = ref(false)
const toPage = (path: string) => {
  if(isTransitioning.value) return;

  isTransitioning.value = true;
  setIcon('')
  setTimeout(() => {
    router.push(path)
  }, 500)
}
</script>

<style scoped>
.body {
  animation: body-appear 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes body-appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
</style>