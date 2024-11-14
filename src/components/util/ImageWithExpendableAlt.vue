<template>
  <div @mouseenter="setIcon('expand')" @mouseleave="setIcon('')" @click="expanded = !expanded" class="bg-white group">
    <img class="min-h-[200px]" :src="image" :alt="alt">
    <div class="bg-white w-full flex text-black justify-between py-2 px-3 pr-2">
      <p :style="{ height: expanded ? 'auto' : '28px' }"
         :class="{ 'whitespace-nowrap': !expanded, 'overflow-hidden': !expanded }"
         class="w-full block overflow-ellipsis pt-0.5 transition-all break-words">
        {{alt}}
      </p>

      <div class="p-0.5 bg-black text-white group-hover:bg-slate-800 transition-colors rounded-sm h-fit ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {inject, ref} from "vue";

const expanded = ref(false)

const setIcon: (value: string) => {} = inject("setIcon")!

defineProps({
  image: String,
  alt: String
})
</script>