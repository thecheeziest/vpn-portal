<script>
    // @ts-nocheck
    import ThemeSwitcher from './ThemeSwitcher.svelte';
    import Profile from "$lib/images/Profile.png";
    import dictionary from '../../routes/dictionary';
    import WebMenu from './WebMenu.svelte';
    import WebDrop from './WebDrop.svelte';
    import WebLanDrop from './WebLanDrop.svelte';

    let currentLanguage = 'ENG'; // 기본 값
    let cateKeys = Object.keys(dictionary[currentLanguage].category);
    let menuKeys = Object.keys(dictionary[currentLanguage].category.menu);
    let lanKeys = Object.keys(dictionary[currentLanguage].category.language.lan);
</script>

<div class="flex-none hidden lg:block">
    <ul class="menu menu-horizontal">
        {#each menuKeys as sectionKey}
            <WebMenu sectionKey={sectionKey} />
            <!-- 홈 가이드 다운로드 -->
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
                    <WebDrop sectionKey={sectionKey} />
                    <!-- 드롭메뉴 마이페이지, 로그아웃 -->
                {/each}
                <WebLanDrop lanKeys={lanKeys} />
                <!-- 언어 -->
                <li>
                    <ThemeSwitcher />
                </li>
            </ul>
        </div>
        <!-- 프로필 - My Page, Logout 영역 -->
    </ul>
</div>