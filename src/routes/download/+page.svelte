<script>
// @ts-nocheck
    import { onMount } from "svelte";
	import { page } from '$app/stores';
    import { currentPath, darkmode, platform, platformName } from '$lib/stores/layoutStore';
    import { l } from '../i18n';
    import dictionary from "../dictionary";
    import DownloadSelf from "$lib/components/DownloadSelf.svelte";
    import DownloadOthers from "$lib/components/DownloadOthers.svelte";

    onMount(() => {
        $currentPath = $page.url.pathname;
        platform.getPlatform();
        // 현재 플랫폼 감지
    });

    let checked = true; // others 토글
    let currentLanguage = 'ENG'; // 기본 값
    let homeKeys = Object.keys(dictionary[currentLanguage].download.clients);
</script>

<section>
    <h2 class="text-center text-4xl font-bold my-7 text-base-content">{$l(`download.title`)}</h2>
    <div class="flex w-full justify-center flex-wrap">
        {#each homeKeys as sectionKey}
            {#if $platformName.toLowerCase() === sectionKey}
                <DownloadSelf sectionKey={sectionKey} />
            {/if}
        {/each}
        <div class="w-96 m-3">
            <div class={`collapse collapse-arrow border shadow-xl ${!$darkmode && "bg-my-100"}`}>
                <input class="border min-h-0 rounded-xl" type="checkbox" name="my-accordion-2" bind:checked={checked} /> 
                <div class="collapse-title font-bold">
                    {$l(`download.group2`)}
                </div>
                <div class="collapse-content p-0">
                    {#each homeKeys as sectionKey}
                        {#if $platformName.toLowerCase() !== sectionKey}
                            <DownloadOthers sectionKey={sectionKey} />
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>