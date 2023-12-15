<script>
    import { onMount } from "svelte";
	import { page } from '$app/stores';
    import { currentPath, platform, windowWidth } from '$lib/stores/layoutStore';

    onMount(() => {
        $currentPath = $page.url.pathname;
        // 현재 패스명

        $windowWidth = window.innerWidth;
        // 현재 창 크기

        const updateWindowSize = () => {
            $windowWidth = window.innerWidth;
        };

        window.addEventListener('resize', updateWindowSize);
        // 창 너비 변할 때 이벤트

        return () => {
            window.removeEventListener('resize', updateWindowSize);
            // 컴포넌트가 파괴될 때 이벤트 리스너 제거
        };
    });
</script>
<section>
    <h2 class="text-4xl font-semibold text-center my-7">
        How to connect VPN for {$platform.split('/')[0]}
    </h2>
    <div class={`flex w-full flex-wrap justify-center`}>
        <slot></slot>
    </div>
</section>