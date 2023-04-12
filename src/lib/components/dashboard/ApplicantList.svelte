<script>
// @ts-nocheck
    import { onMount } from "svelte";
    import { paginate, LightPaginationNav } from 'svelte-paginate'
    import { slide } from 'svelte/transition'
	import EditApplicantList from "../forms/EditApplicantList.svelte";

    export let showEditApplicantModal = false;

    // Variables
    let items = [];
    let search = "";
    let pageSize = 5;
    let itemSize;
    let paginatedItems = [];
    let currentPage = 1;

    let editId;
    let editMartialStatus;
    let editFamilyRole;
    let editPending;
    let completeName;
    let email;
    let inform;
    let ads;
    
    
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
				applicant.lastName.match(RegExp(search, 'gi')) ||
                applicant.email.match(RegExp(search, 'gi')) ||
                applicant.martial_status.match(RegExp(search, 'gi')) ||
                applicant.family_role.match(RegExp(search, 'gi'))
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
                <col width="20%">
                <col width="20%">
                <col width="20%">
                <col width="15%">
                <col width="25%">
            </colgroup>
            <thead class="bg-gray-300 text-xl">
                <tr class="bg-gray-300">
                    <th class="text-start">Applicant Details</th>
                    <th class="text-start">Status/Role</th>
                    <th class="text-start">Children/s</th>
                    <th class="text-start">Status</th>
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
                            <td>
                                {#if item.pending === "Pending"}
                                <span class="bg-yellow-500 text-black text-xl font-medium mr-2 px-2 py-2 rounded">Pending</span>
                                {:else if item.pending === "Approve"}
                                <span class="bg-green-500 text-white text-xl font-medium mr-2 px-2 py-2 rounded">Approved</span>
                                {:else if item.pending === "Declined"}
                                <span class="bg-red-500 text-white text-xl font-medium mr-2 px-2 py-2 rounded">Declined</span>
                                {/if}
                            </td>
                            <td class="w-min">
                                <button class="text-white bg-green-500 hover:bg-green-500 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" on:click={(e) => {showEditApplicantModal = !showEditApplicantModal; editId = item._id; editMartialStatus = item.martial_status; editFamilyRole = item.family_role; editPending = item.pending; completeName = item.completeName; email = item.email; inform = item.inform; ads = item.ads}}>Edit</button>
                                <button class="text-white bg-yellow-500 hover:bg-yellow-500 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" on:click={clickHandler}>Show</button>
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
    <EditApplicantList bind:showEditApplicantModal bind:editId bind:editMartialStatus bind:editFamilyRole bind:editPending bind:completeName bind:email bind:inform bind:ads {loadApplicants}/>
</div>