<template>
  <section class="skills">
    <div class="container">
      <div class="skills__tech">
        <h2>Tech Stack</h2>
        <h4>Front-end</h4>
        <ul class="skills__list skills__list--blue">
          <li>HTML</li>
          <li>CSS</li>
          <li>LESS & SCSS</li>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>jQuery</li>
          <li>TypeScript</li>
          <li>Ajax</li>
          <li>Bootstrap</li>
          <li>Vuetify</li>
          <li>Tailwind</li>
        </ul>
        <h4>Back-end &amp; Databases</h4>
        <ul class="skills__list skills__list--red">
          <li>Laravel</li>
          <li>PHP</li>
          <li>Rest API</li>
          <li>Wordpress</li>
          <li>MySQL</li>
          <li>Apache</li>
        </ul>
        <h4>Other</h4>
        <ul class="skills__list skills__list--yellow">
          <li>Git</li>
          <li>Mercurial</li>
          <li>NPM</li>
          <li>Composer</li>
          <li>Webpack</li>
          <li>Vite</li>
          <li>Jira</li>
          <li>Github</li>
          <li>Photoshop</li>
        </ul>
      </div>
      <div class="skills__learn">
        <h2>Things to learn</h2>
        <ul class="skills__list skills__list--yellow">
          <li>Docker</li>
          <li>Python</li>
          <li>GSAP</li>
          <li>Tests</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@use 'sass:color';
@use '@/scss/variables.scss' as *;

.skills {
  padding: 5rem 0;
  background-color: color.adjust($black, $lightness: 20%);

  &__tech {
    grid-column: 2/12;
    color: $white;
    margin-bottom: 2rem;
  }

  &__learn {
    grid-column: 2/12;
    color: $white;
  }

  &__list {
    list-style: none;
    li {
      display: inline-block;
      padding: 0.3rem 0.5rem;
      border-radius: 0.4rem;
      font-weight: 600;
      margin-bottom: 0.3rem;
      &:not(:last-of-type) {
        margin-right: 0.3rem;
      }
    }
    &--blue {
      li {
        background-color: #007bff;
      }
    }
    &--red {
      li {
        background-color: #dc3545;
      }
    }
    &--yellow {
      li {
        background-color: #ffc107;
      }
    }
  }
}

@media (min-width: 992px) {
  .skills {
    &__tech {
      grid-column: 2/9;
      margin-bottom: 0;
    }

    &__learn {
      grid-column: 9/12;
    }
  }
}
</style>
