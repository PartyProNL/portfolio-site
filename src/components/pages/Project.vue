<template>
  <div class="w-full min-h-screen flex justify-center relative">
    <NavigationBar class="z-10 bg-white"/>

    <div class="w-full fixed z-[5] max-w-[980px] h-6 top-14 bg-gradient-to-b from-white to-white/0"></div>

    <div class="w-full max-w-[980px] pt-24 z-0 relative px-8">
      <h1 class="text-[32px] lg:text-[100px] font-[600] leading-[1.5rem] lg:leading-[6rem] z-0 fixed" :class="{'title': finishedOpening, 'fade-up': !finishedOpening}">{{ project!.name }}</h1>
      <div
          class="w-full aspect-[4/2] bg-cover bg-center z-10 relative mt-[1.5rem] lg:mt-[6rem] fade-up"
          :style="{backgroundImage: `url(${project!.coverImage})`, animationDelay: '100ms'}"
      ></div>

      <div class="flex flex-col-reverse lg:flex-row justify-between w-full mt-2 gap-4 font-[500] mb-8">
        <p class="flex-shrink max-w-[540px] fade-up tracking-wide" :style="{animationDelay: '200ms'}">{{ project!.intro }}</p>

        <div class="flex gap-1 flex-shrink-0  lg:max-w-[300px] flex-wrap justify-end items-start mb-auto fade-up" :style="{animationDelay: '150ms'}">
          <p class="bg-[#F1F1F1] text-[#5A5A5A] flex-shrink-0 h-fit px-4 py-2 rounded-full" v-for="label in project!.labels">{{ label }}</p>
        </div>
      </div>

      <ProjectBodyRenderer @loaded="updateScrollAnimation" class="fade-up" :style="{animationDelay: '250ms'}" :parts="project!.body"/>

      <div class="w-full min-h-[150vh] relative">
        <div class="absolute top-20 left-1/2 -translate-x-1/2 text-[48px] font-[600]">Next project</div>

        <div class="w-full min-h-[100vh] flex justify-center items-center flex-col sticky mt-40 top-0">
          <div class="h-[420px] bg-cover bg-center relative next-project-image" :style="{backgroundImage:`url(${nextProject.image})`}" :class="{'next-project-move-up': isOpeningProject}">
            <TextRevealSide :class="{'fade-out': isOpeningProject}" v-if="atBottom" :text="nextProject.name" class="absolute w-full font-[600] text-[32px] md:text-[64px] top-0 left-0 -translate-x-[3px] -translate-y-[36px] md:-translate-y-[72px]"></TextRevealSide>

            <div :class="{'fade-out': isOpeningProject}" v-if="atBottom" @click="openNextProject" class="group absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer px-8">
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
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "../NavigationBar.vue";
import {useRoute, useRouter} from "vue-router";
import {ProjectService} from "../services/ProjectService.ts";
import {inject, onMounted, onUnmounted, ref} from "vue";
import ProjectBodyRenderer from "../project-body/render/ProjectBodyRenderer.vue";
import TextRevealSide from "../animation/TextRevealSide.vue";
import {setupSEO} from "../util/SEO.ts";

const route = useRoute()
const router = useRouter()

const projectId = route.params.id as string
const projectService = new ProjectService()
const project = projectService.getProject(projectId)
const nextProject = projectService.getNextProject(projectId)

if(!project) {
  sendBack()
}

setupSEO(
    project!.name,
    project!.slogan,
    project!.image
)

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
    updateScrollAnimation()
  }, 100)
});

const updateScrollAnimation = () => {
  const nextProjectImage = document.querySelector('.next-project-image') as HTMLElement;
  const body = document.body;

  if (nextProjectImage) {
    const stickyStart = (nextProjectImage.getBoundingClientRect().top - body.getBoundingClientRect().top) - window.innerHeight * 0.25;
    const stickyEnd = stickyStart + window.innerHeight/2; // Adjust end point (100vh after start)

    // Set CSS variables dynamically
    body.style.setProperty("--next-project-image-start", `${stickyStart}px`);
    body.style.setProperty("--next-project-image-end", `${stickyEnd}px`);
  }
}

const isOpeningProject = ref(false)
async function openNextProject() {
  isOpeningProject.value = true
  setTimeout(async () => {
    await router.push("/project/"+nextProject.id)
  }, 1000)
}

const atBottom = ref(false)
const handleScroll = () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.documentElement.offsetHeight - 40;

  atBottom.value = scrollPosition >= pageHeight
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', updateScrollAnimation)
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('load', updateScrollAnimation)
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

.next-project-move-up {
  animation: next-project-move-up;
  animation-duration: 1.0s;
  animation-timing-function: cubic-bezier(.88,.01,.63,.99);
  animation-fill-mode: forwards;
  width: 600px;
}

@keyframes next-project-move-up {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(calc(-50vh - 210px));
  }
}
</style>

<style>
body::-webkit-scrollbar {
  display: none;
}
</style>