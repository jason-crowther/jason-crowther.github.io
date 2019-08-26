<template>
    <div id="app">
        <app-header></app-header>

    </div>
</template>

<script>
    import AppHeader from './AppHeader.vue';
    export default {
        name: "app",
        components: {AppHeader},
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800i&display=swap');
    body{
        background-color: #4c5a66;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size:16px;
    }
    .container{
        display:grid;
        grid-template-columns: repeat(8, 1fr);
    }
    .content{
        grid-column: 3/7;
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