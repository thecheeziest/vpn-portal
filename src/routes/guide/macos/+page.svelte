<script>
// @ts-nocheck
    import GuideItem from "$lib/components/GuideItem.svelte";
    import dictionary from "../../dictionary";
    import { l } from '../../i18n';

    let currentLanguage = 'ENG'; // 기본 값
    let homeKeys = Object.keys(dictionary[currentLanguage].guide.macos.contents);
    // homeKeys = dictionary.js의 [ENG 또는 KOR ...].반복할 데이터 경로
</script>

<h2 class="text-4xl font-semibold text-center my-7 text-base-content">
    {$l(`guide.macos.title`)}
</h2>

<div class={`flex w-full flex-wrap justify-center`}>
    {#each homeKeys as sectionKey}
        <GuideItem sectionKey={sectionKey}>
            <div slot="guide-title">{$l(`guide.macos.contents.${sectionKey}.title`)}</div>
            <div slot="guide-desc">{$l(`guide.macos.contents.${sectionKey}.desc`)}</div>
            <!-- 반복할 데이터 경로.${반복되는 데이터 속성}.속성 -->
        </GuideItem>
    {/each}
</div>