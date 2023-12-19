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

    let gotoPage = () => {
        if (sectionKey === 'welcome') {
            return goto(`/guide/${$platformName.toLowerCase()}`);
            // 가이드 클릭 시 현재 운영 체제에 맞는 페이지로
        } else {
            return goto($l(`home.${sectionKey}.gotoPath`));
        }
    }

    let onLink = (e, link) => {
        e.stopPropagation();
        alert(`direct ${link} Link`)
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={gotoPage} class="grid flex-grow card bg-base-300 rounded-box p-5 m-5 max-w-sm items-center h-56 min-h-full cursor-pointer hover:bg-base-200 shadow-xl border border-gray-200">
    <!-- 카드 클릭 시 가이드, 마이페이지, 다운로드 이동 -->
    <h2 class="text-xl font-bold">
        {$l(`home.${sectionKey}.title`)}
    </h2>
    <p class="my-3">
        {@html $l(`home.${sectionKey}.desc`)}
        {#if sectionKey === 'welcome'}
            {$platform.split('/')[1]} on {$platformName} 
            <!-- Welcome 카드 부분 : 브라우저 on OS -->
        {/if}
    </p>

    <div class="flex flex-wrap text-blue-500">
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        {#if sectionKey !== 'download'}
        <!-- Download 카드 아닐 때 -->
            <p class="w-fit cursor-pointer hover:text-blue-300 mr-10" on:click={gotoPage}>
                {$l(`home.${sectionKey}.goto`)}
                <!-- go to guide, go to my page -->
            </p>
        {:else if sectionKey === 'download' && $platformName === 'Windows' || $platformName === 'MacOS'}
        <!-- Download 카드일 경우 os가 windows, mac일 때 -->
            <p class="w-fit cursor-pointer hover:text-blue-300" on:click={ e => onLink(e, 'download') }>
                {$l(`home.${sectionKey}.pc`)}
                <!-- 직접 다운로드 링크 -->
            </p>
        {:else if sectionKey === 'download' && $platformName === 'iOS'}
            <p class="w-fit cursor-pointer hover:text-blue-300" on:click={ e => onLink(e, 'AppStore') }>
                {$l(`home.${sectionKey}.${$platformName.toLowerCase()}`)}
                <!-- Download 카드일 경우 iOS일 때 Go to AppStore 표시 -->
            </p>
        {:else if sectionKey === 'download' && $platformName === 'Android'}
            <p class="w-fit cursor-pointer hover:text-blue-300" on:click={ e => onLink(e, 'PlayStore') }>
                {$l(`home.${sectionKey}.${$platformName.toLowerCase()}`)}
                <!-- Download 카드일 경우 Android일 때 Go to PlayStore 표시 -->
            </p>
        {/if}
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        {#if sectionKey === 'welcome'}
            <p class="w-fit cursor-pointer hover:text-blue-300" on:click={ e => onLink(e, 'OVPN') }>
                {$l(`home.${sectionKey}.ovpn`)}
                <!-- Welcome 카드일 경우 OVPN 표시 -->
            </p>
        {/if}
    </div>
</div>