<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__content">
                <p class="m-0 text-white">Copyright &copy; 2019 | Designed &amp; Developed by Jason Crowther | <a href="https://github.com/jason-crowther/jason-crowther.github.io" target="_blank" rel="noopener">View Source</a></p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style lang="scss" scoped>
    @import "./../../scss/variables";

    .footer{
        text-align: center;
        color: $white;
        padding: 3rem 0;
        &__content{
            grid-column: 2/12;
        }
    }
</style>