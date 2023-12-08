<script>
    import { onMount } from "svelte";
	import { page } from '$app/stores';
    import { currentPath } from '$lib/stores/layoutStore';
    import { goto } from "$app/navigation";

    onMount(() => {
        $currentPath = $page.url.pathname;
    });

    let checked = true;

    let gotoGuide = () => {
        goto('/guide');
    }

</script>

<section>
    <h2 class="text-center text-4xl font-bold my-7">Download Client</h2>
    <div class="flex w-full justify-center flex-wrap">

        <div class="card w-96 h-fit bg-base-100 shadow-xl m-3">
            <div class="card-body pt-4 pb-5 px-5 bg-base-200 border rounded-t-xl">
                <strong>For your device</strong>
            </div>
            <div class="card-body p-5 border-x border-b rounded-b-xl">
                <h3 class="card-title">
                    MacOS
                </h3>
                <p>
                    You can download OpenVPN Connet client for MacOS
                </p>
                <div>
                    <button class="btn bg-blue-500 text-white my-3">Download</button>
                    <p class="text-blue-500 cursor-pointer w-fit" on:click={gotoGuide}>Go to guide</p>
                </div>
            </div>
        </div>

        <div class="w-96 m-3">
            <div class="collapse collapse-arrow bg-base-200 border shadow-xl">
                <input class="border min-h-0 rounded-xl" type="checkbox" name="my-accordion-2" bind:checked={checked} /> 
                <div class="collapse-title font-bold">
                    Others
                </div>
                <div class="collapse-content bg-white p-0"> 
                    <div class="card-body p-5 border-y bg-white">
                        <h3 class="card-title">Windows</h3>
                        <p>You can download OpenVPN Connet client for Windows</p>
                        <div>
                            <button class="btn bg-blue-500 text-white my-3">Download</button>
                            <p class="text-blue-500 cursor-pointer w-fit" on:click={gotoGuide}>Go to guide</p>
                        </div>
                    </div>
                    <div class="card-body p-5 bg-white">
                        <h3 class="card-title">Ubuntu</h3>
                        <p>You can download OpenVPN Connet client for Ubuntu</p>
                        <div>
                            <button class="btn bg-blue-500 text-white my-3">Download</button>
                            <p class="text-blue-500 cursor-pointer w-fit" on:click={gotoGuide}>Go to guide</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>