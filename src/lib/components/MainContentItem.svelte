<script>
// @ts-nocheck
    import { goto } from "$app/navigation";
    import { darkmode, platform, platformName } from "$lib/stores/layoutStore";
    import { onMount } from "svelte";
    import { l } from '../../routes/i18n';
    import GotoLink from "./GotoLink.svelte";

    export let sectionKey = '';

    onMount(() => {
        platform.getPlatform();
        // 현재 플랫폼 감지
    });

    let gotoPage = () => {
        if (sectionKey === 'welcome') {
            return goto(`/guide/${$platformName.toLowerCase()}`);
            // 가이드 클릭 시 현재 운영 체제에 맞는 페이지로
        } else {
            return goto($l(`home.${sectionKey}.gotoPath`));
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={gotoPage} class={` grid flex-grow card rounded-3xl p-5 m-5 max-w-sm cursor-pointer
${$darkmode ? "hover:bg-gray-900" : "bg-my-100 text-my-500 border-my-300 hover:bg-my-400 hover:text-my-100"} border-4 shadow-xl `}>
    <!-- 카드 클릭 시 가이드, 마이페이지, 다운로드 이동 -->
    <h2 class={` text-3xl text-center font-bold border-b-2 pb-4 ${!$darkmode && "border-my-300"} `}>
        {$l(`home.${sectionKey}.title`)}
    </h2>
    <p class="my-3">
        {@html $l(`home.${sectionKey}.desc`)}
        
        {#if sectionKey === 'welcome'}
            {$platform.split('/')[1]} on {$platformName} 
            <!-- Welcome 카드 부분 : 브라우저 on OS -->
        {/if}
    </p>

    <div class="flex flex-wrap">
        {#if sectionKey !== 'download'}
        <!-- Download 카드 아닐 때 -->
            <GotoLink type="page">{$l(`home.${sectionKey}.goto`)}</GotoLink>
            <!-- go to guide, go to my page -->

        {:else if sectionKey === 'download' && $platformName === 'Windows' || $platformName === 'MacOS'}
            <GotoLink>
                {$l(`home.${sectionKey}.pc`)}
            </GotoLink>
            <!-- 직접 다운로드 링크 -->

        {:else if sectionKey === 'download' && $platformName === 'iOS'}
            <GotoLink>
                {$l(`home.${sectionKey}.${$platformName.toLowerCase()}`)}
            </GotoLink>
            <!-- Download 카드일 경우 iOS일 때 Go to AppStore 표시 -->

        {:else if sectionKey === 'download' && $platformName === 'Android'}
            <GotoLink>
                {$l(`home.${sectionKey}.${$platformName.toLowerCase()}`)}
            </GotoLink>
            <!-- Download 카드일 경우 Android일 때 Go to PlayStore 표시 -->
        {/if}
        {#if sectionKey === 'welcome'}
            <GotoLink>
                {$l(`home.${sectionKey}.ovpn`)}
            </GotoLink>
            <!-- Welcome 카드일 경우 OVPN 표시 -->
        {/if}
    </div>
</div>