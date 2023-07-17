<script>
	// @ts-nocheck

	// State management
	export let showInsertGenderModal = false;

	// Function
	export let loadGenders = () => {};

	let newGender;
	let newDescription;

	const insertGender = async () => {
		const response = await fetch('/api/admin/gender/insert', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
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
			showInsertGenderModal = !showInsertGenderModal;
		}
	};
</script>

<!-- This div should cover the whole relative-parent div -->
<!-- Boilerplate modal for dashboard or anything that has relative parent -->
<div
	class="w-full h-full flex justify-center items-center absolute top-0 z-50 {showInsertGenderModal
		? 'block'
		: 'hidden'}"
>
	<!-- "Main" div -->
	<div class="flex flex-col justify-around items-center w-72 h-60 bg-slate-300">
		<div>
			<p class="text-xl bold">Insert gender</p>
			<p>Gender</p>
			<input type="text" bind:value={newGender} />
			<p>Description</p>
			<input type="text" bind:value={newDescription} />
		</div>
		<div>
			<button
				class="bg-blue-300 w-16 p-2 border-2 rounded-lg"
				on:click={() => {
					insertGender();
				}}>Insert</button
			>
			<button
				class="bg-red-300 w-14 p-2 border-2 rounded-lg"
				on:click={() => {
					showInsertGenderModal = !showInsertGenderModal;
				}}>Close</button
			>
		</div>
	</div>
</div>
