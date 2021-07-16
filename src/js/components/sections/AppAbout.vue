<template>
	<section class="about">
		<div class="container">
			<div class="about__image">
				<img src="./../../../../dist/images/jason.jpg" alt="Me" />
				<p>
					<a href="./../../../../dist/documents/jason-crowther-cv-2021.pdf" target="_blank" rel="noopener" class="btn">
						<app-s-v-g class="svg-icon" icon="book"></app-s-v-g>
						Curriculum Vitae
					</a>

					<a
						href="https://www.linkedin.com/in/jason-crowther-5369b438"
						target="_blank"
						rel="noopener"
						class="btn"
					>
						<app-s-v-g class="svg-icon" icon="linkedin"></app-s-v-g>
						Linkedin
					</a>
					<a
						href="https://github.com/jason-crowther"
						target="_blank"
						rel="noopener"
						class="btn"
					>
						<app-s-v-g class="svg-icon" icon="github"></app-s-v-g>
						Github
					</a>
				</p>
				<p>I'm Currently Employed at: DeepData B.V.</p>
				<app-button
					type="button"
					classes="btn btn--green"
					@click.native="scrollDown"
				>
					Contact Me

				</app-button>
			</div>
			<div class="about__content">
				<h2>About Me</h2>
				<p>
					I am a (mostly self taught) front-end developer with a creative flair
					and a passion for creating websites that make the web a better place.
					I lived most of my life in sunny Cape Town, South Africa, but moved to
					The Netherlands in 2018. I often question why I left the sun!
				</p>
				<p>
					I started my career in web development back in 2013 when wordpress was
					all the rage. After a while I started to crave more control over my
					code. Having worked with php in wordpress, Laravel seemed like the
					most logical step for me to take. This is where you could say I
					started moving in the fullstack developer direction.
				</p>
				<p>
					When the world of frontend development started shooting off in
					different directions I was focussing on honing my vanilla javascript
					skills. I was a bit skeptical of frameworks like Angular and React, I
					guess you could say I had some old-school thinking and believed SSR
					was hard to beat. After a lot of playing around and learning I started
					to fall in love with Vue.
				</p>
				<p>
					In my spare time I like to spend time outside enjoying nature, hiking
					and climbing mountains. I also enjoy the occasional bouldering session
					as well as letting off some steam on the PS4.
				</p>
			</div>
		</div>
	</section>
</template>

<script>
	import AppButton from "./../modules/AppButton.vue";
	import AppSVG from "./../modules/AppSVG.vue";
	export default {
		name: "AppAbout",
		components: {AppButton, AppSVG},
		methods: {
			scrollDown() {
				document
					.querySelector(".section-contact")
					.scrollIntoView({behaviour: "smooth", block: "start"});
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "./../../../scss/variables";

	.about {
		padding: 5rem 0;

		&__image {
			text-align: center;
			grid-column: 3/11;
			color: $white;
			margin-bottom: 3rem;

			img {
				border-radius: 50%;
				margin-bottom: 2rem;
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
