<template>
	<button :type="type" :class="classes">
		<slot>Button</slot>
	</button>
</template>

<script>
	export default {
		name: "AppButton",
		props: ["type", "classes"],
	};
</script>

<style scoped lang="scss">
	@import "./../../../scss/variables";

	.btn {
		padding: 0.6rem 1.2rem;
		font-family: inherit;
		border: 0;
		border-radius: 0.4rem;
		font-size: 1.6rem;
		cursor: pointer;

		&--green {
			background-color: $green;
			color: $white;
		}

		svg {
			vertical-align: middle;
		}
	}
</style>
