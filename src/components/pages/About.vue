<template>
  <div class="w-full min-h-screen flex justify-center relative text-slate-800">
    <NavigationBar class="z-10 bg-white" active-page="about"/>

    <div class="w-full fixed z-[5] max-w-[980px] h-6 top-14 bg-gradient-to-b from-white to-white/0"></div>

    <div class="w-full max-w-[980px] pt-24 z-0 relative px-8">
      <h1 class="text-[32px] lg:text-[100px] font-[400] leading-[1.5rem] italic lg:leading-[6rem]">
        I am a <span class="font-[500] not-italic">full-stack developer</span>, who loves <span class="font-[500] not-italic">Kotlin</span>, and is currently studying at <span class="font-[500] not-italic">AUAS</span>.
      </h1>

      <div class="grid grid-cols-2 gap-x-6 gap-y-10 mt-10 mb-10">
        <p class="text-[18px] font-[500]">I've always been passionate about computers, and got my first at 9 years old. Soon after, I made my first website, and programming become a hobby of mine at 14. I've been coding nearly every day since.</p>

        <div></div>

        <div>
          <h3 class="font-[500] text-[64px] leading-[5rem]">Experience</h3>

          <ExperienceItem
              what="Waiter and bartender"
              where="De Kerckhaen, Westbeemster, Netherlands"
              from="April 2024"
              to="Present"
          />

          <ExperienceItem
              what="Freelance Java back-end developer"
              where="Using online-platform Fiverr"
              from="October 2020"
              to="August 2021"
          />
        </div>

        <div>
          <h3 class="font-[500] text-[64px] leading-[5rem]">Education</h3>

          <ExperienceItem
            what="Bachelor's in Software Engineering"
            where="Amsterdam University of Applied Sciences"
            from="2023"
            to="Present"
          />

          <ExperienceItem
              what="Pre-university secondary education"
              where="OSG West-Friesland, Hoorn"
              from="2017"
              to="2023"
          />
        </div>

        <div>
          <h3 class="font-[500] text-[64px] leading-[5rem]">Client reviews</h3>
          <p class="font-[500] text-lg">These are all reviews from my time working as a freelance Java back-end developer.</p>
        </div>
        <div></div>

        <div class="col-span-2 flex gap-6 -mt-4">
          <div class="w-full flex flex-col gap-4">
            <Review :style="{animationDelay: '0ms'}" class="card" user="gbakewell" text="Wow, the quality of delivery is OUTSTANDING far surpassing my expectation. Not only was the plugin that Youri wrote for me perfectly to specification and bugless on the first (and only!) iteration, the quality of source code is amazing as well; no shortcuts taken anywhere, and perfectly taking advantage of OOP. Youri's plugin not only works perfectly as I required, but I even expect future maintenance and extension of this codebase to be a pleasure."/>
            <Review :style="{animationDelay: '100ms'}" class="card" user="jacobtwo" text="Very helpful, and walked me through turning my idea into a reality. Even helped me test the plugin to make sure everything works smoothly!"/>
            <Review :style="{animationDelay: '200ms'}" class="card" user="isurann" text="Youri was the most helpful person I have found on Fiverr. Not only did he finish my order early, he hopped on a call and helped me better understand how to integrate it in my server. I will definitely be doing business with them again in the future."/>
            <Review :style="{animationDelay: '300ms'}" class="card" user="brqdford" text="Seller made plugin very fast, the plugin was very affordable, helped me through all issues that I had, even though they were all on my end. Very kind person, and great to work with, will go through him again. Would recommend."/>
            <Review :style="{animationDelay: '400ms'}" class="card" user="loocthefluke" text="Very quick and solid! Prices are fair and communication is great!"/>
            <Review :style="{animationDelay: '50ms'}" class="card" user="grey615" text="Great listener and very patient!"/>
          </div>
          <div class="w-full flex flex-col gap-4">
            <Review :style="{animationDelay: '50ms'}" class="card" user="toxic16" text="Quick respone, humble person and great plugin! Can definitely recommend!"/>
            <Review :style="{animationDelay: '150ms'}" class="card" user="robertburik" text="Youri is a purposeful and persistent coder! Takes on the task and completes it no matter what! I am glad I found such a reliable person!"/>
            <Review :style="{animationDelay: '250ms'}" class="card" user="maxfisk" text="I very much enjoyed working with Youri. He was very helpful and was able to easily solve the issues/concerns I had with the plugin. Brought my plugin plan to fruition excellently and I plan to use his services again in the next few months for sure!"/>
            <Review :style="{animationDelay: '350ms'}" class="card" user="alfred_dm" text="Excellent communication with the seller and final product exceeding expectations."/>
            <Review :style="{animationDelay: '450ms'}" class="card" user="connwaerskies" text="Youri did a great job of communicating with me in a timely fashion, even when it was at odds with his time zone. He completed my delivery with only 1 minor delay due to some technical issues and some personal conflicts he had in his own life. He charged me fairly, and was kind. Amazing Job."/>
            <Review :style="{animationDelay: '550ms'}" class="card" user="trevorbowden" text="Completed work in designated time frame and it works perfectly."/>
          </div>
        </div>

        <h3 class="font-[500] text-[64px] leading-[5rem]">The next step</h3>
        <div></div>

        <a href="./resume/CV_Youri_Scheepers_EN.docx" class="bg-slate-900 rounded-lg p-4 text-white -mt-8 flex justify-between items-center group cursor-pointer">
          <p class="font-[600] text-[24px]">Download my resume (EN)</p>

          <div class="bg-white rounded-full text-slate-900 flex justify-center items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 group-hover:rotate-[360deg] transition-transform ease-in-out duration-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/youri-scheepers/" class="bg-slate-900 rounded-lg p-4 text-white -mt-8 flex justify-between items-center group cursor-pointer">
          <p class="font-[600] text-[24px]">Visit my LinkedIn</p>

          <div class="bg-white rounded-full text-slate-900 flex justify-center items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 group-hover:-rotate-45 transition-transform">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </a>

        <a href="./resume/CV_Youri_Scheepers_NL.docx" class="bg-slate-900 rounded-lg p-4 text-white -mt-4 flex justify-between items-center group cursor-pointer">
          <p class="font-[600] text-[24px]">Download my resume (NL)</p>

          <div class="bg-white rounded-full text-slate-900 flex justify-center items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 group-hover:rotate-[360deg] transition-transform ease-in-out duration-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </div>
        </a>

        <a href="https://github.com/PartyProNL" class="bg-slate-900 rounded-lg p-4 text-white -mt-4 flex justify-between items-center group cursor-pointer">
          <p class="font-[600] text-[24px]">Visit my GitHub</p>

          <div class="bg-white rounded-full text-slate-900 flex justify-center items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 group-hover:-rotate-45 transition-transform">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "../NavigationBar.vue";
import ExperienceItem from "../util/ExperienceItem.vue";
import {inject} from "vue";
import Review from "../util/Review.vue";
import {setupSEO} from "../util/SEO.ts";

const isFirstOpenFunction: () => boolean = inject("isFirstOpen")!
isFirstOpenFunction()

setupSEO(
    "About me",
    "I am a full-stack developer, who loves Kotlin, and is currently studying at AUAS. I've always been passionate about computers, and got my first at 9 years old. Soon after, I made my first website, and programming become a hobby of mine at 14. I've been coding nearly every day since.",
    "./img/banner-1.jpg"
)
</script>