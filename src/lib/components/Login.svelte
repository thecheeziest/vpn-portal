<script>
    import { onMount } from "svelte";
    import { page } from '$app/stores';
    import { currentPath } from '$lib/stores/layoutStore';
    import ShadowWall from "$lib/images/ShadowWall.png";
    import { goto } from "$app/navigation";
    import { isLogin } from "$lib/stores/authStore";

    onMount(() => {
        $currentPath = $page.url.pathname;
    });

    let login = () => {
        goto('/');
        $isLogin = true;
    }
</script>

<div class="flex flex-col items-center mt-10">
    <div class="text-center">
        <h1 class="text-5xl font-bold"><img src={ShadowWall} alt="ShadowWall"></h1>
        <p class="py-5 text-gray-500">VPN User Portal</p>
    </div>

    <form class="bg-base-100 border rounded-lg drop-shadow-xl p-5">
        <div class="form-control mb-3">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
                <span class="label-text">Account</span>
            </label>
            <input type="email" placeholder="Enter your VPN account" class="input input-bordered px-1" required />
        </div>
        <div class="form-control">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
                <span class="label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter your VPN password" class="input input-bordered px-1" required />
        </div>
        <div class="form-control mt-6">
            <button class="btn" on:click={login}>Login</button>
        </div>
    </form>
</div>