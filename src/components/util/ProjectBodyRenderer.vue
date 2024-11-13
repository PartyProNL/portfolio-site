<template>
  <div>
    <component
        v-for="(part, index) in parts"
        :key="index"
        :is="components[part.render().component]"
        v-bind="part.render().props"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import {ProjectBodyPart} from "../models/ProjectBodyPart.ts";
import BodyTextRenderer from "./BodyTextRenderer.vue";
import BodyImageRenderer from "./BodyImageRenderer.vue";

defineProps<{
  parts: ProjectBodyPart[];
}>();

const components = {
  BodyTextRenderer,
  BodyImageRenderer,
};
</script>