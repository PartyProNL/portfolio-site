<template>
  <RouterView :key="$route.fullPath"/>
</template>

<script setup lang="ts">
import {provide} from "vue";

let firstOpen = true;
const isFirstOpen = (): boolean => {
  if(firstOpen) {
    firstOpen = false;
    return true
  }
  return false;
}

provide("isFirstOpen", isFirstOpen)
</script>

<style scoped>

</style>