<template>
  <section class="about">
    <div class="container">
      <div class="about__image">
        <img :src="jasonImage" alt="Me" />
        <p>
          <a
            href="/documents/jason-crowther-cv-2021.pdf"
            target="_blank"
            rel="noopener"
            class="btn"
          >
            <AppSVG icon="book" />
            Curriculum Vitae
          </a>

          <a
            href="https://www.linkedin.com/in/jason-crowther-5369b438"
            target="_blank"
            rel="noopener"
            class="btn"
          >
            <AppSVG icon="linkedin" />
            Linkedin
          </a>
          <a href="https://github.com/jason-crowther" target="_blank" rel="noopener" class="btn">
            <AppSVG icon="github" />
            Github
          </a>
        </p>
        <p>I'm Currently Employed at: Mezzanine</p>
        <app-button type="button" classes="btn btn--green" @click="scrollDown">
          Contact Me
        </app-button>
      </div>
      <div class="about__content">
        <h2>About Me</h2>
        <p>
          I am a (mostly self taught) front-end developer with a creative flair and a passion for
          creating websites that make the web a better place. I lived most of my life in sunny Cape
          Town, South Africa, but moved to The Netherlands in 2018. After three years of cycling
          around, I decided to make the move back to Cape Town.
        </p>
        <p>
          I started my career in web development back in 2013 when wordpress was all the rage. After
          a while I started to crave more control over my code. Having worked with php in wordpress,
          Laravel seemed like the most logical step for me to take. This is where you could say I
          started moving in the fullstack developer direction.
        </p>
        <p>
          When the world of frontend development started shooting off in different directions I was
          focussing on honing my vanilla javascript skills. I was a bit skeptical of frameworks like
          Angular and React, I guess you could say I had some old-school thinking and believed SSR
          was hard to beat. After a lot of playing around and learning I started to fall in love
          with Vue.
        </p>
        <p>
          In my spare time I like to spend time outside enjoying nature, hiking and mountain biking.
          I also enjoy the occasional bouldering session as well as letting off some steam on the
          PS4.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppSVG from '@/js/components/modules/AppSVG.vue'
import AppButton from '@/js/components/modules/AppButton.vue'
import jasonImage from '@/images/jason.jpg'
import { useScrollTo } from '@/js/composables/useScrollTo'

const scrollDown = () => {
  useScrollTo('.section-contact')
}
</script>

<style lang="scss" scoped>
@use '@/scss/variables.scss' as *;

.about {
  padding: 5rem 0;

  &__image {
    text-align: center;
    grid-column: 3/11;
    color: $white;
    margin-bottom: 3rem;

    img {
      border-radius: 50%;
      margin-bottom: 2rem;
    }

    a {
      color: $white;
      text-decoration: none;
      margin-right: 0.5rem;

      svg {
        vertical-align: middle;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__content {
    grid-column: 2/12;
    color: $white;
  }

  &__skills {
    grid-column: 2/12;
    color: $white;
  }
}

@media (min-width: 992px) {
  .about {
    &__image {
      grid-column: 2/4;
      margin-bottom: 0;
    }

    &__content {
      grid-column: 5/12;
    }

    &__skills {
      grid-column: 2/12;
    }
  }
}
</style>
