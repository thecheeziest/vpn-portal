<script>
    import { l } from '../../routes/i18n';
    import Button from './Button.svelte';
    import GotoLink from './GotoLink.svelte';

    export let sectionKey = '';
</script>

<div class="card-body p-5 border-t bg-base-200">
    <h3 class="card-title">{$l(`download.clients.${sectionKey}.os`)}</h3>
    <p>{$l(`download.clients.${sectionKey}.desc`)}</p>
    <div>
        <GotoLink type="guide" key={sectionKey}>{$l(`download.goto`)}</GotoLink>
        <Button type="download" key={sectionKey}>{$l(`download.download`)}</Button>
    </div>
</div>