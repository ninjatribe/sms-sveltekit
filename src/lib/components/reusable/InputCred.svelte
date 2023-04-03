<script>
  // @ts-nocheck
  import { createEventDispatcher } from 'svelte';
  export let label;
  export let type = 'text';
  export let name;
  export let value;

  const dispatch = createEventDispatcher();

  $: onChange(value);

  const handleInputType = (e) => {
		value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
	};

  function onChange(t) {
		dispatch('change', t);
	}
</script>
<div class="relative mb-4" data-te-input-wrapper-init>
    <input
      {type}
      {value}
      {name}
      {onChange}
      on:input={handleInputType}
      class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    />
    <label
      for="{name}"
      class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-blue-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
      >{label}
    </label>
  </div>
