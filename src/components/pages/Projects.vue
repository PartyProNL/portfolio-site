<template>
  <NavigationBar active-page="projects"/>

  <div class="w-full h-screen bg-white flex items-center justify-center overflow-hidden" @wheel="onScroll">
    <div ref="trackElement" class="flex gap-4 track" :style="{transform:'translateX(calc('+-trackPosition+'px + 50% - '+trackOffset+'px))'}">
      <div
          v-for="(project, index) in projects"
          @click="selectProject(index)"
          :class="{'expanded-project-card': index == expandedProject}"
          class="bg-cover project-card translate-x-[0%] relative"
          :style="{
            backgroundImage: `url(${project.image})`,
            backgroundPosition: `${50 + ((index - (trackPercentage * (projects.length - 1)) - trackPercentage)) * 50}% center`,
            filter: `grayscale(${expandedProject == index ? 0 : 100}%)`
          }"
      >
        <p v-if="expandedProject == index" class="absolute w-[600px] font-[600] text-[64px] top-0 left-0 -translate-x-[3px] -translate-y-[80px]">{{ project.name }}</p>
      </div>
    </div>

    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 p-4">3 / 5</div>
  </div>
</template>

<script setup lang="ts">
import {ProjectService} from "../services/ProjectService.ts";
import {computed, ref} from "vue";
import NavigationBar from "../NavigationBar.vue";

const projectService = new ProjectService()
const projects = ref(projectService.getProjects())

const trackElement = ref()
const trackPosition = ref(0)
const trackPercentage = ref(0)
function onScroll(event: WheelEvent) {
  expandedProject.value = -1
  trackPosition.value += event.deltaY / 2

  if(trackPosition.value < 0) {
    trackPosition.value = 0;
  }

  const trackWidth = trackElement.value.clientWidth-280;
  if(trackPosition.value > trackWidth) {
    trackPosition.value = trackWidth
  }

  trackPercentage.value = trackPosition.value / trackWidth
}

function selectProject(index: number) {
  const trackWidth = trackElement.value.clientWidth+40;

  expandedProject.value = index;
  trackPosition.value = index * 300 - index * 8
  trackPercentage.value = trackPosition.value / trackWidth
}

const trackOffset = computed(() => {
  if(expandedProject.value == -1) {
    return 140
  } else {
    return 300
  }
})

const expandedProject = ref(-1)
</script>

<style scoped>
.track {
  transition: transform 0.7s cubic-bezier(0,.35,.44,.98);
}

.project-card {
  height: 420px;
  width: 280px;
  transition: background-position 0.7s cubic-bezier(0,.35,.44,.98),
              width 0.7s cubic-bezier(0,.35,.44,.98),
              filter 0.3s ease-in-out;
}

.expanded-project-card {
  width: 600px;
}
</style>