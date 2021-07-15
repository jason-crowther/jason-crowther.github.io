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
                <span class="form__error" v-if="errors.hasOwnProperty('name')">{{
					errors.name
				}}</span>
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
                <span class="form__error" v-if="errors.hasOwnProperty('email')">{{
					errors.email
				}}</span>
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

<script>
    import AppButton from "./AppButton.vue";

    export default {
        name: "AppContact",
        components: {AppButton},
        data() {
            return {
                url: "https://formspree.io/f/jasonpcrowther@gmail.com",
                name: "",
                email: "",
                message: "",
                isSending: false,
                isSubmitted: false,
                errorMessages: {
                    name: "Please enter your name.",
                    email: "Please enter a valid email address.",
                    message: "Please enter a message (minimum 10 characters).",
                },
                errors: {},
            };
        },
        methods: {
            formSubmit(e) {
                this.errors = {};
                this.validate();
                if (Object.keys(this.errors).length === 0) {
                    this.isSending = true;
                    e.currentTarget.submit();
                }
            },
            validateName(name) {
                let re = /^[a-zA-Z\s]*$/;
                return re.test(name);
            },
            validateEmail(email) {
                let re = /^([a-zA-Z0-9_\-]+)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,5})$/;
                return re.test(email);
            },
            validate() {
                //name
                if (!this.validateName(this.name) || this.name.length < 3) {
                    this.errors["name"] = this.errorMessages.name;
                }
                //email
                if (!this.validateEmail(this.email)) {
                    this.errors["email"] = this.errorMessages.email;
                }
                //message
                if (this.message === "" || this.message.length < 10) {
                    this.errors["message"] = this.errorMessages.message;
                }
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import "./../../scss/variables";

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
