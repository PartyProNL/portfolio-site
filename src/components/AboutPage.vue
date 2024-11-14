<template>
 <div :class="{disappear: isTransitioning}" class="font-[Didot] text-white w-full h-screen flex bg-white gap-[1px] body overflow-hidden">
   <div class="bg-black w-1/2 flex flex-col justify-between">
     <div class="px-4 py-4">
      <div @click="backToProjects" @mouseenter="setIcon('left')" @mouseleave="setIcon('')"  class="bg-white text-black flex items-center gap-2 px-4 py-2 w-fit pr-6">
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
     <div @mouseenter="setIcon('professional')" @mouseleave="setIcon('')" class="bg-black h-full px-20 flex flex-col justify-center hover:text-black transition-colors relative group">
       <CascadingBackground :reverse="false"/>
       <h3 class="text-4xl z-10">On a</h3>
       <h2 class="text-7xl z-10 tracking-tight group-hover:tracking-widest transition-all">PROFESSIONAL</h2>
       <h3 class="text-4xl z-10">Level</h3>
     </div>

     <div @mouseenter="setIcon('personal')" @mouseleave="setIcon('')" class="bg-black h-full px-20 flex flex-col justify-center hover:text-black transition-colors relative group">
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
import {useHead} from "@unhead/vue";

const setIcon: (value: string) => {} = inject("setIcon")!
setIcon('')

const pageTitle = "About me"
const pageDescription = "Choose how you want to learn more about me, either professionally or personally"
const pageImage = `${window.location.origin}/img/banner-1.jpg`
useHead({
  title: pageTitle,
  meta: [
    // Basic tags
    { name: "description", content: pageDescription},

    // Open Graph/Facebook tags
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: pageImage },
    { property: 'og:url', content: window.location.href },

    // Twitter card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: pageImage }
  ],
  link: [
    // Canonical URL for the page
    { rel: 'canonical', href: window.location.href },
  ]
})

const router = useRouter()

const isTransitioning = ref(false)
const backToProjects = () => {
  if(isTransitioning.value) return;

  isTransitioning.value = true;
  setIcon('')
  setTimeout(() => {
    router.push("/")
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
  animation: disappear 0.5s;
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