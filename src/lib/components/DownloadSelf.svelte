<script>
    import { darkmode } from '$lib/stores/layoutStore';
    import { l } from '../../routes/i18n';
    import Button from './Button.svelte';
    import GotoLink from './GotoLink.svelte';

    export let sectionKey = '';
</script>

<div class="card w-96 h-fit shadow-xl m-3 mb-10">
    <div class={`card-body pt-4 pb-5 px-5 border rounded-t-xl ${!$darkmode && "bg-my-100"}`}>
        <strong>{$l(`download.group1`)}</strong>
    </div>
    <div class="card-body p-5 border-x border-b rounded-b-xl bg-base-200">
        <h3 class="card-title">{$l(`download.clients.${sectionKey}.os`)}</h3>
        <p>{$l(`download.clients.${sectionKey}.desc`)}</p>
        <div class="relative">
            <GotoLink type="guide" key={sectionKey}>{$l(`download.goto`)}</GotoLink>
            <Button type="download" key={sectionKey}>{$l(`download.download`)}</Button>
        </div>
    </div>
</div>