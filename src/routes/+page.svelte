<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import dateToString from '$lib/utils/dateHelper';
	import { paginate, LightPaginationNav } from 'svelte-paginate';
	import AddStudentForm from '$lib/components/forms/AddStudentForm.svelte';
	import Navbar from '../lib/components/forms/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import TextField from '$lib/components/reusable/TextField.svelte';

	let search;
	let items = [];
	let currentPage = 1;
	let pageSize = 6;
	let itemSize;
	let paginatedItems = [];
	let isModalOpen = false;

	$: {
		// reactive statement to automatically filter data
		paginatedItems = search
			? items.filter((student) => {
					return (
						student.firstName.match(RegExp(search, 'gi')) ||
						student.lastName.match(RegExp(search, 'gi'))
					);
			  })
			: items;
		if (paginatedItems.length) {
			itemSize = paginatedItems.length;
			paginatedItems = paginate({ items: paginatedItems, pageSize, currentPage });
		}
	}

	// fetch student data using  api
	onMount(async () => {
		loadStudent();
	});

	async function loadStudent() {
		try {
			let response = await fetch('/api/admin/student', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			let result = await response.json();
			console.log(result);
			items = result.response;
		} catch (error) {
			console.error('error', error);
		}
	}

	function DownloadHandler() {
		if (paginatedItems) {
			let csv = 'First,Last,Birthday,Gender,Mobile,Language,Citizenship,\n';
			paginatedItems?.forEach((student) => {
				csv += `${student.fistName},`;
				csv += `${student.lastName},`;
				csv += `${dateToString(student.birthday)},`;
				csv += `${student.gender},`;
				csv += `${student.mobile},`;
				csv += `${student.primaryLanguage},`;
				csv += `${student.citizenship}\n`;
			});

			let blob = new Blob([csv], { type: 'text/csv' });
			let url = window.URL.createObjectURL(blob);

			// open url
			window.open(url);
		}
	}

	const handleOpenModal = () => {
		isModalOpen = true;
	};
</script>
<Navbar />
<Sidebar/>

<div class="p-4 sm:ml-64">
	<div class="container mt-12">
		<div class="flex mb-4">
			<button
				type="button"
				class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
				on:click={handleOpenModal}>Add</button
			>
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
				on:click={DownloadHandler}>Download</button
			>
      <button
			  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
			  ><a href="/dashboard">Dashboard</a></button
		  >
			<input
				type="search"
				bind:value={search}
				class="ms-auto w-auto form-input"
				placeholder="Search"
			/>
	</div>
	
		{#key paginatedItems}
			{#if paginatedItems.length}
				<table class="w-full text-lg text-left text-gray-500 dark:text-gray-400">
					<thead
						class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
					>
						<tr>
							<th>Name</th>
							<th>Birthday</th>
							<th>Email</th>
							<th>Gender</th>
							<th>Mobile</th>
							<th>Primary Language</th>
							<th>Citizenship</th>
						</tr>
					</thead>
					<tbody>
						{#each paginatedItems as student}
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td>{student.completeName}</td>
								<td>{dateToString(student.birthday)}</td>
								<td>{student.email}</td>
								<td>{student.gender}</td>
								<td>{student.mobile}</td>
								<td>{student.primarylanguage}</td>
								<td>{student.citizenship}</td>
							</tr>
						{/each}
					</tbody>
				</table>
				<LightPaginationNav
					totalItems={itemSize}
					{pageSize}
					,
					{currentPage}
					limit={1}
					showStepOptions={true}
					on:setPage={(e) => (currentPage = e.detail.page)}
				/>
			{/if}
		{/key}
	</div>
</div>
	{#if TextField}
		<TextField/>
	{/if}

{#if isModalOpen}
	<AddStudentForm title={'Add Student'} bind:isModalOpen {loadStudent} />
{/if}