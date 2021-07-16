<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__content">
				<p class="m-0 text-white">
					Copyright &copy; {{ date }} | Developed by Jason Crowther |
					<a
						href="https://github.com/jason-crowther/jason-crowther.github.io"
						target="_blank"
						rel="noopener"
						class="footer__link"
						>View Source</a
					>
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "AppFooter",
		data() {
			return {
				date: new Date().getFullYear(),
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import "./../../../scss/variables";

	.footer {
		text-align: center;
		color: $white;
		padding: 3rem 0;
		font-size: 1.4rem;

		&__content {
			grid-column: 2/12;
		}

		&__link {
			color: $white;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
