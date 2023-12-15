<script>
// @ts-nocheck

    import { goto } from "$app/navigation";
    import { categoryData } from "$lib/utils/data";
    import { currentPath, platformName, setLanguage } from "$lib/stores/layoutStore";
    import { isLogin } from "$lib/stores/authStore";
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
</script>

<div class="flex-none hidden lg:block">
    <ul class="menu menu-horizontal">
        {#each categoryData as {path, category}}
            {#if category === 'Home' || category === 'Download'}
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <li class={`m-1 ${$currentPath === path ? "font-bold" : ""}`} on:click={() => goto(path)}><a>{category}</a></li>
            {:else if category === 'Guide'}
            <li class={`m-1 ${$currentPath === `${path}/${$platformName.toLowerCase()}` ? "font-bold" : ""}`} on:click={() => goto(`${path}/${$platformName.toLowerCase()}`)}><a>{category}</a></li>
            {/if}
        {/each}
        <!-- 웹 카테고리 -->

        <div class="dropdown dropdown-end">
            <!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
            <li tabindex="0" role="button" class="m-1">
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="text-xl">
                    <i class="xi-profile"></i>
                </a>
            </li>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {#each categoryData as {path, category}}
                    {#if category === 'My Page'}
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <li on:click={() => goto(path)}><a>{category}</a></li>
                    {:else if category === 'Logout' && $isLogin}
                        <li on:click={logout}><a>{category}</a></li>
                    {/if}
                {/each}

                <li>
                    <details class="dropdown" bind:open={onLanguage}>
                        <summary><a>Language</a></summary>
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
        </div>
        <!-- 프로필 - My Page, Logout 영역 -->
    </ul>
</div>