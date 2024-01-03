<script>
    // @ts-nocheck
    import Profile from "$lib/images/Profile.png";
    import { l } from '../../routes/i18n';
    import { darkmode } from "$lib/stores/layoutStore";
    import Button from "./Button.svelte";
    import { pwEdit } from "$lib/stores/mypageStore";
    import GotoLink from "./GotoLink.svelte";

    $: darkStyle = !$darkmode && "text-my-500";
</script>

<h2 class={`text-center text-4xl font-bold mt-7 mb-16 ${darkStyle}`}>{$l(`mypage.title`)}</h2>

<div class="flex flex-col gap-4 m-auto w-fit ">
    <div class="flex gap-4 items-center justify-center">
        <img src={Profile} alt="profile" class="w-32">
        
        <div class="flex flex-col gap-4">
            <strong class="text-3xl font-semibold">Alice Liddell</strong>
            <b class="font-medium text-gray-400 -mt-4">alice</b>
            <GotoLink>{$l(`mypage.download`)}</GotoLink>
        </div>
    </div>
    <div class="w-full m-auto">
        <div class="my-5 text-lg">
                <strong>{$l(`mypage.group.title`)}</strong>
                <p class="m-3">{$l(`mypage.group.rnd`)}</p>
        </div>
        <div class="my-5 text-lg">
            <div class="flex items-center justify-between">
                <strong>{$l(`mypage.password`)}</strong>
                <div>
                    <Button type="change">{$pwEdit ? $l(`mypage.button.cancel`) : $l(`mypage.button.change`)}</Button>
                    {#if $pwEdit}
                    <Button type="ok">{$l(`mypage.button.ok`)}</Button>
                    {/if}
                </div>
            </div>
            <div class="flex flex-col">
                    <input class="w-full h-10 border rounded-md my-3" type="text" placeholder={$l(`mypage.passwordPl`)}>
                {#if $pwEdit}
                    <input class="w-full h-10 border rounded-md my-3" type="text" placeholder={$l(`mypage.passwordPlNew`)}>
                    <input class="w-full h-10 border rounded-md" type="text" placeholder={$l(`mypage.passwordPlConfirm`)}>
                {/if}
            </div>
        </div>
    </div>
</div>