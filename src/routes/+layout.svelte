<script>
	import '../lib/app.css';
	import { Home, User, ShoppingBag, Folder, Phone } from 'lucide-svelte';
	import { siteAuthor, available } from '$lib/config';
</script>

<div class="mt-8 flex justify-center">
	<!-- Main container with increased width and height -->
	<div class="relative w-[90%] h-24 flex">
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
		<!-- Inner content container -->
		<div class="w-[60%] mx-auto flex items-center justify-between">
			<!-- Left side - Profile -->
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
			<!-- Right side - Navigation -->
			<div class="flex space-x-6 z-20">
				<div class="tooltip tooltip-bottom" data-tip="Home">
					<a href="/" class="nav-btn-circle bg-transparent hover:bg-gray-900/30">
						<Home class="w-7 h-7 text-gray-600" />
					</a>
				</div>
				<div class="tooltip tooltip-bottom" data-tip="Profiel">
					<a href="/profile" class="nav-btn-circle bg-transparent hover:bg-gray-900/30">
						<User class="w-7 h-7 text-gray-600" />
					</a>
				</div>
				<div class="tooltip tooltip-bottom" data-tip="Winkel">
					<a href="/shop" class="nav-btn-circle bg-transparent hover:bg-gray-900/30">
						<ShoppingBag class="w-7 h-7 text-gray-600" />
					</a>
				</div>
				<div class="tooltip tooltip-bottom" data-tip="Projecten">
					<a href="/projects" class="nav-btn-circle bg-transparent hover:bg-gray-900/30">
						<Folder class="w-7 h-7 text-gray-600" />
					</a>
				</div>
				<div class="tooltip tooltip-bottom" data-tip="Contact">
					<a href="/contact" class="nav-btn-circle bg-transparent hover:bg-gray-900/30">
						<Phone class="w-7 h-7 text-gray-600" />
					</a>
				</div>
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
	/* Custom larger circle buttons for navigation */
	.nav-btn-circle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3rem; /* Increased from default circle size */
		height: 3rem; /* Increased from default circle size */
		border-radius: 50%;
		transition: background-color 0.3s ease;
	}
	/* Make tooltip appear below the navbar */
	.tooltip-bottom:before {
		top: 60px !important; /* Adjusted to account for larger buttons */
	}
	.tooltip-bottom:after {
		top: 52px !important; /* Adjusted to account for larger buttons */
	}
</style>

