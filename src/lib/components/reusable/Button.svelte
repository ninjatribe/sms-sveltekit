<script>
    export let bgColor = 'bg-green-500';
    export let bgColorHover = 'bg-green-700';
    export let size = 'text-sm';
</script>

<button class="{size} text-white font-bold {bgColor} py-2 px-4 rounded mx-2 hover:{bgColorHover}">
	<slot />
</button>
