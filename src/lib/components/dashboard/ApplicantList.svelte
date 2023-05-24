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
    <div class="flex w-ful">
        <div class="items-center w-full">
            <p class="text-3xl bg-blue-800 mb-5 font-bold text-white p-4">Applicants List</p>
            <div class="flex float-right">
                <p class="text-3xl mr-5">Search: </p>
                <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="text" bind:value={search}>
            </div>
        </div>
    </div>  
    <div>
        <table class="border-2 bg-white w-full">
            <colgroup>
                <col width="20%">
                <col width="20%">
                <col width="20%">
                <col width="15%">
                <col width="25%">
            </colgroup>
            <thead class="bg-gray-300 text-md uppercase">
                <tr class="bg-grey-300 py-2">
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
                                <span class="bg-yellow-500 text-black text-md font-medium mr-2 px-2 py-2 rounded">Pending</span>
                                {:else if item.pending === "Approve"}
                                <span class="bg-green-500 text-white text-md font-medium mr-2 px-2 py-2 rounded">Approved</span>
                                {:else if item.pending === "Declined"}
                                <span class="bg-red-500 text-white text-md font-medium mr-2 px-2 py-2 rounded">Declined</span>
                                {/if}
                            </td>
                            <td class="w-min">
                                <button class="text-center p-1 w-min my-2 bg-green-300 rounded-md" on:click={(e) => {showEditApplicantModal = !showEditApplicantModal; editId = item._id; editMartialStatus = item.martial_status; editFamilyRole = item.family_role; editPending = item.pending; completeName = item.completeName; email = item.email; inform = item.inform; ads = item.ads}}>Edit</button>
                                <button class="text-center p-1 w-min my-2 bg-yellow-300 rounded-md" on:click={clickHandler}>Show</button>
                                <button class="text-center p-1 w-min my-2 bg-red-300 rounded-md" on:click={() => {deleteApplicant(item._id)}}>Delete</button>
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