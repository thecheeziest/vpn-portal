<script>
    // @ts-nocheck
    import { l } from '../../routes/i18n';
    import {goto} from '$app/navigation';
    import { darkmode, platformName } from "$lib/stores/layoutStore";
    import Logo from "./Logo.svelte";
    import HamburgerMenu from "./HamburgerMenu.svelte";
    import Navbar from "./Navbar.svelte";
    import MobileTitle from '$lib/components/MobileTitle.svelte';
    import MobileNavbar from '$lib/components/MobileNavbar.svelte';
    import {auth} from '$lib/stores/authStore.js';

    let isDrawerOpen = false; // 다국어 선택 드롭박스 - 기본 close

    $: darkStyle = $darkmode ? "bg-base-300" : "bg-my-500 text-my-100"

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

    let logout = async () => { // 로그아웃
        isDrawerOpen = false;
        try {
            await auth.logout();
        } catch (err) {
            console.log(err);
        }
    }
</script>

<header class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" bind:checked={isDrawerOpen} /> 
    <div class="drawer-content flex flex-col relative">
        <div class={`w-full navbar min-h-fit shadow-xl ${darkStyle}`}>
            <HamburgerMenu isDrawerOpen={isDrawerOpen} />
            <!-- 햄버거 메뉴 -->
            <div class="flex-1 px-2 mx-2">
                <Logo />
                <!-- Duruan Logo -->
                <h1 class="text-center absolute left-1/2 -translate-x-1/2 hidden lg:block">
                    {$l(`pageTitle`)}
                </h1>
                <!-- 웹 Title -->
                <MobileTitle />
                <!-- 모바일 Title -->
            </div>
            <Navbar />
        </div>
        <slot></slot>
        <!-- 메인 콘텐츠 -->
    </div>

    <MobileNavbar onMenu={onMenu} onMypage={onMypage} logout={logout} />
    <!-- 모바일 카테고리 -->
</header>