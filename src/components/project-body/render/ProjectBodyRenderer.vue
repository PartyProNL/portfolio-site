<template>
  <div>
    <component @loaded="emit('loaded')"
        v-for="(part, index) in parts"
        :key="index"
        :is="part.render().component"
        v-bind="part.render().props"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps} from "vue";
import { ProjectBodyPart } from "../ProjectBodyPart.ts";

defineProps<{
  parts: ProjectBodyPart[];
}>();

const emit = defineEmits(['loaded'])
</script>