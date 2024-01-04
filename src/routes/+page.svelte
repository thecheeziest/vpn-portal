<script>
    import MainContent from "$lib/components/MainContent.svelte";

	import { onMount } from "svelte";
	import { page } from '$app/stores';
	import {currentPath} from '$lib/stores/layoutStore';

    onMount(() => {
        $currentPath = $page.url.pathname;
		// 현재 패스 값 = nav 메뉴 on
    });
</script>

<svelte:head>
	<title>VPN Portal</title>
</svelte:head>

<section class="h-full pt-10">
	<MainContent />
</section>