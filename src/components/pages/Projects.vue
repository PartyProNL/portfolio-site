<template>
  <div class="w-full h-screen overflow-hidden">
    <Intro v-if="!openingFinished"/>
    <NavigationBar :class="{ 'navigation-bar': isFirstOpen }" active-page="projects"/>

    <div @touchstart="startTouchDragging" @touchmove="onTouchDrag" @touchend="stopTouchDragging" @mousedown="startDragging" @mousemove="onDrag" @mouseup="stopDragging" :class="{'track-move-up': isOpeningProject}" class="w-full h-screen  flex items-center justify-center overflow-hidden" @wheel="onScroll">
      <div v-if="openingFinished" ref="trackElement" class="flex gap-4 track" :style="{transform:'translateX(calc('+-trackPosition+'px + 50% - '+trackOffset+'px))'}">
        <div
            v-for="(project, index) in projects"
            @click="selectProject()"
            :class="{'expanded-project-card': index == expandedProject, 'project-card-appear': isFirstOpen}"
            class="bg-cover project-card relative"
            :style="{
              backgroundImage: `url(${project.image})`,
              backgroundPosition: `${getBackgroundPercentage(index)}% center`,
              filter: `grayscale(${expandedProject == index ? 0 : 100}%)`,
              animationDelay: index*50+'ms'
            }"
        >
          <TextRevealSide :class="{'fade-out': isOpeningProject}" :text="project.name" v-if="expandedProject == index" class="absolute w-full font-[600] text-[32px] md:text-[64px] top-0 left-0 -translate-x-[3px] -translate-y-[36px] md:-translate-y-[72px] select-none"></TextRevealSide>
        </div>
      </div>

      <div :class="{'fade-out': isOpeningProject}" @click="openProject(expandedProject)" v-if="expandedProject != -1" class="group absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer px-8">
        <div class="overflow-hidden h-[14px]">
          <p class="text-[13px] font-[600] discover-text">DISCOVER</p>
        </div>

        <div class="p-4 rounded-full bg-[#F1F1F1] discover-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 group-hover:translate-y-1 transition-transform">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>

      <div
          class="absolute bottom-0 left-1/2 -translate-x-1/2 p-4 flex gap-2"
          :class="{'project-counter': isFirstOpen, 'fade-out': isOpeningProject}"
      >
        <div class="overflow-hidden h-6">
          <div v-for="i in projects.length" class="project-index-ticker" :style="{transform:'translateY(-'+centerProjectIndex*24+'px)'}">{{ i }}</div>
        </div>
        <div>/</div>
        <div>{{projects.length}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ProjectService} from "../services/ProjectService.ts";
import {computed, inject, ref} from "vue";
import NavigationBar from "../NavigationBar.vue";
import TextRevealSide from "../animation/TextRevealSide.vue";
import Intro from "../animation/Intro.vue";
import {useRouter} from "vue-router";
import {setupSEO} from "../util/SEO.ts";

const projectService = new ProjectService()
const projects = ref(projectService.getProjects())

projects.value.forEach((it) => {
  preloadImage(it.image)
})

setupSEO(
    "Youri Scheepers",
    "A full-stack developer, who loves Kotlin, and is currently studying at AUAS. Take a look at some of my work and learn about me.",
    "./img/banner-1.jpg"
)

const trackElement = ref()
const trackPosition = ref(0)
const trackPercentage = ref(0)
function onScroll(event: WheelEvent) {
  trackPosition.value += event.deltaY / 2
  updateTrackPositionAndPercentage()
}

function updateTrackPositionAndPercentage() {
  expandedProject.value = -1

  if(trackPosition.value < 0) {
    trackPosition.value = 0;
  }

  const trackWidth = trackElement.value.clientWidth-280;
  if(trackPosition.value > trackWidth) {
    trackPosition.value = trackWidth
  }

  trackPercentage.value = trackPosition.value / trackWidth
  updateCurrentProjectIndex()
}

function selectProject() {
  if(Date.now() - releasedAt < 200) return

  const index = centerProjectIndex.value
  const trackWidth = trackElement.value.clientWidth+40;

  expandedProject.value = index;
  // TODO: Change trackposition so that it takes width of screen into account, take off 160px when screen is below 768px wide
  trackPosition.value = index * 300 - index * 8
  trackPercentage.value = trackPosition.value / trackWidth
  centerProjectIndex.value = index
}

const centerProjectIndex = ref(0)
function updateCurrentProjectIndex() {
  centerProjectIndex.value = Math.ceil((trackPercentage.value - ((50 / projects.value.length) / 100)) * (projects.value.length - 1))
}

