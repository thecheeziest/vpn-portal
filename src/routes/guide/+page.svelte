<script>
    import { onMount } from "svelte";
	import { page } from '$app/stores';
    import { currentPath, windowWidth } from '$lib/stores/layoutStore';

    
    onMount(() => {
        $currentPath = $page.url.pathname;
        // 현재 패스명
        
        $windowWidth = window.innerWidth;
        // $windowHeight = window.innerHeight;

        const updateWindowSize = () => {
            $windowWidth = window.innerWidth;
            // $windowHeight = window.innerHeight;
        };
        // 윈도우 창 크기 인식

        window.addEventListener('resize', updateWindowSize);

        // 컴포넌트가 파괴될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', updateWindowSize);
        };
    });
</script>

<section>
    <h2 class="text-4xl font-semibold pl-6">How to connect VPN for MacOS</h2>
    <div class={`flex w-full ${$windowWidth <= 820 && "flex-wrap"}`}>

        <div class="card bg-base-100 shadow-xl m-5 h-fit">
            <figure><img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/social-networks.jpg?w=2210&quality=70" alt="OVPN File" /></figure>
            <div class="card-body">
                <h3 class="card-title">1. Download OVPN File</h3>
                <!-- <p>text</p> -->
            </div>
        </div>

        <div class="card bg-base-100 shadow-xl m-5 h-fit">
            <figure><img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/social-networks.jpg?w=2210&quality=70" alt="OpenVPN Connect v3" /></figure>
            <div class="card-body">
                <h3 class="card-title">2. Download OpenVPN Connect v3</h3>
                <!-- <p>text</p> -->
            </div>
        </div>

    </div>
</section>