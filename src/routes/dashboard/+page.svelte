<script>
	// @ts-nocheck
	// import Navbar from "$lib/components/dashboard/Navbar.svelte";
	import Navbar from '$lib/components/forms/Navbar.svelte';
	import Sidebar from '$lib/components/dashboard/Sidebar.svelte';
	import Dashboard from '$lib/components/dashboard/Dashboard.svelte';
	import Gender from '$lib/components/dashboard/Gender.svelte';
	import SampleComponent from '$lib/components/dashboard/SampleComponent.svelte';
	import StudentList from '$lib/components/dashboard/StudentList.svelte';
	import ApplicantList from '$lib/components/dashboard/ApplicantList.svelte';
	// import Records from "$lib/components/dashboard/Records.svelte";

	let showDescriptions = true;

	// Sidebar click changes this
	export let toDisplay = 'dashboard';
</script>

<svelte:head>
	<title>FARS | Dashboard</title>
</svelte:head>

<div class="flex flex-col">
	<Navbar />
	<div class="flex justify-start h-full bg-blue-500">
		<Sidebar bind:showDescriptions bind:toDisplay />
		<div class="w-full  ">
			{#if toDisplay == 'dashboard'}
				<Dashboard />
			{:else if toDisplay == 'gender'}
				<Gender />
			{:else if toDisplay == 'studentlist'}
				<StudentList />
			{:else if toDisplay == 'applicantlist'}
				<ApplicantList />
			{:else if toDisplay == 'sample'}
				<SampleComponent />
				<!-- {:else if toDisplay == 'otherComponents'}  -->
				<!-- To add another component in sidebar, go to /lib/components/dashboard/Sidebar.svelte and add. -->
			{/if}
		</div>
	</div>
</div>
