<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <a href="/">
          <AppSVG icon="jc-logo" class="header__logo" />
        </a>
        <h1 class="header__title">
          <span class="header__title--one">Jason Crowther</span>
          <span class="header__title--two">Front-end Developer</span>
          <span class="header__title--three">and all-round creative.</span>
        </h1>
      </div>
    </div>
  </header>
</template>

<script setup>
import AppSVG from '@/js/components/modules/AppSVG.vue'
</script>

<style lang="scss" scoped>
@use '@/scss/variables.scss' as *;

.header {
  background-image: url('@/images/main-bg.jpg');
  background-image:
    -moz-linear-gradient(top, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 1) 100%),
    url('@/images/main-bg-2.jpg');
  background-image:
    -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 1) 100%),
    url('@/images/main-bg-2.jpg');
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 1) 100%),
    url('@/images/main-bg-2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: $white;
  min-height: 40rem;
  text-align: center;
  padding: 8rem 0;

  &__content {
    grid-column: 2/12;
  }

  &__logo {
    width: 17.5rem;
    height: 17.5rem;
  }

  &__title {
    span {
      display: block;
    }

    &--one {
      font-weight: 300;
      color: $green;
      font-size: 2.4rem;
      line-height: 1;
    }

    &--two {
      font-weight: 700;
      font-style: italic;
      color: $white;
      font-size: 5rem;
      line-height: 1.3;
    }

    &--three {
      font-weight: 600;
      color: $green;
      font-size: 3rem;
      line-height: 1.3;
    }
  }
}

@media (min-width: 992px) {
  .header {
    &__content {
      grid-column: 4/10;
    }

    &__title {
      &--one {
        font-size: 2.4rem;
      }

      &--two {
        font-size: 6.4rem;
      }

      &--three {
        font-size: 3.6rem;
      }
    }
  }
}
</style>
