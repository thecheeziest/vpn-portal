<script>
// @ts-nocheck
    import { l } from '../../routes/i18n';

    export let sectionKey = '';
    export let onMenu = () => {};

    $: sectionStyle = sectionKey === 'home' ? "border-y-2 py-2" : "";
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<li on:click={() => onMenu($l(`category.menu.${sectionKey}.path`))} class={`m-1 ${sectionStyle}`}>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a>{$l(`category.menu.${sectionKey}.title`)}</a>
</li>