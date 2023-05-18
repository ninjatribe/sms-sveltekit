<script>
    // @ts-nocheck
    export let showEditApplicantModal = false;
    
    // Exported variables
    export let editId;
    export let editMartialStatus;
    export let editFamilyRole;
    export let editPending;;
    export let completeName;
    export let email;
    export let inform;
    export let ads;
    
    // Function
    export let loadApplicants = () => {};

    let newPending;
        
    const handleClose = () => {
        showEditApplicantModal = false;
    };
    
    const updateApplicant = async() => {
        const response = await fetch('/api/admin/parent/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: editId,
                martial_status: editMartialStatus,
                family_role: editFamilyRole,
                pending: newPending,
                completeName: completeName,
            })
        });
        let result = await response.json();
        if (result.status === 'Success') {
            console.log("Success");
            loadApplicants();
            showEditApplicantModal = !showEditApplicantModal;
        }
    }
</script>
    
<!-- This div should cover the whole relative-parent div -->
<!-- Boilerplate modal for dashboard or anything that has relative parent 
<div class="w-full h-full flex justify-center items-center absolute top-0 z-50 {showEditApplicantModal ? "block" : "hidden"}">
    <div class="flex flex-col justify-around items-center w-72 h-60 bg-slate-300">
        <div>
            <p class="text-xl bold">Edit Applicant Details</p>
            <p>{editId}</p>
            <p>Martial Status</p>
            <input type="text" bind:value={editMartialStatus}>
            <p>Family</p>
            <input type="text" bind:value={editFamilyRole}>
            <p>Status</p>
            <input type="text" bind:value={newPending} placeholder={editPending}
        </div>
        <div>
            <button class="bg-blue-300 w-14 p-2 border-2 rounded-lg" on:click={() => {updateApplicant()}}>Save</button>
            <button class="bg-red-300 w-14 p-2 border-2 rounded-lg" on:click={() => {showEditApplicantModal = !showEditApplicantModal}}>Close</button>
        </div>
    </div>
</div>-->
<div class="fixed z-10 inset-0 overflow-y-auto { showEditApplicantModal ? 'block' : 'hidden' }">
    <div class="bg-white overflow-hidden transform transition-all max-w-4xl mx-auto my-20" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="p-6 bg-blue-900 text-white ">
            <h2 class="text-lg font-medium leading-6" id="modal-headline">

            </h2>
        </div>
    
        <div class="mt-4">
            <div class="grid grid-cols-2 gap-2">
                <div class="mb-4">
                    <label class="block mb-2 font-bold text-blue-900">Name:</label>
                    <input bind:value={completeName} name="firstName" class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100" required>    
                </div>
                <div class="mb-4">
                    <label for="pending" class="block mb-2 font-bold text-blue-900">Status:</label>
                    <input bind:value={newPending} placeholder={editPending} class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100" required>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div class="mb-4">
                    <label for="Martial_Status" class="block mb-2 font-bold text-blue-900">Martial Status:</label>
                    <input bind:value={editMartialStatus} class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100" required>
                </div>
                <div class="mb-4">
                    <label for="family_role" class="block mb-2 font-bold text-blue-900">Family Role:</label>
                    <input bind:value={editFamilyRole} class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100" required>
                </div>
            </div>
            <div class="grid grid-cols-3 gap 2">
                <div class="mb-4">
                    <label for="email" class="block mb-2 font-bold text-blue-900">Email:</label>
                    <input bind:value={email} class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100" required>
                </div>
                <div class="mb-4">
                    <label for="inform" class="block mb-2 font-bold text-blue-900">Heard About:</label>
                    <input bind:value={inform} class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100" required>
                </div>
                <div class="mb-4">
                    <label for="ads" class="block mb-2 font-bold text-blue-900">Advertisement:</label>
                    <input bind:value={ads} class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100" required>
                </div>
            </div>
            <div class="p-5">
                <button type="button" class="px-4 py-2 font-bold text-white bg-red-900 rounded float-left" on:click={handleClose}>Close</button>
                <button type="submit" class="px-4 py-2 font-bold text-white bg-blue-900 rounded float-right" on:click={() => {updateApplicant()}}>Save</button>
            </div>
        </div>
    </div>
</div>