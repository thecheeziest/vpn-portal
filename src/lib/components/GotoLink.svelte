<script>
    // @ts-nocheck
    import { goto } from "$app/navigation";
    import { darkmode, platformName } from "$lib/stores/layoutStore";

    export let type = '', key = '';

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
class={` w-fit cursor-pointer my-3
${$darkmode ? "text-my-lorg hover:text-my-org" : "text-my-org hover:text-my-lorg"} `}>
<slot></slot>
</p>

{:else if type === "page"}

<p class={` w-fit cursor-pointer mr-10
${$darkmode ? "text-my-lorg hover:text-my-org" : "text-my-org hover:text-my-lorg"} `}>
<slot></slot>
</p>

{:else}

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<p on:click={ e => onLink(e)}
class={` w-fit cursor-pointer
${$darkmode ? "text-my-lorg hover:text-my-org" : "text-my-org hover:text-my-lorg"} `}>
<slot></slot>
</p>

{/if}