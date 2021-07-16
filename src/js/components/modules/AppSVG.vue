<template>
    <div v-html="require(`./../../../../dist/icons/${icon}.svg`)"></div>
</template>

<script>
    export default {
        name: "AppSVG",
        props: ['icon'],
    }
</script>

<style scoped lang="scss">
    .svg-icon{
        display: inline-block;
    }
</style>