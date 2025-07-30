<template>
  <component :is="icon" class="svg-icon" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
})
const icon = defineAsyncComponent(() => import(`@/icons/${props.icon}.svg`))
</script>

<style scoped lang="scss">
.svg-icon {
  display: inline-block;
}
</style>
