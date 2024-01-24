<script>
    import { platformName } from "$lib/stores/layoutStore";

    export let img = '';

    $: osStyle = $platformName === 'iOS' || $platformName === 'Android' ? 'w-full my-5' : 'w-2/5 mt-3 mx-5 mb-10'
</script>

<div class={`card border shadow-xl h-fit ${osStyle}`}>
        <figure>
            <img src={img} alt="OVPN File" class="h-96 w-full object-cover" />
        </figure>

    <div class="card-body">
        <strong class="card-title">
            <slot name="guide-title">step 1.</slot>
        </strong>
        <slot name="guide-desc">desc</slot>
    </div>
</div>