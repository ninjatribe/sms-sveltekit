<script>
    // @ts-nocheck

    import { onMount } from "svelte";
    import { paginate, LightPaginationNav } from 'svelte-paginate'
    import { slide } from 'svelte/transition'

    // Variables
    let items = [];
    let search = "";
    let pageSize = 5;
    let itemSize;
    let paginatedItems = [];
    let currentPage = 1;
    
    async function loadApplicants() {
        try {
            let response = await fetch('/api/admin/parent', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let result = await response.json();
            items = result.response;
        } catch (error) {
            console.error('error', error);
        }
    }
        
    const deleteApplicant = async(id) => {
        const response = await fetch('/api/admin/parent/delete', {
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
            console.log("Success");
            loadApplicants()
        }
    }
    
    $: {
	// reactive statement to automatically filter data
    paginatedItems = search
        ? items.filter((applicant) => {
            return (
                applicant.firstName.match(RegExp(search, 'gi')) ||
				applicant.lastName.match(RegExp(search, 'gi'))
                );
            })
            : items;
        if (paginatedItems.length) {
            itemSize = paginatedItems.length;
            paginatedItems = paginate({ items: paginatedItems, pageSize, currentPage });
        }
    }
    
    onMount(() => {
        loadApplicants()
    })
	
	let isExpanded = false

	function clickHandler() {
		isExpanded = !isExpanded
    }
</script>
    
<div class="h-full w-full">
    <div class="flex p-2 w-ful">
        <div class="flex items-center gap-1">
            <p>Search: </p>
            <input type="text" bind:value={search}>
        </div>
    </div>  
    <p class="text-3xl font-black p-4">Applicants</p>
    <div>
        <table class="border-2 border-black bg-gray-100 w-full">
            <colgroup>
                <col width="25%">
                <col width="25%">
                <col width="25%">
                <col width="25%">
            </colgroup>
            <thead class="bg-gray-300 text-xl">
                <tr class="bg-gray-300">
                    <th class="text-start">Applicant Details</th>
                    <th class="text-start">Status/Role</th>
                    <th class="text-start">Children/s</th>
                    <th class="text-start">Action</th>
                </tr>
            </thead>
            <tbody>
                {#key paginatedItems}
                    {#if paginatedItems}
                        {#each paginatedItems as item}
                        <tr class="border-2 border-black mx-5x">
                            <td class="p-2">
                                <p>Name: <b>{item.completeName}</b></p>
                                <p>Email: <b>{item.email}</b></p>
                                <p>Gender: <b>{item.gender}</b></p>
                            </td>
                            <td>
                                <p>Martial Status: <b>{item.martial_status}</b></p>
                                <p>Family Role: <b>{item.family_role}</b></p>
                            </td>
                            <td>
                                {#if isExpanded}
                                <ul  transition:slide>
                                    {#each item.$studentsArray as child}
                                    <p>Name: <b>{child.name}</b></p>
                                    <p>Grade: <b>{child.grade}</b></p>
                                    <p>School Year: <b>{child.year}</b></p>
                                    {/each}
                                </ul>
                                {/if}
                            </td>
                            <td class="w-min">
                                <button class="text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" on:click={clickHandler}>Show Children/s</button>
                                <button class="text-white bg-red-700 hover:bg-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" on:click={() => {deleteApplicant(item._id)}}>Delete</button>
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
</div>