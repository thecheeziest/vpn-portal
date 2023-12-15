<script>
    import { platformName } from "$lib/stores/layoutStore";
</script>

<div class={`card bg-base-100 shadow-xl h-fit ${$platformName === 'iOS' || $platformName === 'Android' ? 'w-full m-5' : 'w-2/5 m-10'}`}>
    <figure><img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/social-networks.jpg?w=2210&quality=70" alt="OVPN File" /></figure>
    <div class="card-body">
        <strong class="card-title">
            <slot name="guide-title">step 1.</slot>
        </strong>
        <slot name="guide-desc">desc</slot>
    </div>
</div>