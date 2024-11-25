<template>
  <div class="w-full min-h-screen flex justify-center relative">
    <NavigationBar class="z-10 bg-white"/>

    <div class="w-full fixed z-[5] max-w-[980px] h-14 top-14 bg-gradient-to-b from-white to-white/0"></div>

    <div class="w-full max-w-[980px] pt-24 z-0 relative">
      <h1 class="text-[128px] font-[600] leading-[7rem] z-0 fixed title">{{ project!.name }}</h1>
      <div
          class="w-full aspect-[4/2] bg-cover bg-center z-10 relative mt-[7rem]"
          :style="{backgroundImage: `url(${project!.image})`}"
      ></div>

      <div class="flex justify-between w-full mt-2 gap-4 font-[500]">
        <p class="flex-shrink max-w-[540px]">{{ project!.intro }}</p>

        <div class="flex gap-1 flex-shrink-0 max-w-[300px] flex-wrap justify-end items-start mb-auto">
          <p class="bg-[#F1F1F1] text-[#5A5A5A] flex-shrink-0 h-fit px-4 py-2 rounded-full" v-for="label in project!.labels">{{ label }}</p>
        </div>
      </div>

      <ProjectBodyRenderer :parts="project!.body"/>

      <div class="w-full min-h-[140vh] flex justify-start items-center flex-col relative mt-40">
        <h3 class="text-[48px] font-[600] sticky top-1/3 mb-20">Next project</h3>
        <div class="h-[420px] bg-cover bg-center sticky top-1/2 -translate-y-1/2 mt-40 next-project-image" :style="{backgroundImage:`url(${project!.image})`}">

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "../NavigationBar.vue";
import {useRoute, useRouter} from "vue-router";
import {ProjectService} from "../services/ProjectService.ts";
import {inject, onMounted} from "vue";
import ProjectBodyRenderer from "../project-body/render/ProjectBodyRenderer.vue";

const route = useRoute()
const router = useRouter()

const projectId = route.params.id as string
const projectService = new ProjectService()
const project = projectService.getProject(projectId)

if(!project) {
  sendBack()
}

const isFirstOpenFunction: () => boolean = inject("isFirstOpen")!
isFirstOpenFunction()

async function sendBack() {
  await router.push("/")
}

onMounted(() => {
  const nextProjectImage = document.querySelector('.next-project-image') as HTMLElement;
  const body = document.body;

  if (nextProjectImage) {
    const stickyStart = (nextProjectImage.getBoundingClientRect().top - body.getBoundingClientRect().top) - window.innerHeight * 0.25;
    const stickyEnd = stickyStart + window.innerHeight / 2; // Adjust end point (100vh after start)

    // Set CSS variables dynamically
    body.style.setProperty("--next-project-image-start", `${stickyStart}px`);
    body.style.setProperty("--next-project-image-end", `${stickyEnd}px`);
  }
});
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