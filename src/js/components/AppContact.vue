<template>
    <section class="contact">
        <div class="container">
            <div class="contact__content">
                <h2>Contact me</h2>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "AppContact"
    }
</script>

<style lang="scss" scoped>
    @import "./../../scss/variables";
    .contact{
        padding: 3rem 0;
        text-align: center;
        &__content{
            grid-column: 2/12;
        }
    }
</style>