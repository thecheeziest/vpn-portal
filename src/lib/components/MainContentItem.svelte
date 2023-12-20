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

let onLink = (e) => {
    e.stopPropagation();
    let appId = '';
    let downloadUrl = '';

    switch($platformName) {
        case "Windows":
            alert('windows 링크')
            break;
            
        case "MacOS":
            alert('macOs 링크')
            break;

        case "Android":
            appId = "com.android.app";
            downloadUrl = `https://play.google.com/store/apps/details?id=${appId}`;
            window.open(downloadUrl, "_blank");
            break;

        case "iOS":
            appId = "com.ios.app";
            downloadUrl = `https://apps.apple.com/us/app/${appId}`;
            window.open(downloadUrl, "_blank");
            break;
    }
}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={gotoPage} class="grid flex-grow card bg-my-400 rounded-3xl p-5 m-5 max-w-sm cursor-pointer
text-my-100 border-4 border-my-200 shadow-xl hover:bg-my-300">
    <!-- 카드 클릭 시 가이드, 마이페이지, 다운로드 이동 -->
    <h2 class="text-3xl text-center font-bold border-my-300 border-b-2 pb-4">
        {$l(`home.${sectionKey}.title`)}
    </h2>
    <p class="my-3">
        {@html $l(`home.${sectionKey}.desc`)}
        {#if sectionKey === 'welcome'}
            {$platform.split('/')[1]} on {$platformName} 
            <!-- Welcome 카드 부분 : 브라우저 on OS -->
        {/if}
    </p>

    <div class="flex flex-wrap text-my-org">
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        {#if sectionKey !== 'download'}
        <!-- Download 카드 아닐 때 -->
            <p class="w-fit cursor-pointer hover:text-my-lorg mr-10" on:click={gotoPage}>
                {$l(`home.${sectionKey}.goto`)}
                <!-- go to guide, go to my page -->
            </p>

        {:else if sectionKey === 'download' && $platformName === 'Windows' || $platformName === 'MacOS'}
        <!-- Download 카드일 경우 os가 windows, mac일 때 -->
            <p class="w-fit cursor-pointer hover:text-my-lorg" on:click={ e => onLink(e) }>
                {$l(`home.${sectionKey}.pc`)}
                <!-- 직접 다운로드 링크 -->
            </p>

        {:else if sectionKey === 'download' && $platformName === 'iOS'}
            <p class="w-fit cursor-pointer hover:text-my-lorg" on:click={ e => onLink(e) }>
                {$l(`home.${sectionKey}.${$platformName.toLowerCase()}`)}
                <!-- Download 카드일 경우 iOS일 때 Go to AppStore 표시 -->
            </p>

        {:else if sectionKey === 'download' && $platformName === 'Android'}
            <p class="w-fit cursor-pointer hover:text-my-lorg" on:click={ e => onLink(e) }>
                {$l(`home.${sectionKey}.${$platformName.toLowerCase()}`)}
                <!-- Download 카드일 경우 Android일 때 Go to PlayStore 표시 -->
            </p>
        {/if}
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        {#if sectionKey === 'welcome'}
            <p class="w-fit cursor-pointer hover:text-my-lorg" on:click={ e => onLink(e) }>
                {$l(`home.${sectionKey}.ovpn`)}
                <!-- Welcome 카드일 경우 OVPN 표시 -->
            </p>
        {/if}
    </div>
</div>