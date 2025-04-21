<!-- Renders any page at /blog/category/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { postsPerPage } from '$lib/config';

	let { data } = $props();

	const { page, posts, category, total } = data;

	import SectionContainer from '$lib/components/SectionContainer.svelte';
	let lowerBound = $derived(page * postsPerPage - (postsPerPage - 1) || 1);
	let upperBound = $derived(Math.min(page * postsPerPage, total));
</script>

<svelte:head>
	<title>Category: {category}</title>
</svelte:head>

<SectionContainer>
	<h1>Blog categorie: {category}</h1>
</SectionContainer>
{#if posts.length}
	<PostsList {posts} />
	<Pagination currentPage={page} totalPosts={total} path="/blog/category/{category}/page" />
{:else}
	<SectionContainer>
		<p><strong>Oeps!</strong> We konden geen artikelen vinden in "{category}".</p>

		<p><a href="/blog">Terug naar de blog</a></p>
	</SectionContainer>
{/if}
