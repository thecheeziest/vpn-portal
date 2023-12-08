<script>
    import { goto } from "$app/navigation";

    export let path = '', title = ''
</script>

<div class="grid flex-grow card bg-base-300 rounded-box p-5 m-2 min-h-max max-w-sm">
    <h2 class="text-xl font-bold">
        {title}
    </h2>
    <p class="my-3">
        {#if title === 'Welcome'}
            Server Host - vpn.shadowwall.co.kr<br>
            You are connected by Safari on MacOS
        {:else if title === 'My Page'}
            To change password, Use this page.
        {:else}
            To download client software, Use this page.
        {/if}
    </p>
    <div class="flex flex-wrap text-blue-500">
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p class="w-fit cursor-pointer mr-10" on:click={() => goto(path)}>
            {#if title === 'Download Client'}
                Direct download
            {:else if title === 'Welcome'}
                Go to guide
            {:else}
                Go to {title}
            {/if}
        </p>
        <p class="w-fit cursor-pointer">
            {#if title === 'Welcome'}
                Download OVPN
            {:else if title === 'Download Client'}
                Go to AppStore 
            {/if}
        </p>
    </div>
</div>