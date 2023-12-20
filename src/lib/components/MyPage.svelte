<script>
// @ts-nocheck

    import Profile from "$lib/images/Profile.png";
    import { l } from '../../routes/i18n';
    import dictionary from '../../routes/dictionary.js';

    let isEdit = false;

    let currentLanguage = 'ENG'; // 기본 값
    let homeKeys = Object.keys(dictionary[currentLanguage].guide.windows.contents);
</script>

<h2 class="text-center text-4xl font-bold mt-7 mb-16 text-my-500">{$l(`mypage.title`)}</h2>

<div class="flex flex-col gap-4 m-auto w-fit ">
    <div class="flex gap-4 items-center justify-center">
        <img src={Profile} alt="profile" class="w-32">
        
        <div class="flex flex-col gap-4">
            <strong class="text-3xl font-semibold">Alice Liddell</strong>
            <b class="font-medium text-gray-400 -mt-4">alice</b>
            <p class="text-blue-500 cursor-pointer w-fit">{$l(`mypage.download`)}</p>
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
                    <button class="btn btn-outline btn-info min-h-fit h-7" on:click={() => isEdit = !isEdit}>{isEdit ? $l(`mypage.button.cancel`) : $l(`mypage.button.change`)}</button>
                    {#if isEdit}
                    <button class="btn btn-outline btn-info min-h-fit h-7">{$l(`mypage.button.ok`)}</button>
                    {/if}
                </div>
            </div>
            <div class="flex flex-col">
                {#if !isEdit}
                    <input class="w-full h-10 border rounded-md my-3" type="text" placeholder={$l(`mypage.passwordPl`)}>
                {:else}
                    <input class="w-full h-10 border rounded-md my-3" type="text" placeholder={$l(`mypage.passwordPlNew`)}>
                    <input class="w-full h-10 border rounded-md" type="text" placeholder={$l(`mypage.passwordPlConfirm`)}>
                {/if}
            </div>
        </div>
    </div>
</div>