const trackOffset = computed(() => {
  if(expandedProject.value == -1) {
    return 140
  } else {
    return 300
  }
})

const expandedProject = ref(-1)

function getBackgroundPercentage(projectIndex: number): number {
  const projectPercentage = projectIndex/(projects.value.length-1)
  const deltaPercentage = projectPercentage - trackPercentage.value
  const deltaPixels = deltaPercentage * (trackElement.value ? trackElement.value.clientWidth : 0)
  return deltaPixels * 0.05 + 50;
}

const isFirstOpenFunction: () => boolean = inject("isFirstOpen")!
const isFirstOpen = ref(isFirstOpenFunction())
const openingFinished = ref(!isFirstOpen.value)

if(isFirstOpen.value) {
  setTimeout(() => {
    openingFinished.value = true
  }, 2000)
}

const router = useRouter()
const isOpeningProject = ref(false)
function openProject(index: number) {
  isOpeningProject.value = true
  const project = projects.value[index]
  setTimeout(() => {
    router.push("/project/"+project.id)
  }, 1000)
}

function preloadImage(src: string) {
  const img = new Image();
  img.src = src;
}

// Dragging
let isDown = false
let startX = 0
let startTrackPosition = 0
let startedAt = 0
let releasedAt = 0

function startDragging(event: MouseEvent) {
  event.preventDefault()
  startDrag(event.clientX)
}

function onDrag(event: MouseEvent) {
  if(!isDown) return
  event.preventDefault()
  updateDrag(event.clientX)
}

function stopDragging(event: MouseEvent) {
  event.preventDefault()
  stopDrag()
}

function startTouchDragging(event: TouchEvent) {
  event.preventDefault()
  startDrag(event.touches[0].clientX)
}

function onTouchDrag(event: TouchEvent) {
  if(!isDown) return
  event.preventDefault()
  updateDrag(event.touches[0].clientX)
}

function stopTouchDragging(event: TouchEvent) {
  event.preventDefault()
  stopDrag()
}

function startDrag(x: number) {
  isDown = true
  startX = x
  startTrackPosition = trackPosition.value
  startedAt = Date.now()
}

function updateDrag(x: number) {
  const deltaX = startX - x;
  trackPosition.value = startTrackPosition + deltaX * 1.3
  updateTrackPositionAndPercentage()
}

function stopDrag() {
  isDown = false
  if(Date.now() - startedAt > 100) releasedAt = Date.now()
}
</script>

<style scoped>
.track {
  transition: transform 0.5s cubic-bezier(0,.35,.44,.98);
}

.project-card {
  height: 420px;
  width: 280px;
  transition: background-position 0.5s cubic-bezier(0,.35,.44,.98),
              width 0.5s cubic-bezier(0,.35,.44,.98),
              filter 0.5s ease-in-out;
}

.expanded-project-card {
  width: 280px;
}

@media (min-width: 768px) {
  .expanded-project-card {
    width: 600px;
  }
}

.project-index-ticker {
  transition: transform 0.5s cubic-bezier(0,.63,.44,.98);
}

.navigation-bar {
  animation: navigation-bar-enter;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0,.63,.22,.99);
  opacity: 0;
  animation-delay: 2s;
}

@keyframes navigation-bar-enter {
  0% {
    transform: translateY(-100px);
    opacity: 0
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.project-counter {
  animation: project-counter-appear;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0,.63,.22,.99);
  opacity: 0;
  animation-delay: 2s;
}

@keyframes project-counter-appear {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.project-card-appear {
  animation: project-card-appear;
  animation-duration: 1.0s;
  animation-timing-function: cubic-bezier(0,.62,.46,1);
  animation-fill-mode: forwards;
  transform: translateX(400%);
}

@keyframes project-card-appear {
  0% {
    transform: translateX(400%);
  }

  100% {
    transform: translateX(0);
  }
}

.discover-arrow {
  animation: discover-arrow-appear;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes discover-arrow-appear {
  0% {
    transform: scale(100%);
    opacity: 0;
  }

  100% {
    transform: scale(100%);
    opacity: 1;
  }
}

.discover-text {
  animation: discover-text-appear;
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0,.63,.44,.98);
  animation-fill-mode: forwards;
}

@keyframes discover-text-appear {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Disappear */
.fade-out {
  animation: fade-out;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.track-move-up {
  animation: track-move-up;
  animation-duration: 1.0s;
  animation-timing-function: cubic-bezier(.88,.01,.63,.99);
  animation-fill-mode: forwards;
}

@keyframes track-move-up {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(calc(-50vh - 210px));
  }
}
</style>