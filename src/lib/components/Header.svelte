<script>
    // @ts-nocheck
    import { goto } from "$app/navigation";
    import { l } from '../../routes/i18n';
    import { currentPath, darkmode, platformName } from "$lib/stores/layoutStore";
    import { isLogin } from "$lib/stores/authStore";
    import dictionary from "../../routes/dictionary";
    import Logo from "./Logo.svelte";
    import HamburgerMenu from "./HamburgerMenu.svelte";
    import Navbar from "./Navbar.svelte";
    import MobileMenu from "./MobileMenu.svelte";
    import MobileDrop from "./MobileDrop.svelte";
    import MobileLanDrop from "./MobileLanDrop.svelte";
    import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';

    let isDrawerOpen = false; // 다국어 선택 드롭박스 - 기본 close

    let onMenu = (path) => {
        if (path === '/guide') {
            goto(`/guide/${$platformName.toLowerCase()}`);
        } else {
            goto(path);
        }
        isDrawerOpen = false;
    };

    let onMypage = () => {
        goto('/mypage');
        isDrawerOpen = false;
    }

    let logout = () => { // 로그아웃
        goto('/');
        isDrawerOpen = false;
        $isLogin = false;
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
            <HamburgerMenu isDrawerOpen={isDrawerOpen} />
            <!-- 햄버거 메뉴 -->
            <div class="flex-1 px-2 mx-2">
                <Logo />
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
            {#each menuKeys as sectionKey}
                <MobileMenu sectionKey={sectionKey} onMenu={onMenu} />
                <!-- 홈 가이드 다운로드 -->
            {/each}
            {#each cateKeys as sectionKey}
                <MobileDrop sectionKey={sectionKey} logout={logout} onMypage={onMypage} />
                <!-- 마이페이지 로그아웃 -->
            {/each}
            <MobileLanDrop lanKeys={lanKeys} />
            <!-- 언어 -->
            <ThemeSwitcher os="mobile" />
            <!-- 테마 설정 -->
        </ul>
        <!-- 모바일 카테고리 -->
    </div>
</header>