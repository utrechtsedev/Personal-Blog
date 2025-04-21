<script>
	import SectionContainer from './SectionContainer.svelte';

	let { posts = [] } = $props();
</script>

<ul>
	{#each posts as post}
		<SectionContainer>
			<li>
				<article>
					<a href="/blog/{post.slug}">
						<h2>
							{post.title}
						</h2>
					</a>
				</article>

				<p>{post.excerpt}</p>
				<div class="meta">
					<b>Gepubliceerd:</b>
					{post.date}
				</div>
			</li>
		</SectionContainer>
	{/each}
</ul>

<style>
</style>
