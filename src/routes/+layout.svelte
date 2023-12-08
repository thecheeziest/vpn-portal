<script>
	import "../app.css";
	import Header from '$lib/components/Header.svelte';
    import Footer from "$lib/components/Footer.svelte";
	import { page } from '$app/stores';

	import { onMount } from 'svelte';

let platform = '';

onMount(() => {
  // 사용자의 플랫폼 확인
	if (navigator.platform.includes('Win')) {
		platform = 'Window';
	} else if (navigator.platform.includes('Linux')) {
		platform = 'Linux';
	}
});

let whatplatform = () => {
	console.log(navigator.platform)
}
</script>
<button on:click={whatplatform}>Click</button>
<div class="min-h-screen relative">
	{#if $page.url.pathname !== '/login'}
		<Header>
			<main class="p-5 pb-20 h-full">
				<slot />
			</main>
		</Header>
	{:else}
		<slot></slot>
	{/if}
	<Footer />
</div>