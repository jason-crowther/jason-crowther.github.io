<template>
  <div>
    <AppHeader />
    <AppAbout />
    <AppSkills />
    <AppProjects />
    <AppContact />
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/js/components/layout/AppHeader.vue'
import AppAbout from '@/js/components/sections/AppAbout.vue'
import AppSkills from '@/js/components/sections/AppSkills.vue'
import AppProjects from '@/js/components/sections/AppProjects.vue'
import AppContact from '@/js/components/sections/AppContact.vue'
import AppFooter from '@/js/components/layout/AppFooter.vue'
</script>

<style lang="scss">
@use '@/scss/variables.scss' as *;
@use '@/scss/base.scss' as *;

.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
}

.content {
  grid-column: 4/8;
}

.text-center {
  text-align: center;
}

p {
  margin-bottom: 0.8rem;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  display: inline-block;
}
</style>
