<script>
	// @ts-nocheck

	// import axios from 'axios';
	import { onMount } from 'svelte';
	import { paginate, LightPaginationNav } from 'svelte-paginate';
	import newDocument from '$lib/images/new_document.svg';

	// Components
	import EditGenderModal from '../forms/EditGenderModal.svelte';
	import InsertGenderModal from '../forms/InsertGenderModal.svelte';

	// Variables
	let items = [];
	let search = '';
	let currentPage = 1;
	let pageSize = 3;
	let itemSize;
	let paginatedItems = [];

	// Exported to edit gender modal
	let editId;
	let editGender;
	let editDescription;

	// States
	export let showEditGenderModal = false;
	export let showInsertGenderModal = false;

	async function loadGenders() {
		try {
			let response = await fetch('/api/admin/gender', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			let result = await response.json();
			// console.log(result);
			items = result.response;
		} catch (error) {
			console.error('error', error);
		}
		// axios.get('/api/admin/gender')
		//     .then(response => {
		//         items = response.data.response
		//         // console.log(response.data.response)
		//     })
		//     .catch(err => {
		//         console.log(err)
		//     })
	}

	// const insertGender = async() => {
	//     axios.post('/api/admin/gender/inset',
	//         {
	//             gender: 'Heterosexual',
	//             description: 'straight',
	//         }
	//     )
	//     .then(response => {
	//         console.log(response.status)
	//     })
	//     .catch(err => {
	//         console.log(err)
	//     })
	//     items.forEach(element => {
	//         console.log(element._id)
	//     });
	// }

	const deleteGender = async (id) => {
		const response = await fetch('/api/admin/gender/delete', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				_id: id
			})
		});
		let result = await response.json();
		if (result.status === 'Success') {
			console.log('Success');
			loadGenders();
		}
	};

	$: {
		// If search has a value
		paginatedItems = search
			? items.filter((gender) => {
					return (
						gender.gender.match(RegExp(search, 'gi')) || gender.gender.match(RegExp(search, 'gi'))
					);
			  })
			: items;

		// Change the length of paginate whenever paginated items change.
		if (paginatedItems.length) {
			itemSize = paginatedItems.length;
			paginatedItems = paginate({ items: paginatedItems, pageSize, currentPage });
		}
	}

	onMount(() => {
		loadGenders();
	});
</script>

<div class="h-full w-full">
	<div class="flex p-2 w-ful">
		<button
			class="border-2 rounded-lg p-2 w-10"
			on:click={() => {
				showInsertGenderModal = !showInsertGenderModal;
			}}><img src={newDocument} alt="new_document" /></button
		>
		<div class="flex items-center gap-1">
			<p>Search:</p>
			<input type="text" bind:value={search} />
		</div>
	</div>
	<p class="text-2xl">Genders</p>
	<div>
		<table class="border-2 border-black bg-gray-100 w-full">
			<thead class="bg-gray-300">
				<tr class="bg-gray-300">
					<th class="text-start">ID</th>
					<th class="text-start">Gender</th>
					<th class="text-start">Description</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#key paginatedItems}
					{#if paginatedItems}
						{#each paginatedItems as item}
							<tr class="border-b">
								<td>{item._id.slice(-5)}</td>
								<td>{item.gender}</td>
								<td>{item.description}</td>
								<td class="w-min">
									<button
										class="text-center p-1 w-min my-2 bg-green-300 rounded-md"
										on:click={() => {
											showEditGenderModal = !showEditGenderModal;
											editId = item._id;
											editGender = item.gender;
											editDescription = item.description;
										}}>Edit</button
									>
									<button
										class="text-center p-1 w-min my-2 bg-red-300 rounded-md"
										on:click={() => {
											deleteGender(item._id);
										}}>Delete</button
									>
								</td>
							</tr>
						{/each}
					{/if}
				{/key}
			</tbody>
		</table>
		<LightPaginationNav
			totalItems={itemSize}
			{pageSize}
			{currentPage}
			limit={1}
			showStepOptions={true}
			on:setPage={(e) => (currentPage = e.detail.page)}
		/>
	</div>
	<!-- <button on:click={() => {insertGender()}}>Add hetero</button> -->
	<EditGenderModal
		bind:showEditGenderModal
		bind:editId
		bind:editGender
		bind:editDescription
		{loadGenders}
	/>
	<InsertGenderModal bind:showInsertGenderModal {loadGenders} />
</div>
