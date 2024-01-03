<script>
    import {currentPath} from '$lib/stores/layoutStore.js';
    import {l} from '../../routes/i18n.js';
</script>

<h1 class="text-center absolute left-1/2 -translate-x-1/2 lg:hidden">
    {#if $currentPath === "/"}
        {$l(`pageTitle`)}
    {:else}
        {$currentPath.split('/').slice(1, 2)}
        <!-- 모바일 타이틀 패스명 (임시) -->
    {/if}
</h1>