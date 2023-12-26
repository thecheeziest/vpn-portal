<script>
// @ts-nocheck
    import { setLanguage } from "$lib/stores/layoutStore";
    import { l } from "../../routes/i18n";

    export let lanKeys = '';

    let onLanguage = false; // 다국어 선택 드롭박스 - 기본 close

    let changeLanguage = (language) => { // 다국어 선택
        $setLanguage = language;
        localStorage.setItem("language", language);
        onLanguage = false;
    }
</script>

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