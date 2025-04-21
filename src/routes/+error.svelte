<!-- This page handles any error encountered by the site. -->
<script>
	import { page } from '$app/stores';
	import SectionContainer from '$lib/components/SectionContainer.svelte';
</script>

<SectionContainer>
	<h2>{$page.status}</h2>
	<p class="subhead">{$page.error.message}</p>

	<p><strong>Sorry!</strong> Deze pagina bestaat niet</p>
	<ul>
		<li><a href="/">Home</a></li>
	</ul>
</SectionContainer>
