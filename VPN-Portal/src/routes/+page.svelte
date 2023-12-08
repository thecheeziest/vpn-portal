<script>
    import MainContent from "$lib/components/MainContent.svelte";

	import { onMount } from "svelte";
	import { page } from '$app/stores';
    import { currentPath } from '$lib/stores/layoutStore';

    onMount(() => {
        $currentPath = $page.url.pathname;
    });
</script>

<svelte:head>
	<title>VPN Portal</title>
</svelte:head>

<section>
	<MainContent />
</section>