<script lang="ts">
    import "../app.css"
    import Navbar from "./Navbar.svelte"
</script>

<svelte:head>
    <title>Paletti</title>
</svelte:head>

<div data-theme="paletti">
    <Navbar />
    <slot />
</div>
