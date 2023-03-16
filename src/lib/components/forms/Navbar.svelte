<script>
	import { slide } from 'svelte/transition'
  import Editprofile from './Editprofile.svelte';
	
	let isExpanded = false;
    let isModalOpen = false;

	function clickHandler() {
		isExpanded = !isExpanded
	}

    const handleOpenModal = () => {
		isModalOpen = true;
	};
</script>


<nav class="mb-2 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">FARS</span>
      </a>
      <div class="w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul class="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-14 md:mt-0 md:text-sm md:font-bold md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <a href="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-2 dark:text-gray-400 md:dark:hover:text-dark-blue dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
          </li>
          <li>
            <a href="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-2 dark:text-gray-400 md:dark:hover:text-dark-blue dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
          </li>
          <li>
            <a href="/apply" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-2 dark:text-gray-400 md:dark:hover:text-dark-blue dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Apply</a>
          </li>
          <li>
            <a href="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-2 dark:text-gray-400 md:dark:hover:text-dark-blue dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
          </li>
          <li>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"on:click={clickHandler}>Placeholder <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            {#if isExpanded}
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"on:click={handleOpenModal}>Edit Profile</a>
                </li>
                <li>
                  <a href="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>
                </li>
              </ul>
            {/if}
        </li>
        </ul>
      </div>
    </div>
  </nav>
 
  {#if isModalOpen}
	<Editprofile title={'Edit Profile'} bind:isModalOpen  />
{/if}