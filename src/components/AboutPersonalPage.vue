<template>
  <div :class="{disappear: isTransitioning}" class="bg-black text-white flex w-full min-h-screen gap-x-20 px-20 pt-10 font-serif">
    <div class="w-1/2 body">
      <div class="fixed top-10 left-20">
        <div @click="toPage('/about')" @mouseenter="setIcon('left')" @mouseleave="setIcon('')"  class="bg-white text-black flex items-center gap-2 px-4 py-2 w-fit pr-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          <p>Go back</p>
        </div>

        <h1 class="font-[Didot] text-6xl mt-8">I'm Youri</h1>
        <div class="max-w-[500px]">
          <p class="mt-4">I live in Westbeemster, a small town near Amsterdam and Purmerend, at about 4 meters below sea-level. You might have seen some of the cheese my town produces in the supermarket.</p>
          <p class="mt-4">I have a lot of hobbies (sometimes I feel like I have too many), which include playing accordion, visiting theme parks, working out and bouldering. I also like to go out with friends, and like to visit a festival or other party from time to time.</p>
          <p class="mt-4">Please take a look at the pictures on the right, showcasing some parts of my life.</p>
        </div>
      </div>
    </div>

    <div class="w-1/2">
      <div class="flex gap-4 ml-auto">
        <div class="w-full max-w-[300px] flex flex-col gap-4 mb-10 scroll-offset">
          <ImageWithExpendableAlt :style="{animationDelay: index*100+'ms'}" v-for="(image, index) in getEvenImages()" class="w-[300px] card" :image="image.image" :alt="image.alt"/>
        </div>
        <div class="w-full max-w-[300px] flex flex-col gap-4 mb-10">
          <ImageWithExpendableAlt :style="{animationDelay: (index*100+50)+'ms'}" v-for="(image, index) in getOddImages()" class="w-[300px] card" :image="image.image" :alt="image.alt"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {inject, ref} from "vue";
import ImageWithExpendableAlt from "./util/ImageWithExpendableAlt.vue";
import {setupSEO} from "./util/SEO.ts";

setupSEO(
    "About me personally",
    "Get to know me on a personal level, such as my hobbies",
    "./img/personal/record-player.jpg"
)

const setIcon: (value: string) => {} = inject("setIcon")!
setIcon('')

type Image = {
  image: string,
  alt: string
}

const images: Image[] = [
    { image: "./img/personal/concertgebouw.jpg", alt: "I often go to the Concertgebouw with my mother. This concert consisted of music composed mainly by Johannes Brahms. The Hungarian Dance was amazing to hear in real life." },
    { image: "./img/personal/beemster-skies.jpg", alt: "This is what the sunsets are like where I live. I have a view just like this one from my room. I took this picture when I was cycling back home from the gym one evening." },
    { image: "./img/personal/phantasialand.jpg", alt: "This is F.L.Y., one of my favorite rollercoasters in the world. It's located at Phantasialand, which also happens to be one of my favorite theme parks." },
    { image: "./img/personal/accordion.jpg", alt: "My accordion, a Vignoni that was made in Italy. I've been playing for about 8 years now, and have had this accordion for 6 of those years." },
    { image: "./img/personal/goat.jpg", alt: "I visited Southern England in May 2024. This (illegally cute) goat was at a farm we visited. My mom also likes to keep goats, but she currently doesn't have any ones as cute as this one." },
    { image: "./img/personal/ziplining.jpg", alt: "I like to do fun activities that push my boundaries. These ziplines certainly did. The views were incredible though. They are located in South Africa, where some of my family lives." },
    { image: "./img/personal/record-player.jpg", alt: "This is my dad's old record player. I don't collect records myself, but one day we decided to take a look at my parent's old records. The song that was playing when I took this picture was 'Everybody wants to rule the world' by Tears for Fears, which I love." },
    { image: "./img/personal/steam-deck.jpg", alt: "I like to play games, especially on my Steam Deck. For a high-school project, I created a game in Unreal Engine 5, and downloaded it to my own device, which you can see here. Excuse the programmer art. It's always so cool when you create something and make it feel real like this." },
    { image: "./img/personal/chicken.jpg", alt: "I am addicted to chicken. This fried chicken I had at Soju Bar in Amsterdam was some of the best I have had in my life. 10/10 would recommend." },
]

const getEvenImages = (): Image[] => {
  return images.filter((_, i) => i % 2 === 0)
}

const getOddImages = (): Image[] => {
  return images.filter((_, i) => i % 2 === 1)
}

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