<script>
	import SectionContainer from '$lib/components/SectionContainer.svelte';
	import '@fontsource/pt-serif';
</script>

<SectionContainer padding="md:p-12" extraClass="p-4 pt-8">
	<p class="md:text-xl">👋 Hallo, ik ben een</p>
	<h1 class="italics text-2xl md:text-5xl font-bold mt-5 ml-1 text-shadow">
		Full Stack Developer & Blogger
	</h1>
	<p class="mt-5">
		Ik bouw moderne, gebruiksvriendelijke websites en applicaties, en schrijf waardevolle blogs om
		mijn kennis en passie voor technologie met anderen te delen.
	</p>
	<div class="flex mt-5 gap-5">
		<a class="btn btn-primary" href="https://calendly.com/aichou-innovatieweb/30min" target="_blank"
			>Videogesprek</a
		>
		<a class="btn btn-info" href="/blog/category/project">Mijn projecten</a>
		<a class="btn btn-secondary" href="/blog">Blog</a>
	</div>
</SectionContainer>

<style>
	h1 {
		font-family: 'PT Serif', sans-serif;
		position: relative;
	}
</style>
