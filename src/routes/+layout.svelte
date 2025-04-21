<script>
	import '../lib/app.css';
	import { Home, User, ShoppingBag, Folder, Phone } from 'lucide-svelte';
	import { siteAuthor, available } from '$lib/config';
</script>

<div class="mt-8 flex justify-center">
	<!-- Main container with increased width and significantly increased height -->
	<div class="relative w-[90%] h-24 flex overflow-hidden">
		<!-- Gradient top border -->
		<div
			class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent z-10"
		></div>
		<!-- Gradient bottom border -->
		<div
			class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent z-10"
		></div>
		<!-- Simple dotted pattern -->
		<div class="absolute top-0 left-0 w-full h-full pointer-events-none">
			<div class="dotted-pattern"></div>
		</div>
		<!-- Inner content container with more compact spacing -->
		<div class="w-[60%] mx-auto flex items-center justify-between">
			<!-- Left side - Profile with tighter spacing -->
			<div class="flex items-center z-20">
				<div class="h-14 w-14 rounded-full overflow-hidden bg-gray-200">
					<img
						src="https://spoedspecialist.nl/logo.png"
						alt="Profile"
						class="h-full w-full object-cover"
					/>
				</div>
				<div class="ml-3 hidden md:block">
					<p class="font-medium text-lg text-gray-800">{siteAuthor}</p>
					<div class="flex items-center mt-1">
						<div class="relative">
							<div class="h-3 w-3 {available ? 'bg-green-500' : 'bg-red-500'} rounded-full"></div>
							<div
								class="absolute top-0 left-0 h-3 w-3 {available
									? 'bg-green-500'
									: 'bg-red-500'} rounded-full animate-ping opacity-75"
							></div>
						</div>
						<span class="ml-2 text-sm {available ? 'text-green-500' : 'text-red-500'}"
							>{available ? 'Beschikbaar' : 'Niet Beschikbaar'}</span
						>
					</div>
				</div>
			</div>
			<!-- Right side - Navigation with tighter spacing -->
			<div class="flex space-x-9 z-20">
				<Home class="h-7 w-7 text-gray-600 hover:text-gray-900 cursor-pointer" />
				<User class="h-7 w-7 text-gray-600 hover:text-gray-900 cursor-pointer" />
				<ShoppingBag class="h-7 w-7 text-gray-600 hover:text-gray-900 cursor-pointer" />
				<Folder class="h-7 w-7 text-gray-600 hover:text-gray-900 cursor-pointer" />
				<Phone class="h-7 w-7 text-gray-600 hover:text-gray-900 cursor-pointer" />
			</div>
		</div>
	</div>
</div>
<slot />

<style>
	.dotted-pattern {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: radial-gradient(rgba(0, 0, 0, 0.18) 0.9px, transparent 0.5px);
		background-size: 5px 5px;
		mask-image: radial-gradient(ellipse at 50% 0%, black 40%, transparent 90%);
	}
</style>

