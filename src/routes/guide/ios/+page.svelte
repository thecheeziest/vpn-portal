<script>
// @ts-nocheck
    import GuideItem from "$lib/components/GuideItem.svelte";
    import dictionary from "../../dictionary";
    import { l } from '../../i18n';

    let currentLanguage = 'ENG'; // 기본 값
    let homeKeys = Object.keys(dictionary[currentLanguage].guide.ios.contents);
    // homeKeys = dictionary.js의 [ENG 또는 KOR ...].반복할 데이터 경로
</script>

<h2 class="text-4xl font-semibold text-center my-7 text-base-content">
    {$l(`guide.ios.title`)}
</h2>

<div class={`flex w-full flex-wrap justify-center`}>
    {#each homeKeys as sectionKey}
        <GuideItem img={$l(`guide.ios.contents.${sectionKey}.img`)}>
            <div slot="guide-title">{$l(`guide.ios.contents.${sectionKey}.title`)}</div>
            <div slot="guide-desc">{$l(`guide.ios.contents.${sectionKey}.desc`)}</div>
        </GuideItem>
    {/each}
</div>