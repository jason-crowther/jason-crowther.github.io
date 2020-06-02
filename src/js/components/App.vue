<template>
    <div>
        <app-header></app-header>
        <app-about></app-about>
    </div>
</template>

<script>
    import AppHeader from './AppHeader.vue';
    import AppAbout from './AppAbout.vue';
    export default {
        name: "app",
        components: {AppHeader, AppAbout},
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