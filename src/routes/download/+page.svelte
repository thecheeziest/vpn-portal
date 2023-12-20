<script>
// @ts-nocheck
    import { onMount } from "svelte";
	import { page } from '$app/stores';
    import { currentPath, platform, platformName } from '$lib/stores/layoutStore';
    import { goto } from "$app/navigation";
    import { client } from "$lib/stores/downloadStore";
    import dictionary from "../dictionary";
    import { l } from '../i18n';

    onMount(() => {
        $currentPath = $page.url.pathname;
        platform.getPlatform();
        // 현재 플랫폼 감지
    });

    let checked = true; // others 토글
    let currentLanguage = 'ENG'; // 기본 값
    let homeKeys = Object.keys(dictionary[currentLanguage].download.clients);

    let gotoGuide = (key) => {
        if (key === $platformName.toLowerCase()) {
            goto(`/guide/${$platformName.toLowerCase()}`);
        } else {
            goto(`/guide/${key}`);
        }
    }

    let goDownload = (key) => {
        let appId = '';
        let downloadUrl = '';

        switch(key) {
            case "windows":
                alert('windows 링크')
                break;
                
            case "macos":
                alert('macOs 링크')
                break;

            case "android":
                appId = "com.android.app";
                downloadUrl = `https://play.google.com/store/apps/details?id=${appId}`;
                window.open(downloadUrl, "_blank");
                break;

            case "ios":
                appId = "com.ios.app";
                downloadUrl = `https://apps.apple.com/us/app/${appId}`;
                window.open(downloadUrl, "_blank");
                break;
        }
    }
</script>

<section>
    <h2 class="text-center text-4xl font-bold my-7 text-my-500">{$l(`download.title`)}</h2>
    <div class="flex w-full justify-center flex-wrap">

        {#each homeKeys as sectionKey}
        {#if $platformName.toLowerCase() === sectionKey}
            <div class="card w-96 h-fit shadow-xl m-3 mb-10">
                <div class="card-body pt-4 pb-5 px-5 bg-my-050 border rounded-t-xl">
                    <strong>{$l(`download.group1`)}</strong>
                </div>
                <div class="card-body p-5 border-x border-b rounded-b-xl">
                    <h3 class="card-title">{$l(`download.clients.${sectionKey}.os`)}</h3>
                    <p>{$l(`download.clients.${sectionKey}.desc`)}</p>
                    <div class="relative">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <p class="text-my-500 hover:text-my-org cursor-pointer w-fit absolute right-5" on:click={() => gotoGuide(sectionKey)}>{$l(`download.goto`)}</p>
                        <button on:click={() => goDownload(sectionKey)} class="btn w-full bg-my-400 text-white mt-8">{$l(`download.download`)}</button>
                    </div>
                </div>
            </div>
        {/if}
        {/each}

        <div class="w-96 m-3">
            <div class="collapse collapse-arrow bg-my-050 border shadow-xl">
                <input class="border min-h-0 rounded-xl" type="checkbox" name="my-accordion-2" bind:checked={checked} /> 
                <div class="collapse-title font-bold">
                    {$l(`download.group2`)}
                </div>
                <div class="collapse-content bg-white p-0">

                    {#each homeKeys as sectionKey}
                    {#if $platformName.toLowerCase() !== sectionKey}
                        <div class="card-body p-5 border-t bg-white">
                            <h3 class="card-title">{$l(`download.clients.${sectionKey}.os`)}</h3>
                            <p>{$l(`download.clients.${sectionKey}.desc`)}</p>
                            <div>
                                <!-- svelte-ignore a11y-click-events-have-key-events -->
                                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                                <p class="text-my-500 hover:text-my-org cursor-pointer w-fit absolute right-9" on:click={() => gotoGuide(sectionKey)}>{$l(`download.goto`)}</p>
                                <button on:click={() => goDownload(sectionKey)} class="btn w-full bg-my-400 text-white mt-8">{$l(`download.download`)}</button>
                            </div>
                        </div>                     
                    {/if}
                    {/each}

                </div>
            </div>
        </div>
    </div>
</section>