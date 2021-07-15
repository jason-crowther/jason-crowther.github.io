<template>
    <div>
        <app-header></app-header>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-projects></app-projects>
        <app-contact></app-contact>
        <app-footer></app-footer>
        <app-modal></app-modal>
    </div>
</template>

<script>
    import AppHeader from "./AppHeader.vue";
    import AppAbout from "./AppAbout.vue";
    import AppSkills from "./AppSkills.vue";
    import AppProjects from "./AppProjects.vue";
    import AppContact from "./AppContact.vue";
    import AppFooter from "./AppFooter.vue";
    import AppModal from "./AppModal.vue";

    export default {
        name: "app",
        components: {
            AppHeader,
            AppAbout,
            AppSkills,
            AppProjects,
            AppContact,
            AppFooter,
            AppModal,
        },
    };
</script>

<style>
    @import "./../../scss/variables";
    @import "./../../scss/base";

    .container {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-column-gap: 1rem;
    }

    .content {
        grid-column: 4/8;
    }

    .text-center {
        text-align: center;
    }

    p{
        margin-bottom: .8rem;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    a {
        display: inline-block;
    }
</style>
