<script>
// @ts-nocheck

    import Logo from "$lib/images/Logo.png";
    import { categoryData } from "$lib/utils/data";
    import { goto } from "$app/navigation";
    import { currentPath, platformName, setLanguage } from "$lib/stores/layoutStore";
    import Navbar from "./Navbar.svelte";
    import { isLogin } from "$lib/stores/authStore";
    import dictionary from "../../routes/dictionary";

    let isDrawerOpen = false; // 다국어 선택 드롭박스 - 기본 close
    let onLanguage = false; // 디테일 open = false

    let onGuide = () => { // 가이드 메뉴로
        goto(`/guide/${$platformName.toLowerCase()}`);
        isDrawerOpen = false;
    }

    let logout = () => { // 로그아웃
        isDrawerOpen = false;
        $isLogin = false;
        goto('/');
    }

    let changeLanguage = (language) => { // 다국어 선택
        $setLanguage = language;
        localStorage.setItem("language", language);
        onLanguage = false;
    }
</script>

<header class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" bind:checked={isDrawerOpen} /> 

    <div class="drawer-content flex flex-col relative">
        
        <div class="w-full navbar bg-base-300 min-h-fit">

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
                        {$currentPath.split('/').slice(1, 2)}
                        <!-- 우선 패스명 -->
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
                {#if category === 'Logout' && $isLogin}
                    <li class="m-1 border-t-2 pt-2" on:click={logout}><a>{category}</a></li>
                {:else if category === 'Guide'}
                <li class="m-1" on:click={onGuide}><a>{category}</a></li>
                {:else if category !== 'Logout'}
                    <li class={`m-1 ${category === 'Logout' || category === 'Home' ? "border-y-2 py-2" : ""}`} on:click={() => { goto(path); isDrawerOpen = false; } }><a>
                    {category}
                    </a></li>
                {/if}
            {/each}
            <li class="border-y-2 py-2">
                <details class="dropdown" bind:open={onLanguage}>
                    <summary><a class="indent-1">Language</a></summary>
                    <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        {#each Object.keys(dictionary) as language}
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <li on:click={() => changeLanguage(language)}><a>{language}</a></li>    
                        {/each}
                    </ul>
                </details>
            </li>
        </ul>
        <!-- 모바일 카테고리 -->
    </div>
</header>