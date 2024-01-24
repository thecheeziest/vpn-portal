<script>
    import {auth} from '$lib/stores/authStore';
    import { l } from '../../routes/i18n';
    export let sectionKey = '';
    export let logout = () => {};
    export let onMypage = () => {};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
{#if sectionKey === 'mypage'}
    <!-- svelte-ignore a11y-missing-attribute -->
    <li class="m-1" on:click={onMypage}><a>{$l(`category.${sectionKey}.title`)}</a></li>
{:else if sectionKey === 'logout' && $auth.isLogin}
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <li class="m-1 border-t-2 pt-2" on:click={logout}><a>{$l(`category.${sectionKey}.title`)}</a></li>
{/if}