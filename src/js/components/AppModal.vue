<template>
	<div class="modal" :class="{modal__active: modalShown}">
		<button type="button" class="modal__close" @click="closeModal">
			&times
		</button>
		<div class="modal__wrapper" v-if="project !== null">
			<div class="modal__image">
				<img
					:src="project.image"
					:alt="project.title"
					class="modal-img img-fluid mb-3 mb-md-0"
				/>
			</div>

			<div class="modal__content">
				<h3 class="modal-title">{{ project.title }}</h3>
				<p class="modal-description">{{ project.description }}</p>
				<a
					:href="project.link"
					target="_blank"
					rel="noopener"
					class="modal__link"
					>View Live <svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z"
						/></svg
				></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "AppModal",
		data() {
			return {
				modalShown: false,
				project: null,
			};
		},
		methods: {
			showModal() {
				this.modalShown = true;
			},
			closeModal() {
				this.modalShown = false;
			},
		},
		created() {
			Event.$on("showModal", (project) => {
				this.project = project;
				this.showModal();
			});
		},
	};
</script>

<style lang="scss" scoped>
	@import "./../../scss/variables";
	.modal {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 9999;
		background-color: #fff;
		overflow: auto;
		display: none;

		&__active {
			display: block;
		}

		&__close {
			font-size: 5rem;
			border: 0;
			outline: 0;
			background-color: transparent;
			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
			cursor: pointer;
			padding: 0.5rem 1.5rem;
		}

		&__wrapper {
			display: grid;
			grid-template-columns: repeat(12, 1fr);
			grid-gap: 1rem;
			background-color: #f5f5f5;
			margin: 8rem 6rem;
		}

		&__image {
			grid-column-start: 1;
			grid-column-end: 13;
		}

		&__content {
			grid-column-start: 1;
			grid-column-end: 13;
			padding: 1rem;
		}

		&__link{
			color: $black;
			text-decoration: none;

			&:hover{
				text-decoration: underline;
			}

			svg{
				vertical-align: middle;
			}
		}
	}

	@media (min-width: 992px) {
		.modal {
			&__image {
				grid-column-start: 1;
				grid-column-end: 9;
			}

			&__content {
				grid-column-start: 9;
				grid-column-end: 13;
			}
		}
	}
</style>
