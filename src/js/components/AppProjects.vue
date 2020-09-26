<template>
	<section class="section-projects">
		<div class="projects__title">
			<h2>Some of my work</h2>
		</div>
		<div class="projects__wrapper">
			<div
				class="project"
				v-for="project in projects"
				:project="project"
				@click.prevent="launchModal(project)"
			>
				<img :src="project.image" :alt="project.title" />
				<div class="project__title">
					<h4>{{ project.title }}</h4>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import projectData from "./../modules/project-data.js";
	export default {
		name: "AppProjects",
		data() {
			return {
				projects: projectData,
			};
		},
		methods: {
			launchModal(project) {
				Event.$emit("showModal", project);
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "./../../scss/variables";
	.section-projects {
		background-color: $white;
		display: grid;
		grid-gap: 1rem;
		grid-template-rows: repeat(2, auto);
		grid-template-columns: repeat(12, 1fr);
		padding: 3rem 1rem;
	}

	.projects {
		&__title {
			grid-row: 1/2;
			grid-column-start: 1;
			grid-column-end: 13;
			text-align: center;
		}

		&__wrapper {
			display: grid;
			grid-row: 2/2;
			grid-column-start: 2;
			grid-column-end: 12;
			grid-template-rows: repeat(4, auto);
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.project {
		cursor: pointer;
		position: relative;

		&:hover {
			.project__title {
				background-color: rgba($black, 0);
			}
		}

		&__title {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba($black, 0.3);
			color: $white;
			text-align: center;
			h4 {
				position: relative;
				top: 50%;
				transform: translateY(-50%);
				font-weight: 600;
			}
		}
	}

	@media(min-width: 992px){

		.projects {
			&__wrapper {
				grid-template-columns: repeat(4, 1fr);
			}
		}

	}
</style>
