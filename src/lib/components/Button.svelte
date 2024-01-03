<script>
    import { goto } from "$app/navigation";
    import { isLogin } from "$lib/stores/authStore";
    import { darkmode } from "$lib/stores/layoutStore";
    import { pwEdit } from "$lib/stores/mypageStore";

    export let key = '';
    export let type = '';
    export let login = () => {}

    $: darkStyle = $darkmode ? "border-my-300 bg-my-500 hover:border-my-300" : "bg-my-400 text-my-050 hover:bg-my-300";
    $: darkStylePw = $darkmode ? "border-my-300 bg-my-500 hover:border-my-300" : "border-my-400 text-my-400 hover:bg-my-400 hover:border-my-400";

    let download = () => {
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
                appId = "net.openvpn.openvpn";
                downloadUrl = `https://play.google.com/store/apps/details?id=${appId}`;
                window.open(downloadUrl, "_blank");
                break;

            case "ios":
                appId = "590379981";
                downloadUrl = `https://apps.apple.com/us/app/${appId}`;
                window.open(downloadUrl, "_blank");
                break;
        }
    }

    let onButton = () => {
        switch(type) {
            case "download":
                download();
                break;
            case "login":
                login();
                break;
            case "change":
                $pwEdit = !$pwEdit;
                break;
        }
    }
</script>

{#if type === "ok" || type === "change"}
    <button on:click={onButton}
    class={`btn btn-outline min-h-fit h-7 ${darkStylePw}`}>
        <slot></slot>
    </button>
{:else}
    <button on:click={onButton} class={` btn w-full ${darkStyle}`}>
        <slot></slot>
    </button>
{/if}