<template>
  <div :class="{disappear: isTransitioning}" class="bg-black text-white w-full min-h-screen font-serif">
    <div class="flex w-full h-full gap-x-20 px-20 pt-10">
      <div class="w-1/2 body">
        <div class="fixed top-10 left-20">
          <div @click="toPage('/about')" @mouseenter="setIcon('left')" @mouseleave="setIcon('')"  class="bg-white text-black flex items-center gap-2 px-4 py-2 w-fit pr-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <p>Go back</p>
          </div>

          <h1 class="font-[Didot] text-6xl mt-8">I'm Youri Scheepers</h1>
          <div class="max-w-[500px]">
            <p class="mt-4">I'm currently studying at the Amsterdam University of Applied Sciences. I obtained my first-year certificate with distinction (10/10), and am currently in my second year.</p>
            <p class="mt-4">Most of my technical knowledge is of Java and Kotlin, but I am very curious and love to learn. I also have additional experience with working in teams, and have worked on my communication skills at my side job as a bartender and server.</p>
            <p class="mt-4">You can find all details in my resume. Download it in <a href="./resume/CV_Youri_Scheepers_EN.docx" class="underline translate-x-0 cursor-none">English</a> or <a href="./resume/CV_Youri_Scheepers_NL.docx" class="underline translate-x-0 cursor-none">Dutch</a>.</p>
          </div>
        </div>
      </div>

      <div class="w-1/2">
        <h2 class="w-full text-center text-2xl">What my clients have said about me</h2>
        <h3 class="w-full text-center pb-4">These are all reviews from my Fiverr profile/freelance work</h3>

        <div class="flex gap-4 ml-auto">
          <div class="w-full max-w-[300px] flex flex-col gap-4 mb-10 scroll-offset">
            <Review :style="{animationDelay: '0ms'}" class="card" user="gbakewell" text="Wow, the quality of delivery is OUTSTANDING far surpassing my expectation. Not only was the plugin that Youri wrote for me perfectly to specification and bugless on the first (and only!) iteration, the quality of source code is amazing as well; no shortcuts taken anywhere, and perfectly taking advantage of OOP. Youri's plugin not only works perfectly as I required, but I even expect future maintenance and extension of this codebase to be a pleasure."/>
            <Review :style="{animationDelay: '100ms'}" class="card" user="jacobtwo" text="Very helpful, and walked me through turning my idea into a reality. Even helped me test the plugin to make sure everything works smoothly!"/>
            <Review :style="{animationDelay: '200ms'}" class="card" user="isurann" text="Youri was the most helpful person I have found on Fiverr. Not only did he finish my order early, he hopped on a call and helped me better understand how to integrate it in my server. I will definitely be doing business with them again in the future."/>
            <Review :style="{animationDelay: '300ms'}" class="card" user="brqdford" text="Seller made plugin very fast, the plugin was very affordable, helped me through all issues that I had, even though they were all on my end. Very kind person, and great to work with, will go through him again. Would recommend."/>
            <Review :style="{animationDelay: '400ms'}" class="card" user="loocthefluke" text="Very quick and solid! Prices are fair and communication is great!"/>
            <Review :style="{animationDelay: '50ms'}" class="card" user="grey615" text="Great listener and very patient!"/>
          </div>
          <div class="w-full max-w-[300px] flex flex-col gap-4 mb-10">
            <Review :style="{animationDelay: '50ms'}" class="card" user="toxic16" text="Quick respone, humble person and great plugin! Can definitely recommend!"/>
            <Review :style="{animationDelay: '150ms'}" class="card" user="robertburik" text="Youri is a purposeful and persistent coder! Takes on the task and completes it no matter what! I am glad I found such a reliable person!"/>
            <Review :style="{animationDelay: '250ms'}" class="card" user="maxfisk" text="I very much enjoyed working with Youri. He was very helpful and was able to easily solve the issues/concerns I had with the plugin. Brought my plugin plan to fruition excellently and I plan to use his services again in the next few months for sure!"/>
            <Review :style="{animationDelay: '350ms'}" class="card" user="alfred_dm" text="Excellent communication with the seller and final product exceeding expectations."/>
            <Review :style="{animationDelay: '450ms'}" class="card" user="connwaerskies" text="Youri did a great job of communicating with me in a timely fashion, even when it was at odds with his time zone. He completed my delivery with only 1 minor delay due to some technical issues and some personal conflicts he had in his own life. He charged me fairly, and was kind. Amazing Job."/>
            <Review :style="{animationDelay: '550ms'}" class="card" user="trevorbowden" text="Completed work in designated time frame and it works perfectly."/>
          </div>
        </div>
      </div>
    </div>

    <PageFooter class="font-sans" background-color="#FFFFFF" text-color="#000000"/>
  </div>
</template>

<script setup lang="ts">
import PageFooter from "./PageFooter.vue";
import {setupSEO} from "./util/SEO.ts";
import {inject, ref} from "vue";
import {useRouter} from "vue-router";
import Review from "./util/Review.vue";
import ImageWithExpendableAlt from "./util/ImageWithExpendableAlt.vue";

setupSEO(
    "About me professionally",
    "Learn about my education, work experience and more",
    "./img/bandi/store-1.jpg"
)

const setIcon: (value: string) => {} = inject("setIcon")!
setIcon('')

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

.card {
  animation: card-appear 0.4s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  opacity: 0;
}

@keyframes card-appear {
  0% {
    transform: translateY(60px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
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

.scroll-offset {
  animation: scroll-offset linear forwards;
  animation-timeline: scroll(root block);
  animation-range: 0vh 200vh;
}

@keyframes scroll-offset {
  from {
    margin-top: 0;
  }

  to {
    margin-top: -400px;
  }
}
</style>