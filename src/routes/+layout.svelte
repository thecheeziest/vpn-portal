<script>
	import "../app.css";
	import { page } from '$app/stores';
	import { themeChange } from 'theme-change';
	import Header from '$lib/components/Header.svelte';
    import Footer from "$lib/components/Footer.svelte";

	import {onMount} from 'svelte';
	import {platform, platformName, setLanguage, darkmode} from '$lib/stores/layoutStore';

	onMount(async () => {
		$setLanguage = localStorage.getItem('language') || 'ENG';
		// setLanguage 값 = 로컬스토리지의 language 값
		platform.getPlatform();
        // 현재 플랫폼 감지
		$platformName = $platform.split('/')[0]
		// 현재 플랫폼명 = Windows, iOS..

		$darkmode = localStorage.getItem('mode') === "dark";
		// darkmode로 저장되어 있으면 dark 테마 설정

		themeChange();
	});

</script>

<div class="min-h-screen relative max-w-screen">
	{#if $page.url.pathname !== '/login'}
		<Header>
			<main class="p-3 pb-20 h-full">
				<slot />
			</main>
		</Header>
	{:else}
		<slot></slot>
	{/if}
	<Footer />
</div>