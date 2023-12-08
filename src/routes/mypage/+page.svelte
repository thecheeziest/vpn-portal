<script>
    import { onMount } from "svelte";
	import { page } from '$app/stores';
    import { currentPath } from '$lib/stores/layoutStore';

    onMount(() => {
        $currentPath = $page.url.pathname;
    });

    let isEdit = false;

</script>

<section>
    <h2 class="text-center text-4xl font-bold mt-7 mb-16">My Page</h2>

    <div class="flex flex-col gap-4 m-auto w-fit">
        <div class="flex gap-4 items-center justify-center">
            <div class="skeleton w-36 h-36 rounded-full shrink-0"></div>
            <div class="flex flex-col gap-4">
                <strong class="text-3xl font-semibold">Alice Liddell</strong>
                <b class="font-medium text-gray-400 -mt-4">alice</b>
                <p class="text-blue-500 cursor-pointer w-fit">Download OVPN</p>
            </div>
        </div>
        <div class="w-full m-auto">
            <div class="my-5 text-lg">
                <strong>Group</strong>
                <p class="m-3">Research & Develement Center</p>
            </div>
            <div class="my-5 text-lg">
                <div class="flex items-center justify-between">
                    <strong>Password</strong>
                    <div>
                        <button class="btn btn-outline btn-info min-h-fit h-7" on:click={() => isEdit = !isEdit}>{isEdit ? "Cancel" : "Change"}</button>
                        {#if isEdit}
                        <button class="btn btn-outline btn-info min-h-fit h-7">OK</button>
                        {/if}
                    </div>
                </div>
                <div class="flex flex-col">
                    <input class="w-full h-10 border rounded-md my-3" type="text" placeholder="Enter password">
                    {#if isEdit}
                    <input class="w-full h-10 border rounded-md" type="text" placeholder="Confirm new password">
                    {/if}
                </div>
            </div>
        </div>
    </div>
</section>