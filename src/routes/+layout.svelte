<script>
	import "../app.css";
	import "$lib/font/pretendard.css";
	import { page } from '$app/stores';
	import {onMount} from 'svelte';
	import { themeChange } from 'theme-change';
	import {platform, platformName, setLanguage, darkmode} from '$lib/stores/layoutStore';
	import Header from '$lib/components/Header.svelte';
    import Footer from "$lib/components/Footer.svelte";
	import {isLogin, getSession} from '$lib/stores/authStore.js';
	export const ssr = false;

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

		$getSession = document.cookie.substring("session=".length); // 세션 값 추출
		$isLogin = $getSession !== ''; // 세션 값이 있으면 로그인 상태로 설정
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