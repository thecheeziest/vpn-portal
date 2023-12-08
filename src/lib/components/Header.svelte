<script>
    import Logo from "$lib/images/Logo.png";
    import { categoryData } from "$lib/utils/data";
    import { goto } from "$app/navigation";
    import { currentPath } from "$lib/stores/layoutStore";
    import Navbar from "./Navbar.svelte";
    let isDrawerOpen = false;
</script>

<header class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" bind:checked={isDrawerOpen} /> 

    <div class="drawer-content flex flex-col relative h-screen">
        
        <div class="w-full navbar bg-base-300">

            <div class="flex-none lg:hidden">
                <label for="my-drawer-3" aria-label="open sidebar" class:swap-active={isDrawerOpen} class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <!-- 햄버거 메뉴 -->
            
            <div class="flex-1 px-2 mx-2">
                <div class="bg-my-cocoa p-1 rounded-md hidden lg:block">
                    <img src={Logo} alt="Logo">
                </div>
                <!-- Duruan Logo -->

                <h1 class="text-center absolute left-1/2 -translate-x-1/2 hidden lg:block">
                    VPN Use Portal
                </h1>
                <!-- 웹 Title -->

                <h1 class="text-center absolute left-1/2 -translate-x-1/2 lg:hidden">
                    {#if $currentPath === "/"}
                    VPN Use Portal
                    {:else}
                    {$currentPath.slice(1, 2).toUpperCase() + $currentPath.slice(2)}
                    {/if}
                </h1>
                <!-- 모바일 Title -->
            </div>

            <Navbar />
        </div>

        <slot></slot>
        <!-- 메인 콘텐츠 -->

    </div>

    <div class={`drawer-side`}>
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
        <ul class="menu p-4 w-80 min-h-full bg-base-200">
            {#each categoryData as {path, category}}
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <li class={`m-1 ${category === 'Logout' || category === 'Home' ? "border-y-2 py-2" : ""}`} on:click={() => { goto(path); isDrawerOpen = false; } }><a>{category}</a></li>
            {/each}
        </ul>
        <!-- 모바일 카테고리 -->
    </div>
</header>