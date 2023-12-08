<script>
    import { goto } from "$app/navigation";
    import { categoryData } from "$lib/utils/data";
    import { currentPath } from "$lib/stores/layoutStore";

</script>
<div class="flex-none hidden lg:block">
    <ul class="menu menu-horizontal">
        {#each categoryData as {path, category}}
            {#if category === 'Home' || category === 'Guide' || category === 'Download'}
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <li class={`m-1 ${$currentPath === path ? "font-bold" : ""}`} on:click={() => goto(path)}><a>{category}</a></li>
            {/if}
        {/each}
        <!-- 웹 카테고리 -->

        <div class="dropdown dropdown-end">
            <!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
            <li tabindex="0" role="button" class="m-1">
                <a class="text-xl text-4xl">
                    <i class="xi-profile"></i>
                </a>
            </li>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {#each categoryData as {path, category}}
                    {#if category === 'My Page' || category === 'Logout'}
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <li on:click={() => goto(path)}><a>{category}</a></li>
                    {/if}
                {/each}
            </ul>
        </div>
        <!-- 프로필 - My Page, Logout 영역 -->
    </ul>
</div>