<script>
    import { infoData } from "$lib/utils/data";
    import MainContentItem from "./MainContentItem.svelte";
</script> 

<div class="flex flex-wrap justify-center">
    {#each infoData as {title, path}}
        <MainContentItem title={title} path={path} />
    {/each}
</div>