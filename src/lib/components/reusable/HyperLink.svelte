<script>
    // @ts-nocheck
    export let buttonName, href,img, clickEvent;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="h-10 dark:bg-gray-800" on:click={clickEvent}>
    <ul class="space-y-2">
       <li>
          <a href={href} class="flex items-center p-2 m-2 text-base text-white rounded-lg dark:text-white hover:bg-sky-100 dark:hover:bg-gray-700 hover:text-black" style="text-decoration-line: none;">
             <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d={img}></svg>
             <span class="ml-3">{buttonName}</span>
          </a>
       </li>
    </ul>
</div>