<script>
	let { data } = $props();
	const { uniqueCategories } = data;
	import SectionContainer from '$lib/components/SectionContainer.svelte';
</script>

<svelte:head>
	<title>Blog | Categories</title>
</svelte:head>
<SectionContainer>
	<div class="compressed-content">
		<h1 class="h2">Alle blog categorieën</h1>

		<ul>
			{#each uniqueCategories as category}
				<li>
					<a href="/blog/category/{category.title}">
						{category.title}
					</a>
					({category.count})
				</li>
			{/each}
		</ul>
	</div>
</SectionContainer>
