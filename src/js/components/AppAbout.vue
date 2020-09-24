<template>
    <section class="about">
        <div class="container">
            <div class="about__content">
                <h2>About Me</h2>
                <p>I am a front-end developer, web & graphic designer currently based in the Netherlands. I have a passion for creating websites that make the web a better place.</p>
                <p>I enjoy nature/ landscape photography, hiking and the occasional bouldering session.</p>
                <p><a href="https://www.linkedin.com/in/jason-crowther-5369b438" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>View on Linkedin</a></p>
                <p>Currently Employed at: DeepData B.V.</p>
                <!--<button type="button" class="btn btn&#45;&#45;green">Hire Me<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z"/></svg></button>-->
                <app-button type="button" text="Hire Me" classes="btn btn--green"></app-button>
            </div>
            <div class="about__skills">
                <h2>Tools of the trade</h2>
                <h3>Front-end</h3>
                <ul class="about__skills-list about__skills-list--blue">
                    <li>HTML</li>
                    <li>CSS/LESS/SCSS</li>
                    <li>Vanilla Javascript</li>
                    <li>Vue</li>
                    <li>jQuery</li>
                    <li>Bootstrap/Bulma</li>
                    <li>BEM</li>
                </ul>
                <h3>Back-end &amp; Databases</h3>
                <ul class="about__skills-list about__skills-list--red">
                    <li>Laravel</li>
                    <li>PHP</li>
                    <li>Rest API</li>
                    <li>Wordpress</li>
                    <li>MySQL</li>
                    <li>Apache</li>
                </ul>
                <h3>Other Things</h3>
                <ul class="about__skills-list about__skills-list--yellow">
                    <li>Git/Mercurial</li>
                    <li>NPM</li>
                    <li>Composer</li>
                    <li>Webpack</li>
                    <li>Babel</li>
                    <li>Bitbucket/Jira</li>
                    <li>Github</li>
                    <li>Adobe</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import AppButton from './AppButton.vue';
    export default {
        name: "AppAbout",
        components: {AppButton}
    }
</script>

<style lang="scss" scoped>
    @import "./../../scss/variables";
    .about{
        padding: 3rem 0;
        &__content{
            grid-column: 2/6;
            color: $white;
        }
        &__skills{
            grid-column: 6/12;
            color: $white;
        }

        &__skills-list{
            list-style: none;
            li{
                display: inline-block;
                padding: .3rem .5rem;
                border-radius: .4rem;
                font-weight: 600;
                margin-bottom: .3rem;
                &:not(:last-of-type){
                    margin-right:.3rem;
                }
            }
            &--blue{
                li{
                    background-color: #007bff;
                }
            }
            &--red{
                li{
                    background-color: #dc3545;
                }
            }
            &--yellow{
                li{
                    background-color: #ffc107;
                }
            }
        }
    }
</style>