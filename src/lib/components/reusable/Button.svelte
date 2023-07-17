<script>
	// @ts-nocheck
	export let type = 'button';
	export let extraClasses = '';
	export let textColor = 'text-neutral-500';
	export let textColorHover = 'text-white';
	export let bgColor = 'bg-white';
	export let bgColorHover = 'bg-blue-500';
	export let borderColor = 'border-neutral-500';
	export let borderColorHover = 'border-blue-500';
</script>

<button
	{type}
	class="{extraClasses} {textColor} {bgColor} {borderColor} inline-block rounded border px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:{borderColorHover} hover:{bgColorHover} hover:bg-opacity-100 hover:{textColorHover} focus:{borderColorHover} focus:{textColorHover} focus:outline-none focus:ring-0 active:{borderColorHover} active:{textColorHover} dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
	data-te-ripple-init
	data-te-ripple-color="light"
>
	<slot />
</button>
