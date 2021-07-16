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
	import AppHeader from "./layout/AppHeader.vue";
	import AppAbout from "./sections/AppAbout.vue";
	import AppSkills from "./sections/AppSkills.vue";
	import AppProjects from "./sections/AppProjects.vue";
	import AppContact from "./sections/AppContact.vue";
	import AppModal from "./modules/AppModal.vue";
	import AppFooter from "./layout/AppFooter.vue";

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

	p {
		margin-bottom: 0.8rem;
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
