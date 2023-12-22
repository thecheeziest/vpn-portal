<script>
    import { onMount } from "svelte";
	import { page } from '$app/stores';
    import { currentPath } from '$lib/stores/layoutStore';
    import { isLogin } from "$lib/stores/authStore";
    import Login from "$lib/components/Login.svelte";
    import MyPage from "$lib/components/MyPage.svelte";

    onMount(() => {
        $currentPath = $page.url.pathname;
    });
</script>

<section class="h-full">
    {#if !$isLogin}
        <Login />
    {:else}
        <MyPage />
    {/if}
</section>