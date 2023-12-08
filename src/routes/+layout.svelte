<script>
	import "../app.css";
	import Header from '$lib/components/Header.svelte';
    import Footer from "$lib/components/Footer.svelte";
	import { page } from '$app/stores'
</script>

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