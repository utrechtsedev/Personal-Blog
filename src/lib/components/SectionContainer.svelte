<script>
	// Props for customization
	export let padding = 'p-6'; // Default padding
	export let extraClass = ''; // Additional classes if needed
</script>

<!-- Fixed width container to ensure consistent alignment -->
<div class="fixed-width-container mx-auto">
	<div class="section-container relative {padding} {extraClass}">
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
	/* Fixed width container ensures all sections have identical width */
	.fixed-width-container {
		width: 95%;
		max-width: 800px; /* Adjust this value as needed for your design */
	}
	
	/* Container takes the full width of its parent */
	.section-container {
		width: 100%;
		min-height: 100px;
	}
	
	.section-dotted-pattern {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: 5px 5px;
		mask-image: radial-gradient(ellipse at center, black 40%, transparent 90%);
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

	/* Media query for responsive behavior while maintaining alignment */
	@media (max-width: 768px) {
		.fixed-width-container {
			width: 95%;
		}
	}
</style>
