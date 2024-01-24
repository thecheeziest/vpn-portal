<script>
    import { onMount } from "svelte";
    import {platform, platformName} from '$lib/stores/layoutStore';
    import {auth} from '$lib/stores/authStore';
    import Login from "$lib/components/Login.svelte";
    import MyPage from "$lib/components/MyPage.svelte";

    onMount(() => {
        platform.getPlatform();
        // 플랫폼 감지
        $platformName = $platform.split('/')[0];
        // 현재 플랫폼명 = Windows, iOS..
    });
</script>

<section class="h-full">
    {#if !$auth.isLogin}
        <Login />
    {:else}
        <MyPage />
    {/if}
</section>