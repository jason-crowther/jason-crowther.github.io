<template>
    <section class="section-projects">
        <div class="projects__title">
            <h2>Some of my work</h2>
        </div>
        <div class="projects__wrapper">
            <div class="project" v-for="project in projects" @click.prevent="launchModal(project)">
                <img :src="project.image" :alt="project.title">
                <div class="project__title">
                    <h4>{{ project.title }}</h4>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import projectData from './../modules/project-data.js';
    export default {
        name: "AppProjects",
        data(){
            return {
             projects: projectData
            }
        },
        methods: {
            launchModal(project){
                Event.$emit("showModal", project)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../scss/variables";
    .section-projects{
        background-color: $white;
        display: grid;
        grid-gap: 1rem;
        grid-template-rows: repeat(2, auto);
        grid-template-columns: repeat(12, 1fr);
        padding: 3rem 1rem;
    }

    .projects{
        &__title{
            grid-row: 1/2;
            grid-column-start: 1;
            grid-column-end: 13;
            text-align:center;
        }

        &__wrapper{
            display: grid;
            grid-row: 2/2;
            grid-column-start: 2;
            grid-column-end: 12;
            grid-template-rows: repeat(2, auto);
            grid-template-columns: repeat(4, 1fr);
        }
    }

    .project{
        cursor: pointer;
    }
</style>