<template>
    <section class="about">
        <div class="container">
            <div class="about__image">
                <img src="/dist/images/jason.jpg" alt="Me">

                <p>
                    <a
                            href="#"
                            target="_blank"
                            rel="noopener"
                            class="btn"
                    >
                        <svg aria-hidden="true" width="18"
                             height="18" focusable="false" data-prefix="fas" data-icon="book"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#ffffff"><path fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path></svg>
                        Curriculum Vitae
                    </a>

                    <a
                            href="https://www.linkedin.com/in/jason-crowther-5369b438"
                            target="_blank"
                            rel="noopener"
                            class="btn"
                    >
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24" fill="#ffffff"
                        >
                            <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            />
                        </svg>
                        Linkedin
                    </a>
                    <a
                            href="https://github.com/jason-crowther"
                            target="_blank"
                            rel="noopener"
                            class="btn"
                    >
                        <svg aria-hidden="true" width="18"
                             height="18" focusable="false" data-prefix="fab" data-icon="github"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="#fff"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                        Github
                    </a>

                </p>
                <p>I'm Currently Employed at: DeepData B.V.</p>
                <app-button type="button" classes="btn btn--green" @click.native="scrollDown">
                    Contact Me
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="#ffffff"
                    >
                        <path
                                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z"
                        />
                    </svg>
                </app-button>
            </div>
            <div class="about__content">
                <h2>About Me</h2>
                <p>
                    I am a (mostly self taught) front-end developer with a creative flair and a passion for creating
                    websites that make the web a better place.
                    I lived most of my life in sunny Cape Town, South Africa, but moved to The Netherlands in 2018. I
                    often question why I left the sun!

                </p>
                <p>I started my career in web development back in 2013 when wordpress was all the rage. After a while I
                    started to crave more control over my code.
                    Having worked with php in wordpress, Laravel seemed like the most logical step for me to take. This
                    is where you could say I started moving in the fullstack developer direction.
                    </p>
                <p>When the world of frontend development started shooting off in different directions I was focussing
                    on honing my vanilla javascript skills.
                    I was a bit skeptical of frameworks like Angular and React, I guess you could say I had some
                    old-school thinking and believed SSR was hard to beat.
                    After a lot of playing around and learning I started to fall in love with Vue.</p>
                <p>
                    In my spare time I like to spend time outside enjoying nature, hiking and climbing mountains. I also
                    enjoy the occasional bouldering session as well as letting off some steam on the PS4.
                </p>

            </div>

        </div>
    </section>
</template>

<script>
    import AppButton from "./AppButton.vue";

    export default {
        name: "AppAbout",
        components: {AppButton},
        methods: {
            scrollDown() {
                document.querySelector('.section-contact').scrollIntoView({behaviour: 'smooth', block: 'start'})
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "./../../scss/variables";

    .about {
        padding: 5rem 0;

        &__image {
            text-align: center;
            grid-column: 2/12;
            color: $white;
            margin-bottom: 3rem;

            img {
                border-radius: 50%;
                margin-bottom: 2rem
            }

            a {
                color: $white;
                text-decoration: none;
                margin-right: 0.5rem;

                svg {
                    vertical-align: middle;
                }

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        &__content {
            grid-column: 2/12;
            color: $white;
        }

        &__skills {
            grid-column: 2/12;
            color: $white;
        }


    }

    @media (min-width: 992px) {
        .about {
            &__image {
                grid-column: 2/4;
                margin-bottom: 0;
            }

            &__content {
                grid-column: 5/12;
            }

            &__skills {
                grid-column: 2/12;
            }
        }
    }
</style>
