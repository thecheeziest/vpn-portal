<script>
// @ts-nocheck
    import { setLanguage } from '$lib/stores/layoutStore';
    import { l } from '../../routes/i18n';
    
    export let lanKeys = '';

    let onLanguage = false; // 디테일 open = false

    let changeLanguage = (language) => { // 다국어 선택
        $setLanguage = language;
        localStorage.setItem("language", language);
        onLanguage = false;
    }
</script>

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