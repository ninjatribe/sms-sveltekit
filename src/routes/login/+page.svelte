<script>
	import { onMount } from 'svelte';

	let password = '';
</script>

<!-- Jumbotron for More Info -->
<div
	class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center translate-y-50 animate-slide-down"
	style="background-image: url('https://img.freepik.com/free-photo/billie-dollar-money-background_1150-749.jpg?w=996&t=st=1678117878~exp=1678118478~hmac=b417f91779648251a3513fc96a3c1f937587c73641a1f97c434b8ba121066ad3'); height: 400px"
>
	<div
		class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
		style="background-color: rgba(0, 0, 0, 0.6)"
	>
		<div class="flex h-full items-center justify-center">
			<div class="text-white">
				<h2 class="mb-4 text-4xl font-semibold">LOG IN</h2>
				<h4 class="mb-6 text-xl font-semibold">FAITH ACADEMY REGISTRATION SYSTEM</h4>
				<button
					type="button"
					class="transition ease-in-out delay-150 bg-neutral-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300 rounded border-2 border-neutral-50 px-7 pt-[10px] pb-[8px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
					data-te-ripple-init
					data-te-ripple-color="light"
				>
					Learn More
				</button>
			</div>
		</div>
	</div>
</div>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
		<!-- Text Description/Info -->
		<div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 translate-x-full animate-fade-in-left">
			<h1 class="title-font font-bold text-5xl text-gray-900">
				Ninja Tribe Interns Fars Project
			</h1>
			<p class="leading-relaxed mt-4 font-medium text-3xl">Jake and friends</p>
		</div>
		<!-- Login form -->
		<div
			class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 translate-x-full animate-fade-in-right"
		>
			<div class="relative mb-4">
				<label for="username" class="leading-7 text-sm text-gray-600">Username/Email</label>
				<input
					type="text"
					id="username"
					name="username"
					class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>
			<div class="relative mb-4">
				<label for="password" class="leading-7 text-sm text-gray-600">Password</label>
				<input
					type="password"
					id="password"
					bind:value={password}
					name="password"
					class="w-full rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base"
				/>
			</div>
			<button
				class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
				>Login</button
			>
			<p class="text-xs text-gray-500 mt-3">Forgot password? Contact administrator for a reset.</p>
		</div>
	</div>
</section>

<!-- Footer with name and addional source of info.-->
<footer
	class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"
>
	<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
		>© 2023 <a href="https://flowbite.com/" class="hover:underline">Coders Tribe™</a>. All Rights
		Reserved.
	</span>
	<ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
		<li>
			<a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
		</li>
		<li>
			<a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
		</li>
		<li>
			<a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
		</li>
		<li>
			<a href="#" class="hover:underline">Contact</a>
		</li>
	</ul>
</footer>

<!-- Keyframes for the div animations -->
<style>
	@keyframes fade-in-left {
		0% {
			opacity: 0;
			transform: translateX(-100%);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes fade-in-right {
		0% {
			opacity: 0;
			transform: translateX(0);
		}
		100% {
			opacity: 1;
			transform: translateX(-20%);
		}
	}

	@keyframes slide-down {
		0% {
			opacity: 0;
			transform: translateY(-50%);
		}
		100% {
			opacity: 1;
			transfrom: translateY(0);
		}
	}

	.animate-fade-in-left {
		animation-name: fade-in-left;
		animation-duration: 1s;
		animation-fill-mode: both;
	}

	.animate-fade-in-right {
		animation-name: fade-in-right;
		animation-duration: 1s;
		animation-fill-mode: both;
	}

	.animate-slide-down {
		animation: slide-down;
		animation-duration: 1s;
		animation-fill-mode: both;
	}
</style>