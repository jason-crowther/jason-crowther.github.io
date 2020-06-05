<template>
    <div>
        <app-header></app-header>
        <app-about></app-about>
        <app-projects></app-projects>
        <app-contact></app-contact>
        <app-footer></app-footer>
        <app-modal></app-modal>
    </div>
</template>

<script>
    import AppHeader from './AppHeader.vue';
    import AppAbout from './AppAbout.vue';
    import AppProjects from './AppProjects.vue';
    import AppContact from './AppContact.vue';
    import AppFooter from './AppFooter.vue';
    import AppModal from './AppModal.vue';
    export default {
        name: "app",
        components: {
            AppHeader,
            AppAbout,
            AppProjects,
            AppContact,
            AppFooter,
            AppModal
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,700&display=swap');
    @import "./../../scss/variables";
    @import "./../../scss/base";

    .container{
        display:grid;
        grid-template-columns: repeat(12, 1fr);
        grid-column-gap: 1rem;
    }
    .content{
        grid-column: 4/8;
    }
    .text-center{
        text-align: center;
    }
    img{
        display: block;
        max-width: 100%;
        height: auto;
    }
    a{
        display:inline-block;
    }
</style>