<script>
// @ts-nocheck
    import MainContentItem from "./MainContentItem.svelte";
    import dictionary from '../../routes/dictionary';

    let currentLanguage = 'ENG'; // 기본 값
    let homeKeys = Object.keys(dictionary[currentLanguage].home);
</script> 

<div class="flex flex-wrap justify-center items-start">
    {#each homeKeys as sectionKey}
        <MainContentItem sectionKey={sectionKey} />
    {/each}
</div>