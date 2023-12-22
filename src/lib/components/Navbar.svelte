<script>
    // @ts-nocheck
import ThemeSwitcher from './ThemeSwitcher.svelte';
import { currentPath, platformName, setLanguage } from "$lib/stores/layoutStore";
import { goto } from "$app/navigation";
import { isLogin } from "$lib/stores/authStore";
import { l } from '../../routes/i18n';
import Profile from "$lib/images/Profile.png";
import dictionary from '../../routes/dictionary';

    let onLanguage = false; // 다국어 선택 드롭박스 - 기본 close
    
    let logout = () => { // 로그아웃
        goto('/');
        $isLogin = false;
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

<div class="flex-none hidden lg:block">
    <ul class="menu menu-horizontal">

        {#each menuKeys as sectionKey}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            {#if sectionKey === 'guide'}
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <li class={`m-1 text-base ${$currentPath === `${$l(`category.menu.${sectionKey}.path`)}/${$platformName.toLowerCase()}` ? "font-bold" : ""}`}
            on:click={() => goto( `${$l(`category.menu.${sectionKey}.path`)}/${$platformName.toLowerCase()}` )}>
                                        <!-- 패스값 "/guide" + / + 현재 플랫폼 "windows" -->
                <a>{$l(`category.menu.${sectionKey}.title`)}</a>
            </li>
            
            {:else}

            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <li class={`m-1 text-base ${$currentPath === $l(`category.menu.${sectionKey}.path`) ? "font-bold" : ""}`}
            on:click={() => goto($l(`category.menu.${sectionKey}.path`))}>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a>{$l(`category.menu.${sectionKey}.title`)}</a>
            </li>

            {/if}
        {/each}
        <!-- 웹 카테고리 -->

        <div class="dropdown dropdown-end">
            <!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role --> 
            <li tabindex="0" role="button" class="m-1">
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="text-xl">
                    <img src={Profile} alt="profile" class="w-6">
                </a>
            </li>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52 text-base-content">
                {#each cateKeys as sectionKey}
                    {#if sectionKey === 'mypage'}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <li class="text-base" on:click={() => goto($l(`category.${sectionKey}.path`))}><a>{$l(`category.${sectionKey}.title`)}</a></li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <!-- svelte-ignore a11y-missing-attribute -->
                    {:else if sectionKey === 'logout' && $isLogin}
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <li class="text-base" on:click={logout}><a>{$l(`category.${sectionKey}.title`)}</a></li>
                    {/if}
                {/each}
                <li>
                    <details class="dropdown" bind:open={onLanguage}>
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <summary class="text-base"><a>{$l(`category.language.title`)}</a></summary>
                        <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52">
                            {#each lanKeys as sectionKey}
                            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <li on:click={() => changeLanguage(sectionKey.toUpperCase())}><a>{$l(`category.language.lan.${sectionKey}`)}</a></li>    
                            {/each}
                        </ul>
                    </details>
                </li>
                <li>
                    <ThemeSwitcher />
                </li>
            </ul>
        </div>
        <!-- 프로필 - My Page, Logout 영역 -->

    </ul>
</div>