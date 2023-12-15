<script>
// @ts-nocheck

    import { goto } from "$app/navigation";
    import { platform, platformName } from "$lib/stores/layoutStore";
    import { onMount } from "svelte";
    import { l } from '../../routes/i18n';

    export let sectionKey = '';

    onMount(() => {
        platform.getPlatform();
        // 현재 플랫폼 감지
    });

    let goGuide = () => {
        if (sectionKey === 'welcome') {
            return goto(`/guide/${$platformName.toLowerCase()}`);
            // 가이드 클릭 시 현재 운영 체제에 맞는 페이지로
        } else {
            return goto($l(`home.${sectionKey}.gotoPath`));
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="grid flex-grow card bg-base-300 rounded-box p-5 m-2 max-w-sm items-center h-56 min-h-full ">
    <h2 class="text-xl font-bold">
        {$l(`home.${sectionKey}.title`)}
    </h2>
    <p class="my-3">
        {@html $l(`home.${sectionKey}.desc`)}
        {#if sectionKey === 'welcome'}
            {$platform.split('/')[1]} on {$platformName} 
            <!-- Safari on iOS -->
        {/if}
    </p>
    <div class="flex flex-wrap text-blue-500">
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <p class="w-fit cursor-pointer mr-10" on:click={goGuide}>
            {$l(`home.${sectionKey}.goto`)}
        </p>
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        {#if sectionKey === 'welcome'}
            <p class="w-fit cursor-pointer" on:click={() => goto( $l(`home.${sectionKey}.ovpnPath`) )}>
                {$l(`home.${sectionKey}.ovpn`)}
            </p>
        {:else if sectionKey === 'download' && $platformName === 'iOS'}
            <p class="w-fit cursor-pointer" on:click={() => goto( $l(`home.${sectionKey}.${$platformName.toLowerCase()}Link`) )}>
                {$l(`home.${sectionKey}.${$platformName.toLowerCase()}`)}
            </p>
        {/if}
    </div>
</div>