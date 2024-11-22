<template>
  <div class="w-full min-h-screen flex justify-center relative">
    <NavigationBar class="z-10 bg-white"/>

    <div class="w-full fixed z-[5] max-w-[980px] h-14 top-14 bg-gradient-to-b from-white to-white/0"></div>

    <div class="w-full max-w-[980px] pt-24 z-0 relative mb-4">
      <h1 class="text-[128px] font-[600] leading-[7rem] z-0 fixed">{{ project!.name }}</h1>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "../NavigationBar.vue";
import {useRoute, useRouter} from "vue-router";
import {ProjectService} from "../services/ProjectService.ts";
import {inject} from "vue";
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
</script>

<style scoped>

</style>

<style>
body::-webkit-scrollbar {
  display: none;
}
</style>