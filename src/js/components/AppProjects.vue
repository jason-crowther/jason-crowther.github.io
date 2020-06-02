<template>
    <section class="projects">
        <div class="container">
            <div class="projects__content">
                <h2>Some of my work</h2>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "AppProjects"
    }
</script>

<style lang="scss" scoped>
    @import "./../../scss/variables";
    .projects{
        background-color: $white;
        padding: 3rem 0;
        text-align: center;
        &__content{
            grid-column: 2/12;
        }
    }
</style>