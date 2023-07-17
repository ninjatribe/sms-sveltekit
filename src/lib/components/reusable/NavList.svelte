<script>
	// @ts-nocheck
	export let title;
	export let filePath;
</script>

<li href={filePath} class="bg-inheret py-4 px-2 rounded-2xl w-32 border">
	<a
		href={filePath}
		class="bg-inheret block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-400 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-center m-0 text-sm"
		>{title}</a
	>
</li>
