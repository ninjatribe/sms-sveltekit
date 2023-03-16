<script>
	// @ts-nocheck
	import InputCred from '$lib/components/reusable/InputCred.svelte'
	import BtnLogin from '$lib/components/reusable/btn-Login.svelte'
	import BtnRegister from '$lib/components/reusable/btn-register.svelte'

</script>

<section class="gradient-form h-full bg-neutral-200 dark:bg-neutral-700 h-screen">
	<div class="container h-full p-10">
	  <div
		class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
		<div class="w-full">
		  <div
			class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
			<div class="g-0 lg:flex lg:flex-wrap">
			  <div class="px-4 md:px-0 lg:w-6/12">
				<div class="md:mx-6 md:p-12">
				  <div class="text-center">
					<h4 class="mt-1 mb-1 pb-1 text-xl font-semibold">
						WELCOME TO
					  </h4>
					<img
					  class="mx-auto w-48 mb-12"
					  src="https://faith.edu.ph/wp-content/uploads/2020/11/faith-academy-logo.svg"
					  alt="logo" />
				  </div>
				  <form>
					<p class="mb-4">Please login to your account</p>
					<InputCred label = "Username"/>
					<InputCred label = "Password"/>
					<div class="mb-12 pt-1 pb-1 text-center">
					  <BtnLogin/>
					  <a href="#!">Forgot password?</a>
					</div>
					<div class="flex items-center justify-between pb-6">
					  <p class="mb-0 mr-2">Don't have an account?</p>
					  <BtnRegister/>
					</div>
				  </form>
				</div>
			  </div>
			  <div
				class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
				<div class="text-white w-full h-full relative text-justify align-middle">
					<img class="w-full h-full object-cover rounded-r-lg" src="https://faith.edu.ph/wp-content/uploads/2020/12/IMG_8597-19-1-1024x682.jpg" alt="">
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </section>