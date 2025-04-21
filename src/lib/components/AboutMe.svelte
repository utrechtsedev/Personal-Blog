<script>
	import SectionContainer from './SectionContainer.svelte';
	import me from '$lib/image/me.jpg';
	import html5 from '$lib/logo/html5.svg';
	import js from '$lib/logo/js.svg';
	import react from '$lib/logo/react.svg';
	import svelte from '$lib/logo/svelte-logo-cutout.svg';
	import node from '$lib/logo/node-js.svg';
	import python from '$lib/logo/python.svg';
	import go from '$lib/logo/golang.svg';
	import mariadb from '$lib/logo/mariadb.svg';
</script>

<SectionContainer padding="md:p-12" extraClass="p-4 pt-8">
	<div class="flex flex-col items-center">
		<div class="relative">
			<div
				class="absolute w-full h-full top-0 left-0 rounded-full blur-xl bg-blue-400 opacity-60 -z-10 transform scale-75 translate-y-4"
			></div>
			<img class="w-50 relative z-10 rounded-full" src={me} />
		</div>
		<p class="text-center text-2xl font-bold">Wat kan ik <br /> voor jou doen?</p>
		<p class="text-center">
			Mijn combinatie van expertise en communicatie zorgt voor oplossingen, begrijpelijke uitleg en
			persoonlijke aandacht voor jouw project.
		</p>
		<button class="btn mt-4 btn-primary"><a href="/blog/category/project">Bekijk werk</a></button>
	</div>
	<div class="flex flex-col mt-5 md:flex-row gap-6 max-w-6xl mx-auto">
		<!-- First Card -->
		<div
			class="w-full md:w-1/2 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
		>
			<div
				class="h-full relative bg-gradient-to-br from-slate-300/40 to-gray-300/40 backdrop-blur-sm border border-gray-300 p-6 flex flex-col"
			>
				<!-- Background Effect -->
				<div
					class="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-slate-400/30 blur-xl"
				></div>
				<div
					class="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gray-400/30 blur-xl"
				></div>
				<!-- Content -->
				<h2 class="text-2xl font-bold mb-3 relative z-10">Front-end Development</h2>
				<p class="mb-6 relative z-10">
					Creatie van responsieve, interactieve gebruikersinterfaces met moderne frameworks.
				</p>
				<!-- Logo Placeholders -->
				<div class="mt-auto flex gap-3 relative z-10">
					<div class="w-12 h-12 flex items-center justify-center">
						<img class="w-12 h-12" src={html5} />
					</div>
					<div class="w-12 h-12 flex items-center justify-center">
						<img class="w-12 h-12" src={svelte} />
					</div>
					<div class="w-12 h-12 flex items-center justify-center">
						<img class="w-12 h-12" src={react} />
					</div>
					<div class="w-12 h-12 flex items-center justify-center">
						<img class="w-12 h-12" src={js} />
					</div>
				</div>
			</div>
		</div>
		<!-- Second Card -->
		<div
			class="w-full md:w-1/2 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
		>
			<div
				class="h-full relative bg-gradient-to-br from-zinc-300/40 to-stone-300/40 backdrop-blur-sm border border-gray-300 p-6 flex flex-col"
			>
				<!-- Background Effect -->
				<div class="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-zinc-400/30 blur-xl"></div>
				<div
					class="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-stone-400/30 blur-xl"
				></div>
				<!-- Content -->
				<h2 class="text-2xl font-bold mb-3 relative z-10">Back-end Solutions</h2>
				<p class="mb-6 relative z-10">
					Bouwen van robuuste API's en server-side logica voor webapplicaties.
				</p>
				<!-- Logo Placeholders -->
				<div class="mt-auto flex gap-3 relative z-10">
					<div class="w-12 h-12 flex items-center justify-center">
						<img class="w-12 h-12" src={node} />
					</div>
					<div class="w-12 h-12 flex items-center justify-center">
						<img class="w-12 h-12" src={python} />
					</div>
					<div class="w-12 h-12 flex items-center justify-center">
						<img class="w-12 h-12" src={go} />
					</div>
					<div class="w-12 h-12 flex items-center justify-center">
						<img class="w-12 h-12" src={mariadb} />
					</div>
				</div>
			</div>
		</div>
	</div>
</SectionContainer>

<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	pt {
		font-family: 'PT Serif', sans-serif;
		position: relative;
	}
</style>
