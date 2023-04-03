<script>
    // @ts-nocheck  
    import BottomNav from "$lib/components/reusable/NavList.svelte";
</script>


<div class="w-screen h-screen flex-col flex-wrap justify-center static">
    <div class="w-screen h-screen bg-black flex">
        <div class="bg-red-500 text-white h-26 flex-auto">
            <p>ITEM 1</p>
        </div>
        <div class="bg-blue-500 text-white h-26 flex-auto">
            <p>ITEM 2</p>
        </div>
        <div class="bg-yellow-500 text-white h-26 flex-auto">
            <p>ITEM 3</p>
        </div>
    </div>
    <div class="w-screen h-screen bg-white">
    </div>
    <div class="w-screen h-screen bg-red-300">
    </div>
    <div class="w-screen h-screen bg-orange-700">
    </div>
    <div class="w-screen h-screen bg-white">
    </div>
    
    <div class="w-screen h-screen flex justify-center static">
    <nav class="px-2 sm:px-4 py-2.5 z-20 fixed bottom-0 center-0 mb-2 font-bold bg-slate-700 bg-opacity-20 rounded-2xl text-lg">
        <div class="container flex flex-wrap items-center justify-between mx-auto con">
        <div class="flex md:order-2">
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-3 mt-4 border border-gray-100 rounded-2xl bg-slate-700 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-700 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <BottomNav title="School Life"/>
            <BottomNav title="Elementary"/>
            <BottomNav title="Middle School"/>
            <BottomNav title="High School"/>
            <BottomNav title="Programs"/>
        </ul>
        </div>
        </div>
    </nav>
</div>
</div>
