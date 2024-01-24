<script>
    import { goto } from "$app/navigation";
    import { l } from "../../routes/i18n";
    import {auth} from '$lib/stores/authStore.js';

    export let sectionKey = '';
    
    let logout = async () => { // 로그아웃
        try {
            await auth.logout();
        } catch (err) {
            console.log(err);
        }
    }
</script>

{#if sectionKey === 'mypage'}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
    <li class="text-base" on:click={() => goto($l(`category.${sectionKey}.path`))}><a>{$l(`category.${sectionKey}.title`)}</a></li>
<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-missing-attribute -->
{:else if sectionKey === 'logout' && $auth.isLogin}
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-missing-attribute -->
    <li class="text-base" on:click={logout}><a>{$l(`category.${sectionKey}.title`)}</a></li>
{/if}