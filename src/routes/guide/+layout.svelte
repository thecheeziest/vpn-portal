<script>
    import { onMount } from "svelte";
    import { currentPath, platform, platformName, windowWidth } from '$lib/stores/layoutStore';
    import { page } from "$app/stores";

    onMount(() => {
        $currentPath = $page.url.pathname;
        // 현재 패스 값 = nav 메뉴 on
        
        platform.getPlatform();
        // 플랫폼 감지

        $platformName = $platform.split('/')[0];
        // 현재 플랫폼명 = Windows, iOS..

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
    <slot></slot>
</section>