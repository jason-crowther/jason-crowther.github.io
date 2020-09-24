<template>
    <section class="section-contact">
        <div class="contact__title">
            <h2>Contact me</h2>
        </div>

            <form action="" class="form" @click.prevent="formSubmit">
                <div class="form__group">
                    <label for="name" class="form__label">Name</label>
                    <input type="text" class="form__input" name="name" id="name" placeholder="Name">
                </div>
                <div class="form__group">
                    <label for="email" class="form__label">Email</label>
                    <input type="email" class="form__input" name="email" id="email" placeholder="Email">
                </div>
                <div class="form__group form__group--last">
                    <label for="message" class="form__label">Message</label>
                    <textarea class="form__input" name="message" id="message" rows="5" placeholder="Message"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>

    </section>
</template>

<script>
    export default {
        name: "AppContact",
        data(){
            return {

            }
        },
        methods:{
            formSubmit(){

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../scss/variables";
    .section-contact{
        display: grid;
        grid-gap: 1rem;
        grid-template-rows: repeat(2, auto);
        grid-template-columns: repeat(12, 1fr);
        padding: 3rem 1rem;
    }

    .contact{
        &__title{
            grid-row: 1/2;
            grid-column-start: 1;
            grid-column-end: 13;
            text-align:center;
        }
    }

    .form{
        display: grid;
        grid-row: 2/2;
        grid-column-start: 4;
        grid-column-end: 10;
        grid-template-rows: repeat(2, auto);
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;

        &__group{

        }
        &__group--last{
            grid-column: 1/3;
        }

        &__label{
            display: block;
            font-weight: 600;
            font-size: 1.3rem;
        }

        &__input{
            display: block;
            width: 100%;
            font-family: inherit;
            border: 0;
            border-radius: .4rem;
            font-size: 1.6rem;
            outline: 0;
            padding: 1rem 1.3rem;
        }
    }
</style>