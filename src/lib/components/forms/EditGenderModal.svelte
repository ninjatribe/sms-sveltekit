<script>
	// @ts-nocheck

	// State management
	export let showEditGenderModal = false;

	// Exported variables
	export let editId;
	export let editGender;
	export let editDescription;

	// Function
	export let loadGenders = () => {};

	let newGender;
	let newDescription;

	const updateGender = async () => {
		const response = await fetch('/api/admin/gender/update', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				_id: editId,
				gender: newGender,
				description: newDescription
			})
		});
		let result = await response.json();
		if (result.status === 'Success') {
			console.log('Success');
			loadGenders();
			newGender = '';
			newDescription = '';
			showEditGenderModal = !showEditGenderModal;
		}
	};
</script>

<!-- This div should cover the whole relative-parent div -->
<!-- Boilerplate modal for dashboard or anything that has relative parent -->
<div
	class="w-full h-full flex justify-center items-center absolute top-0 z-50 {showEditGenderModal
		? 'block'
		: 'hidden'}"
>
	<!-- "Main" div -->
	<div class="flex flex-col justify-around items-center w-72 h-60 bg-slate-300">
		<div>
			<p class="text-xl bold">Edit gender</p>
			<p>{editId}</p>
			<p>Gender</p>
			<input type="text" bind:value={newGender} placeholder={editGender} />
			<p>Description</p>
			<input type="text" bind:value={newDescription} placeholder={editDescription} />
		</div>
		<div>
			<button
				class="bg-blue-300 w-14 p-2 border-2 rounded-lg"
				on:click={() => {
					updateGender();
				}}>Save</button
			>
			<button
				class="bg-red-300 w-14 p-2 border-2 rounded-lg"
				on:click={() => {
					showEditGenderModal = !showEditGenderModal;
				}}>Close</button
			>
		</div>
	</div>
</div>
