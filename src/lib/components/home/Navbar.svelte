<script>
    import faith_logo from '$lib/images/faith_academy_letter_logo.svg'
	import Hamburger from '$lib/components/reusable/Hamburger.svelte';

    // Hamburger/sidebar
    export let open = false;
</script>
<!-- Blank space -->
<div class="h-10 bg-blue-900">
    
</div>
<!-- Custom navbar wrapper -->
<div class="flex items-centers justify-center p-2 w-full">
    <a href="/" class="w-full flex justify-start lg:justify-center">
        <img src={faith_logo} alt="faith_logo" class="h-20">
    </a>
    <!-- Buttons -->
    <div class="hidden lg:flex justify-center items-center gap-8 font-bold text-blue-900 uppercase w-full">
        <a href="#" class="hover:text-slate-400 transition-all duration-200 ease-in">About</a>
        <a href="/apply" class="hover:text-slate-400 transition-all duration-200 ease-in">Apply</a>
        <a href="#" class="hover:text-slate-400 transition-all duration-200 ease-in">Serve</a>
        <a href="#" class="hover:text-slate-400 transition-all duration-200 ease-in">School Life</a>
    </div>
    <div class="flex lg:hidden justify-center items-center w-1/4">
        <Hamburger bind:open/>
    </div>
</div>