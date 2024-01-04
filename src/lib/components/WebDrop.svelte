<script>
    import { goto } from "$app/navigation";
    import { l } from "../../routes/i18n";
    import { isLogin } from "$lib/stores/authStore";

    export let sectionKey = '';
    
    let logout = () => { // 로그아웃
        alert("로그아웃되었습니다.");
        goto('/');
        $isLogin = false;
    }
</script>

{#if sectionKey === 'mypage'}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
    <li class="text-base" on:click={() => goto($l(`category.${sectionKey}.path`))}><a>{$l(`category.${sectionKey}.title`)}</a></li>
<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-missing-attribute -->
{:else if sectionKey === 'logout' && $isLogin}
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-missing-attribute -->
    <li class="text-base" on:click={logout}><a>{$l(`category.${sectionKey}.title`)}</a></li>
{/if}