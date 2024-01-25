<script>
    import { darkmode } from "$lib/stores/layoutStore";

    $: darkStyle = $darkmode ? "bg-base-300 text-base-content" : "bg-my-100 text-my-300"
</script>

<footer class={`footer footer-center p-4 absolute bottom-0 ${darkStyle}`}>
    <aside>
        <p>Copyright © 2023 duruan</p>
    </aside>
</footer>