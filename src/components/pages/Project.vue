<template>
  <div class="w-full min-h-screen flex justify-center relative">
    <NavigationBar class="z-10 bg-white"/>

    <div class="w-full fixed z-[5] max-w-[980px] h-6 top-14 bg-gradient-to-b from-white to-white/0"></div>

    <div class="w-full max-w-[980px] pt-24 z-0 relative">
      <h1 class="text-[128px] font-[600] leading-[7rem] z-0 fixed" :class="{'title': finishedOpening, 'fade-up': !finishedOpening}">{{ project!.name }}</h1>
      <div
          class="w-full aspect-[4/2] bg-cover bg-center z-10 relative mt-[7rem] fade-up"
          :style="{backgroundImage: `url(${project!.image})`, animationDelay: '100ms'}"
      ></div>

      <div class="flex justify-between w-full mt-2 gap-4 font-[500]">
        <p class="flex-shrink max-w-[540px] fade-up" :style="{animationDelay: '150ms'}">{{ project!.intro }}</p>

        <div class="flex gap-1 flex-shrink-0 max-w-[300px] flex-wrap justify-end items-start mb-auto fade-up" :style="{animationDelay: '200ms'}">
          <p class="bg-[#F1F1F1] text-[#5A5A5A] flex-shrink-0 h-fit px-4 py-2 rounded-full" v-for="label in project!.labels">{{ label }}</p>
        </div>
      </div>

      <ProjectBodyRenderer class="fade-up" :style="{animationDelay: '250ms'}" :parts="project!.body"/>

      <div class="w-full min-h-[100vh] flex justify-center items-center flex-col relative mt-40">
        <div class="h-[420px] bg-cover bg-center relative next-project-image" :style="{backgroundImage:`url(${nextProject.image})`}">
          <TextRevealSide :text="nextProject.name" class="absolute w-full font-[600] text-[32px] md:text-[64px] top-0 left-0 -translate-x-[3px] -translate-y-[36px] md:-translate-y-[72px]"></TextRevealSide>

          <div @click="openNextProject" class="group absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer px-8">
            <div class="overflow-hidden h-[14px]">
              <p class="text-[13px] font-[600] discover-text">NEXT PROJECT</p>
            </div>

            <div class="p-4 rounded-full bg-[#F1F1F1] discover-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 group-hover:translate-y-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "../NavigationBar.vue";
import {useRoute, useRouter} from "vue-router";
import {ProjectService} from "../services/ProjectService.ts";
import {inject, onMounted, ref} from "vue";
import ProjectBodyRenderer from "../project-body/render/ProjectBodyRenderer.vue";
import TextRevealSide from "../animation/TextRevealSide.vue";

const route = useRoute()
const router = useRouter()

const projectId = route.params.id as string
const projectService = new ProjectService()
const project = projectService.getProject(projectId)
const nextProject = projectService.getNextProject(projectId)

if(!project) {
  sendBack()
}

const isFirstOpenFunction: () => boolean = inject("isFirstOpen")!
isFirstOpenFunction()

const finishedOpening = ref(false)
setTimeout(() => {
  finishedOpening.value = true
}, 1000)

async function sendBack() {
  await router.push("/")
}

onMounted(() => {
  setTimeout(() => {
    const nextProjectImage = document.querySelector('.next-project-image') as HTMLElement;
    const body = document.body;

    if (nextProjectImage) {
      const stickyStart = (nextProjectImage.getBoundingClientRect().top - body.getBoundingClientRect().top) - window.innerHeight * 0.5;
      const stickyEnd = stickyStart + window.innerHeight/4 + 56; // Adjust end point (100vh after start)

      // Set CSS variables dynamically
      body.style.setProperty("--next-project-image-start", `${stickyStart}px`);
      body.style.setProperty("--next-project-image-end", `${stickyEnd}px`);
    }
  }, 100)
});

async function openNextProject() {
  await router.push("/project/"+nextProject.id)
}
</script>

<style scoped>
.title {
  animation: title-disappear cubic-bezier(1,0,1,0) forwards;
  animation-timeline: scroll(root block);
  animation-range: 0vh 200px;
}

@keyframes title-disappear {
  from {
    opacity: 1
  }

  to {
    opacity: 0;
  }
}

.fade-up {
  animation: fade-up;
  animation-duration: 1.0s;
  animation-timing-function: cubic-bezier(.37,.01,.12,.99);
  animation-fill-mode: forwards;
  opacity: 1;
  transform: translateY(100vh);
}

@keyframes fade-up {
  from {
    opacity: 1;
    transform: translateY(100vh);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.next-project-image {
  width: 280px;
  animation: next-project-widen ease-out forwards;
  animation-timeline: scroll(root block);
  animation-range: var(--next-project-image-start) var(--next-project-image-end);
}

@keyframes next-project-widen {
  from {
    width: 280px;
  }

  to {
    width: 600px;
  }
}
</style>

<style>
body::-webkit-scrollbar {
  display: none;
}
</style>