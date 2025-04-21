<script>
	// Props for customization
	export let padding = 'p-6'; // Default padding
	export let extraClass = ''; // Additional classes if needed
</script>

<div class="section-container-wrapper flex justify-center w-full">
	<div class="section-container relative w-[60%] {padding} {extraClass}">
		<!-- Left border with gradient -->
		<div
			class="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-gray-400 to-transparent"
		></div>

		<!-- Right border with gradient -->
		<div
			class="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-gray-400 to-transparent"
		></div>

		<!-- Bottom border with gradient -->
		<div
			class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
		></div>

		<!-- Dotted pattern background (similar to navbar) -->
		<div class="absolute top-0 left-0 w-full h-full pointer-events-none">
			<div class="section-dotted-pattern"></div>
		</div>

		<!-- Content slot -->
		<div class="relative z-10">
			<slot />
		</div>
	</div>
</div>

<style>
	.section-dotted-pattern {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: radial-gradient(rgba(0, 0, 0, 0.15) 0.9px, transparent 0.5px);
		background-size: 5px 5px;
		mask-image: radial-gradient(ellipse at center, black 40%, transparent 90%);
	}

	.section-container {
		min-height: 100px;
	}
</style>
