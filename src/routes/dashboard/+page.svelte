<script>
    // @ts-nocheck
    // import Navbar from "$lib/components/dashboard/Navbar.svelte";
	import Navbar from "$lib/components/forms/Navbar.svelte";
    import Sidebar from "$lib/components/dashboard/Sidebar.svelte";
	import Dashboard from "$lib/components/Dashboard.svelte";
	import Gender from "$lib/components/dashboard/Gender.svelte";
	import Records from "$lib/components/dashboard/Records.svelte";

    let showDescriptions = true

    // Sidebar click changes this
    export let toDisplay = 'dashboard';
</script>

<Navbar /> 
    <div class="flex justify-start bg-red-500">
        <div class="animation duration-300 truncate h-full hidden sm:inline {showDescriptions ?  'w-min' : 'w-48'}">
            <Sidebar bind:showDescriptions={showDescriptions} bind:toDisplay/>
        </div>
        <div class="w-full h-screen bg-blue-500">
            {#if toDisplay == 'dashboard'}
                <Dashboard/>
            {:else if toDisplay == 'gender'} 
                <Gender/>
            <!-- {:else if toDisplay == 'otherComponents'}  -->
            {/if}
        </div>
        
    </div>
