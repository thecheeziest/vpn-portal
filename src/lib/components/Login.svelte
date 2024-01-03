<script>
// @ts-nocheck
    import { onMount } from "svelte";
    import { page } from '$app/stores';
    import { currentPath, darkmode } from '$lib/stores/layoutStore';
    import { l } from '../../routes/i18n';
    import ShadowWall from "$lib/images/ShadowWall.png";
    import LoginForm from '$lib/components/LoginForm.svelte';

    $: darkStyle = !$darkmode && "text-my-lorg";

    onMount(() => {
        $currentPath = $page.url.pathname;
    });
</script>

<div class="flex flex-col items-center mt-10">
    <div class="text-center mb-5">
        <h1 class="text-5xl font-bold"><img src={ShadowWall} alt="ShadowWall"></h1>
        <p class={`py-5 ${darkStyle}`}>{$l(`login.title`)}</p>
    </div>
    <!-- 로고 및 타이틀 -->

    <LoginForm />
</div>