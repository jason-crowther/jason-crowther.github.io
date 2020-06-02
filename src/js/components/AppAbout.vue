<template>
    <section class="about">
        <div class="container">
            <div class="about__content">
                <h2>About Me</h2>
                <p>I am a front-end developer, web & graphic designer currently based in the Netherlands. I have a passion for creating websites that make the web a better place.</p>
                <p>I enjoy nature/ landscape photography, hiking and the occasional bouldering session.</p>
            </div>
            <div class="about__skills">
                Skills
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "AppAbout"
    }
</script>

<style lang="scss" scoped>
    .about{
        padding: 3rem 0;
        &__content{
            grid-column: 2/6;
        }
        &__skills{
            grid-column: 6/12;
        }
    }
</style>