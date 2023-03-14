<script>
	import listImg from "$lib/images/list.svg";
	import homeImg from "$lib/images/home.svg";

    let showDescriptions = true
</script>

<div class="w-screen sm:h-screen bg-green-500 flex flex-col sm:flex-row">
    <div class="animation duration-300 truncate h-full p-0 sm:p-1 hidden sm:inline {showDescriptions ?  'w-60' : 'w-14'}">
        <div class="flex justify-start items-center gap-3">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <img src={listImg} alt="list" class="h-10" on:click={() => showDescriptions = !showDescriptions}>
            <p class="truncate">Hide me</p>
        </div>
        <div class="flex justify-start items-center gap-3">
            <a href="/" class="min-w-max min-h-max"><img src={homeImg} alt="list" class="h-10"></a>
            <p class="truncate">Home</p>
        </div>
    </div>

    <div class="flex flex-col sm:hidden w-full">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="flex justify-between items-center px-2 sm:hidden w-full">
            <img src={listImg} alt="list" class="h-10" on:click={() => showDescriptions = !showDescriptions}>
            <p>Logo</p>
        </div>
        <div class="animation duration-300 px-2 {showDescriptions ?  'invisible h-0' : 'h-16'}">
            <div class="flex flex-col">
                <a href="/" class="min-w-max min-h-max"><img src={homeImg} alt="list" class="h-10"></a>
                <p class="truncate">Home</p>
            </div>
        </div>
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