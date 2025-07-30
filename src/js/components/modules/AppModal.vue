<template>
  <Teleport to="body">
    <div class="modal modal__active">
      <button type="button" class="modal__close" @click="closeModal">&times;</button>
      <div class="modal__wrapper" v-if="project !== null">
        <div class="modal__image">
          <img
            :src="getImageUrl(project.image)"
            :alt="project.title"
            class="modal-img img-fluid mb-3 mb-md-0"
          />
        </div>

        <div class="modal__content">
          <h3 class="modal-title">{{ project.title }}</h3>
          <p class="modal-description">{{ project.description }}</p>
          <a :href="project.link" target="_blank" rel="noopener" class="modal__link"
            >View Live <app-s-v-g class="svg-icon" icon="arrow"></app-s-v-g
          ></a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import AppSVG from './AppSVG.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const getImageUrl = (name) => {
  // note that this does not include files in subdirectories
  return new URL(`../../../images/portfolio/${name}.png`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
@use '@/scss/variables.scss' as *;
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: #fff;
  overflow: auto;
  display: none;

  &__active {
    display: block;
  }

  &__close {
    font-size: 5rem;
    border: 0;
    outline: 0;
    background-color: transparent;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    padding: 0.5rem 1.5rem;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
    background-color: #f5f5f5;
    margin: 7rem 2.5rem;
  }

  &__image {
    grid-column: 1/13;
  }

  &__content {
    grid-column: 1/13;
    padding: 1rem;
  }

  &__link {
    color: $black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    svg {
      vertical-align: middle;
    }
  }
}

@media (min-width: 992px) {
  .modal {
    &__image {
      grid-column: 1/9;
    }

    &__content {
      grid-column: 9/13;
    }
  }
}
</style>
