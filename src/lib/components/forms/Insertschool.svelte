<script>
    // @ts-nocheck

	import { bind } from "svelte/internal";

    
    // State management
    export let showInsertschoolModal = false;

    // Function
    export let loadschools = () => {};

    let newschool;
    let newDescription;
    let newisactive;

    const insertschool = async() => {
        const response = await fetch('/api/admin/school/insert', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				school: newschool,
				description: newDescription,
                isactive: newisactive
			})
		});
		let result = await response.json();
		if (result.status === 'Success') {
            console.log("Success");
            loadschools();
            newschool = ''
            newDescription = ''
            newisactive = ''
            showInsertschoolModal = !showInsertschoolModal
		}
    }
</script>

<!-- This div should cover the whole relative-parent div -->
<!-- Boilerplate modal for dashboard or anything that has relative parent -->
<div class="w-full h-full flex justify-center items-center absolute top-0 z-50 {showInsertschoolModal ? "block" : "hidden"}">
    <!-- "Main" div -->
    <div class="flex flex-col justify-around items-center w-72 h-60 bg-slate-300">
        <div>
            <p class="text-xl bold">Insert school</p>
            <p>school</p>
            <input type="text" bind:value={newschool}>
            <p>Description</p>
            <input type="text" bind:value={newDescription}>
            <p> isactive</p>
            <select bind:value={newisactive}>
            <option value="/" disabled selected>select an option</option>
            <option value="true">true</option>
            <option value="false">false</option>
            </select>
        </div>
        <div>
            <button class="bg-blue-300 w-16 p-2 border-2 rounded-lg" on:click={() => {insertschool()}}>Insert</button>
            <button class="bg-red-300 w-14 p-2 border-2 rounded-lg" on:click={() => {showInsertschoolModal = !showInsertschoolModal}}>Close</button>
        </div>
    </div>
</div>