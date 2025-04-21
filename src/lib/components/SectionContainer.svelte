<script>
	// Props for customization
	export let padding = 'p-6'; // Default padding
	export let extraClass = ''; // Additional classes if needed
</script>

<div class="section-container-wrapper flex justify-center w-full">
	<div class="section-container relative w-[95%] md:w-[50%] {padding} {extraClass}">
		<!-- Left border with improved gradient -->
		<div class="absolute top-0 left-0 h-full w-px left-border-gradient"></div>
		<!-- Right border with improved gradient -->
		<div class="absolute top-0 right-0 h-full w-px right-border-gradient"></div>
		<!-- Bottom border with improved gradient -->
		<div class="absolute bottom-0 left-0 w-full h-px bottom-border-gradient"></div>
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
		background-size: 5px 5px;
		mask-image: radial-gradient(ellipse at center, black 40%, transparent 90%);
	}
	.section-container {
		min-height: 100px;
	}

	/* Custom gradient borders with more subtle fading */
	.left-border-gradient {
		background: linear-gradient(
			to bottom,
			rgba(156, 163, 175, 0.05) 0%,
			rgba(156, 163, 175, 0.8) 50%,
			rgba(156, 163, 175, 0.05) 100%
		);
	}

	.right-border-gradient {
		background: linear-gradient(
			to bottom,
			rgba(156, 163, 175, 0.05) 0%,
			rgba(156, 163, 175, 0.8) 50%,
			rgba(156, 163, 175, 0.05) 100%
		);
	}

	.bottom-border-gradient {
		background: linear-gradient(
			to right,
			rgba(156, 163, 175, 0.05) 0%,
			rgba(156, 163, 175, 0.8) 50%,
			rgba(156, 163, 175, 0.05) 100%
		);
	}
</style>
