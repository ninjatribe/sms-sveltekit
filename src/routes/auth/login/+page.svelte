<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { SHA256 } from 'crypto-js';
	import InputCred from '$lib/components/reusable/InputCred.svelte';
	import ButtonGradient from '$lib/components/reusable/ButtonGradient.svelte';
	import Button from '$lib/components/reusable/Button.svelte';
	import Alert from '$lib/components/reusable/Alert.svelte';

	export let data;
	const { user } = data;

	let email = '';
	let password = '';
	let error = '';
	let loggingIn = false;
	let hasAccess = false;
	$: {
		if (user) {
			hasAccess = true;
		} else {
			setTimeout(() => {
				hasAccess = false;
			}, 500);
			goto('/auth/login');
		}
	}

	const handleLogin = async () => {
		const securePassword = await SHA256(password).toString();
		const response = await fetch('/api/auth/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ email, password: securePassword })
		});
		const data = await response.json();
		console.log(data);
		if (data.error) {
			error = data.errorMessage || 'An error occured';
			loggingIn = false;
		} else {
			page.subscribe((value) => {
				value.data.user = {
					_id: data.user._id,
					profile: {
						email: data.user.profile.email,
						firstName: data.user.profile.firstName,
						lastName: data.user.profile.lastName,
						phone: data.user.profile.phone,
						photo: data.user.profile.photo,
						country: data.user.profile.country,
						province: data.user.profile.province,
						displayName: data.user.profile.displayName
					},
					email: data.user.profile.email
				};
			});
			goto('/dashboard');
		}
	};
</script>

<section class="gradient-form h-full bg-neutral-200 dark:bg-neutral-700 ">
	<div class="container h-full p-10 ">
		<div
			class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200"
		>
			<div class="w-full">
				<div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
					<div class="g-0 lg:flex lg:flex-wrap">
						<div class="px-4 md:px-0 lg:w-6/12">
							<div class="md:mx-6 md:p-12">
								<div class="text-center">
									<h4 class="mt-1 mb-1 pb-1 text-xl font-semibold">WELCOME TO</h4>
									<img
										class="mx-auto w-48 mb-12"
										src="https://faith.edu.ph/wp-content/uploads/2020/11/faith-academy-logo.svg"
										alt="logo"
									/>
								</div>
								<form
									method="POST"
									autocomplete="off"
									on:submit={(e) => {
										e.preventDefault();
										if (!loggingIn) {
											loggingIn = true;
											handleLogin();
										}
									}}
								>
									<p class="mb-4">Please login to your account</p>
									<InputCred label="Email" name="email" type="email" bind:value={email} />
									<InputCred label="Password" name="password" type="password" bind:value={password} />
									<div class="mb-12 pt-1 pb-1 text-center">
										<ButtonGradient type={'submit'}>Login</ButtonGradient>
										<a href="#!">Forgot password?</a>
									</div>
									<div class="flex items-center justify-between pb-6">
										<p class="mb-0 mr-2">Don't have an account?</p>
										<Button>Register</Button>
									</div>
								</form>
								{#if error}
									<Alert message={error} bgColor={'bg-red-500'} />
								{/if}
							</div>
						</div>
						<div
							class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
						>
							<div class="text-white w-full h-full relative text-justify align-middle">
								<img
									class="w-full h-full object-cover rounded-r-lg"
									src="https://faith.edu.ph/wp-content/uploads/2020/12/IMG_8597-19-1-1024x682.jpg"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
