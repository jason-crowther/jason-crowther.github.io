<template>
  <section class="section-contact">
    <div class="contact__title">
      <h2>Contact me</h2>
    </div>
    <form :action="url" method="post" class="form" @submit.prevent="formSubmit">
      <div class="form__group">
        <label for="name" class="form__label">Name</label>
        <input
          type="text"
          class="form__input"
          name="name"
          id="name"
          placeholder="Name"
          v-model="name"
        />
        <span class="form__error" v-if="errors.hasOwnProperty('name')">{{ errors.name }}</span>
      </div>
      <div class="form__group">
        <label for="email" class="form__label">Email</label>
        <input
          type="email"
          class="form__input"
          name="email"
          id="email"
          placeholder="Email"
          v-model="email"
        />
        <span class="form__error" v-if="errors.hasOwnProperty('email')">{{ errors.email }}</span>
      </div>
      <div class="form__group form__group--last">
        <label for="message" class="form__label">Message</label>
        <textarea
          class="form__input"
          name="message"
          id="message"
          rows="5"
          placeholder="Message"
          v-model="message"
        ></textarea>
        <span class="form__error" v-if="errors.hasOwnProperty('message')">{{
          errors.message
        }}</span>
      </div>
      <app-button type="submit" classes="btn btn--green full-width" :disabled="isSending">
        <span v-if="!isSending">Submit</span>
        <span v-if="isSending">Sending...</span>
      </app-button>
    </form>
  </section>
</template>

<script setup>
import AppButton from './../modules/AppButton.vue'
import { ref } from 'vue'

const url = 'https://formspree.io/f/xblkkjqz'
const name = ref('')
const email = ref('')
const message = ref('')
const isSending = ref(false)
const isSubmitted = ref(false)
const errorMessages = ref({
  name: 'Please enter your name.',
  email: 'Please enter a valid email address.',
  message: 'Please enter a message (minimum 10 characters).',
})
const errors = ref({})

const formSubmit = (e) => {
  errors.value = {}

  validate()

  if (Object.keys(errors.value).length === 0) {
    isSending.value = true
    e.currentTarget.submit()
  }
}

const validateName = (name) => {
  let re = /^[a-zA-Z\s]*$/
  return re.test(name)
}

const validateEmail = (email) => {
  let re = /^([a-zA-Z0-9_\-]+)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,5})$/
  return re.test(email)
}

const validate = () => {
  //name
  if (!validateName(name.value) || name.value.length < 3) {
    errors.value['name'] = errorMessages.value.name
  }
  //email
  if (!validateEmail(email.value)) {
    errors.value['email'] = errorMessages.value.email
  }
  //message
  if (message.value === '' || message.value.length < 10) {
    errors.value['message'] = errorMessages.value.message
  }
}
</script>

<style lang="scss" scoped>
@use '@/scss/variables.scss' as *;

.section-contact {
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(12, 1fr);
  padding: 3rem 1rem;
}

.contact {
  &__title {
    grid-row: 1/2;
    grid-column-start: 1;
    grid-column-end: 13;
    text-align: center;
    color: $white;
  }
}

.form {
  display: grid;
  grid-row: 2/2;
  grid-column-start: 2;
  grid-column-end: 12;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  &__group {
    grid-column: 1/3;
  }

  &__group--last {
    grid-column: 1/3;
  }

  &__label {
    display: block;
    font-weight: 600;
    font-size: 1.3rem;
    color: $white;
  }

  &__input {
    display: block;
    width: 100%;
    font-family: inherit;
    border: 0;
    border-radius: 0.4rem;
    font-size: 1.6rem;
    outline: 0;
    padding: 1rem 1.3rem;
  }

  &__error {
    display: block;
    font-size: 1.3rem;
    color: #dc3545;
  }
}

.full-width {
  grid-column: 1 / 3;
}

@media (min-width: 992px) {
  .form {
    grid-column-start: 4;
    grid-column-end: 10;

    &__group {
      grid-column: auto;
    }

    &__group--last {
      grid-column: 1/3;
    }
  }
}
</style>
