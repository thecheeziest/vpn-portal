<script>
    // @ts-nocheck
    import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
    import MobileLanDrop from '$lib/components/MobileLanDrop.svelte';
    import MobileMenu from '$lib/components/MobileMenu.svelte';
    import MobileDrop from '$lib/components/MobileDrop.svelte';
    import dictionary from '../../routes/dictionary.js';

    export let onMenu = () => {};
    export let onMypage = () => {};
    export let logout = () => {};

    let currentLanguage = 'ENG'; // 기본 값
    let cateKeys = Object.keys(dictionary[currentLanguage].category);
    let menuKeys = Object.keys(dictionary[currentLanguage].category.menu);
    let lanKeys = Object.keys(dictionary[currentLanguage].category.language.lan);
</script>

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