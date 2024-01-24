<script>
    // @ts-nocheck
    import { goto } from "$app/navigation";
    import {darkmode, platform, platformName} from '$lib/stores/layoutStore';
    import {onMount} from 'svelte';

    export let type = '', key = '';

    onMount(() => {
        platform.getPlatform();
        // 현재 플랫폼 감지
        $platformName = $platform.split('/')[0];
        // 현재 플랫폼명 = Windows, iOS..
    });

    $: darkStyle = $darkmode ? "text-my-lorg hover:text-my-org" : "text-my-org hover:text-my-lorg";
    $: darkStyleGuide = $darkmode ? "text-my-lorg hover:text-my-org" : "text-my-org hover:text-my-lorg";
    $: darkStylePage = $darkmode ? "text-my-lorg hover:text-my-org" : "text-my-org hover:text-my-lorg";

    let goPage = () => {
        if (type === "guide") {
            if (key === $platformName.toLowerCase()) {
                goto(`/guide/${$platformName.toLowerCase()}`);
            } else {
                goto(`/guide/${key}`);
            }
        }
    };

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
                appId = "net.openvpn.openvpn";
                downloadUrl = `https://play.google.com/store/apps/details?id=${appId}`;
                window.open(downloadUrl, "_blank");
                break;

            case "iOS":
                appId = "590379981";
                downloadUrl = `https://apps.apple.com/us/app/${appId}`;
                window.open(downloadUrl, "_blank");
                break;
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if type === "guide"}
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <p on:click={goPage}
    class={`w-fit font-bold cursor-pointer my-5 ${darkStyleGuide}`}>
    <slot></slot>
    </p>
{:else if type === "page"}
    <p class={`w-fit font-bold cursor-pointer ${darkStylePage}`}>
    <slot></slot>
    </p>
{:else}
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <p on:click={ e => onLink(e)}
    class={`w-fit font-bold cursor-pointer ${darkStyle}`}>
    <slot></slot>
    </p>
{/if}