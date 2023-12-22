<script>
// @ts-nocheck
import Logo from "$lib/images/Logo.png";
import { goto } from "$app/navigation";
import { currentPath, darkmode, platformName, setLanguage } from "$lib/stores/layoutStore";
import Navbar from "./Navbar.svelte";
import { isLogin } from "$lib/stores/authStore";
import dictionary from "../../routes/dictionary";
import { l } from '../../routes/i18n';

let isDrawerOpen = false; // 다국어 선택 드롭박스 - 기본 close
let onLanguage = false; // 디테일 open = false

let onMenu = (path) => {
    if (path === '/guide') {
        goto(`/guide/${$platformName.toLowerCase()}`);
    } else {
        goto(path);
    }
    isDrawerOpen = false;
};

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

let currentLanguage = 'ENG'; // 기본 값
let cateKeys = Object.keys(dictionary[currentLanguage].category);
let menuKeys = Object.keys(dictionary[currentLanguage].category.menu);
let lanKeys = Object.keys(dictionary[currentLanguage].category.language.lan);
</script>

<header class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" bind:checked={isDrawerOpen} /> 

    <div class="drawer-content flex flex-col relative">
        
        <div class={` w-full navbar min-h-fit shadow-xl ${$darkmode ? "bg-base-300" : "bg-my-500 text-my-100"} `}>

            <div class="flex-none lg:hidden">
                <label for="my-drawer-3" aria-label="open sidebar" class:swap-active={isDrawerOpen} class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <!-- 햄버거 메뉴 -->
            
            <div class="flex-1 px-2 mx-2">
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={() => goto('/')} class="p-1 rounded-md hidden lg:block cursor-pointer">
                    <img src={Logo} alt="Logo">
                </div>
                <!-- Duruan Logo -->

                <h1 class="text-center absolute left-1/2 -translate-x-1/2 hidden lg:block">
                    {$l(`pageTitle`)}
                </h1>
                <!-- 웹 Title -->

                <h1 class="text-center absolute left-1/2 -translate-x-1/2 lg:hidden">
                    {#if $currentPath === "/"}
                        {$l(`pageTitle`)}
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
        <ul class="menu p-4 w-5/6 min-h-full bg-base-200">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            {#each menuKeys as sectionKey}
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <li on:click={() => onMenu($l(`category.menu.${sectionKey}.path`))} class={`m-1 ${sectionKey === 'home' ? "border-y-2 py-2" : ""}`}>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a>{$l(`category.menu.${sectionKey}.title`)}</a>
                </li>
            {/each}

            {#each cateKeys as sectionKey}
            <!-- svelte-ignore a11y-missing-attribute -->
            {#if sectionKey === 'mypage'}
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <li class="m-1" on:click={() => { goto('/mypage'); isDrawerOpen = false; } }><a>{$l(`category.${sectionKey}.title`)}</a></li>
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            {:else if sectionKey === 'logout' && $isLogin}
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <li class="m-1 border-t-2 pt-2" on:click={logout}><a>{$l(`category.${sectionKey}.title`)}</a></li>
            {/if}
            {/each}

            <li class="border-y-2 py-2 m-1">
                <details class="dropdown" bind:open={onLanguage}>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <summary><a>{$l(`category.language.title`)}</a></summary>
                    <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        {#each lanKeys as sectionKey}
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <li on:click={() => changeLanguage(sectionKey.toUpperCase())}><a>{$l(`category.language.lan.${sectionKey}`)}</a></li>    
                        {/each}
                    </ul>
                </details>
            </li>
        </ul>
        <!-- 모바일 카테고리 -->
    </div>
</header>