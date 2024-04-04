<script lang="ts">
    import "../app.css"
    import Navbar from "./Navbar.svelte"
</script>

<svelte:head>
    <title>Paletti</title>
</svelte:head>

<div class="flex flex-col" data-theme="paletti">
    <Navbar />
    <div class="relative mt-[68px] md:mt-[84px]">
        <slot />
    </div>
</div>
