<template>
  <div class="fixed top-0 left-0 w-full flex items-center justify-between py-4 px-8 text-[16px]">
    <div class="font-[600]">Youri Scheepers</div>

    <div class="absolute left-1/2 flex -translate-x-1/2 gap-16 font-[500]">
      <p v-if="activePage == 'projects'" class="text-black">Projects</p>
      <p v-else class="text-[#666666]">Projects</p>

      <p v-if="activePage == 'about'" class="text-black">About</p>
      <p v-else class="text-[#666666]">About</p>
    </div>

    <div>
      Icons
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  activePage: String
})
</script>