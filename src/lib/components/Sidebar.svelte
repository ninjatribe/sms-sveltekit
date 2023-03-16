
<script>
	import Bars from "./icons/Bars.svelte";
	import ChartPie from "./icons/ChartPie.svelte";
	import Users from "./icons/Users.svelte";

   // @ts-nocheck
   export let showDescriptions;
</script>
<div class="flex justify-start items-center gap-3">
   <!-- svelte-ignore a11y-click-events-have-key-events -->
   <button on:click={() => showDescriptions = !showDescriptions}>
      <Bars />
   </button>
    
</div>
<div class="flex justify-start items-center gap-3">
  <div class="flex-col">
   <a href="/" class="flex items-center py-2 mx-2 text-base font-normal text-gray-900 dark:text-white ">
      <ChartPie />
      <span class="ml-4">Dashboard</span>
   </a>
   <a href="/" class="flex items-center py-2 mx-2 text-base font-normal text-gray-900 dark:text-white ">
      <Users />
      <span class="ml-4">Users</span>
   </a>
  </div>
</div>


