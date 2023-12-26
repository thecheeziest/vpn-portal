<script>
    import { goto } from "$app/navigation";
    import { l } from "../../routes/i18n";
    import { currentPath, platformName } from "$lib/stores/layoutStore";

    export let sectionKey = '';
</script>

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