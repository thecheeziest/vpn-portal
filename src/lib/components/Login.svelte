<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import { page } from '$app/stores';
    import { currentPath } from '$lib/stores/layoutStore';
    import ShadowWall from "$lib/images/ShadowWall.png";
    import { goto } from "$app/navigation";
    import { isLogin } from "$lib/stores/authStore";
    import { l } from '../../routes/i18n';

    onMount(() => {
        $currentPath = $page.url.pathname;
    });

    let login = () => {
        goto('/');
        $isLogin = true;
    }
</script>

<div class="flex flex-col items-center mt-10">
    <div class="text-center mb-5">
        <h1 class="text-5xl font-bold"><img src={ShadowWall} alt="ShadowWall"></h1>
        <p class="py-5 text-my-lorg">{$l(`login.title`)}</p>
    </div>

    <form class="bg-base-100 border rounded-3xl drop-shadow-xl">
        <div class="form-control m-4 w-60">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
                <span class="label-text">{$l(`login.account`)}</span>
            </label>
            <input type="email" placeholder={$l(`login.accountPl`)} class="input input-bordered px-1" required autocomplete="username"/>
        </div>
        <div class="form-control m-4 w-60">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
                <span class="label-text">{$l(`login.password`)}</span>
            </label>
            <input type="password" placeholder={$l(`login.passwordPl`)} class="input input-bordered px-1" required autocomplete="current-password"/>
        </div>
        <div class="form-control m-4 mt-7">
            <button class="btn" on:click={login}>{$l(`login.login`)}</button>
        </div>
    </form>
</div>