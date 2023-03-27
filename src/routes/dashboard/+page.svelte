<script>
    // @ts-nocheck
    // import Navbar from "$lib/components/dashboard/Navbar.svelte";
	import Navbar from "$lib/components/forms/Navbar.svelte";
    import Sidebar from "$lib/components/dashboard/Sidebar.svelte";

    let showDescriptions = true
</script>

<Navbar /> 
    <div class="flex justify-center bg-red-500">
        <div class="animation duration-300 truncate h-full hidden sm:inline {showDescriptions ?  'w-1/2' : 'w-48'}">
            <Sidebar bind:showDescriptions={showDescriptions} />
        </div>
        <div class="grid grid-cols-3 bg-red-500 h-full w-full p-2 gap-2 place-items-center ">
            <div class="bg-blue-500 border-2 border-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dolorem blanditiis delectus quos alias totam deserunt, necessitatibus labore quia voluptate optio fugit, expedita accusamus illo veritatis? Consequatur a blanditiis aperiam!
            </div>
            <div class="bg-blue-500">
                These color designs are only for testing purposes
            </div>
            <div class="bg-blue-500">
                So we can see whats happening with the border/overflows
            </div>
            <div class="bg-blue-500 col-span-3">
                Im wide btw
                <br>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quia assumenda nulla alias aperiam magnam soluta accusamus quidem consequatur commodi autem ratione repellendus sit ex, illo dolores corrupti velit ipsa!
            </div>
            <div class="bg-blue-500">
                5
            </div>
            <div class="bg-blue-500">
                I dont know the theme yet so this should look bad.
            </div>
            <div class="bg-blue-500">
                7
            </div>
        </div>
    </div>
