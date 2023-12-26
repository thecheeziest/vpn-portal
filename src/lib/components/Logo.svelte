<script>
    import { goto } from "$app/navigation";
    import Logo from "$lib/images/Logo.png";
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => goto('/')} class="p-1 rounded-md hidden lg:block cursor-pointer">
    <img src={Logo} alt="Logo">
</div>