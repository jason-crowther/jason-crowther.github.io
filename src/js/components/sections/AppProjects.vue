<template>
  <section class="section-projects">
    <div class="projects__title">
      <h2>Some of my work</h2>
    </div>
    <div class="projects__wrapper">
      <div
        class="project"
        v-for="project in projects"
        :key="project.title"
        :project="project"
        @click.prevent="launchModal(project)"
      >
        <img :src="getImageUrl(project.image)" :alt="project.title" />
        <div class="project__title">
          <h4>{{ project.title }}</h4>
        </div>
      </div>
    </div>
    <AppModal v-if="modalOpen" @close="modalOpen = false" :project="selectedProject" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import AppModal from '@/js/components/modules/AppModal.vue'
import projectData from '@/js/modules/project-data.js'

const projects = projectData
const selectedProject = ref(null)
const modalOpen = ref(false)

const getImageUrl = (name) => {
  // note that this does not include files in subdirectories
  return new URL(`../../../images/portfolio/${name}.png`, import.meta.url).href
}

const launchModal = (project) => {
  modalOpen.value = true
  selectedProject.value = project
}
</script>

<style lang="scss" scoped>
@use '@/scss/variables.scss' as *;

.section-projects {
  background-color: $white;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(12, 1fr);
  padding: 5rem 0;
}

.projects {
  &__title {
    grid-row: 1/2;
    grid-column-start: 1;
    grid-column-end: 13;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  &__wrapper {
    display: grid;
    grid-row: 2/2;
    grid-column-start: 2;
    grid-column-end: 12;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(2, 1fr);
  }
}

.project {
  cursor: pointer;
  position: relative;
  overflow: hidden;

  img {
    transition: all ease 0.3s;
  }

  &:hover {
    img {
      transform: scale(110%);
    }

    .project__title {
      background-color: rgba($black, 0.6);
    }
  }

  &__title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($black, 0.3);
    color: $white;
    text-align: center;
    transition: all ease 0.3s;

    h4 {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      font-weight: 600;
    }
  }
}

@media (min-width: 992px) {
  .projects {
    &__wrapper {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
