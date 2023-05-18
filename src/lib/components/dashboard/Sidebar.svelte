<script>
	// @ts-nocheck
	import HyperLink from "../reusable/HyperLink.svelte";
	export let toDisplay = 'dashboard';
	export let showDescriptions = true;
</script>

<aside
	id="logo-sidebar"
	class=" z-40 w-64 h-full transition-transform hidden sm:block bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
	aria-label="Sidebar"
>
	{#if HyperLink}
		<HyperLink
			href="#"
			buttonName="Dashboard"
			img="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
			clickEvent={() => toDisplay = 'dashboard'}
		/>
		<HyperLink
			href="#"
			buttonName="Records"
			img="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
			clickEvent={() => toDisplay = 'records'}
		/>
		<HyperLink
			href="#"
			buttonName="Users"
			img="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
			clickEvent={() => toDisplay = 'users'}
		/>
		<HyperLink
			href="#"
			buttonName="Gender"
			img="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
			clickEvent={() => toDisplay = 'gender'}
		/>
		<HyperLink
			href="#"
			buttonName="Student List"
			img="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
			clickEvent={() => toDisplay = 'studentlist'}
		/>
		<HyperLink
			href="#"
			buttonName="Payroll"
			img="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"
			clickEvent={() => toDisplay = 'payroll'}
		/>
		<HyperLink
			href="#"
			buttonName="Renumeration"
			img="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"
			clickEvent={() => toDisplay = 'renumeration'}
		/>
		<HyperLink
			href="#"
			buttonName="Sample"
			img="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"
			clickEvent={() => toDisplay = 'sample'}
		/>
	{/if}
</aside>
