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
import {ComponentName, ProjectBodyPart} from "../models/ProjectBodyPart.ts";
import BodyTextRenderer from "./BodyTextRenderer.vue";
import BodyImageRenderer from "./BodyImageRenderer.vue";
import BodyMultiImageRenderer from "./BodyMultiImageRenderer.vue";

defineProps<{
  parts: ProjectBodyPart[];
}>();

const components: Record<ComponentName, typeof BodyTextRenderer | typeof BodyImageRenderer | typeof BodyMultiImageRenderer> = {
  BodyTextRenderer,
  BodyImageRenderer,
  BodyMultiImageRenderer
};
</script>