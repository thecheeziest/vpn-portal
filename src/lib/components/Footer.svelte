<script>
    import { darkmode } from "$lib/stores/layoutStore";
</script>

<footer class={`footer footer-center p-4 absolute bottom-0 ${!$darkmode && "bg-my-100 text-my-300"} `}>
    <aside>
        <p>Copyright © 2023 duruan</p>
    </aside>
</footer>