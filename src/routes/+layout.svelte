<script lang="ts">
    import "../app.css"
    import Navbar from "./Navbar.svelte"
    import ScrollUpButton from "./ScrollUpButton.svelte"
</script>

<svelte:head>
    <title>Paletti</title>
</svelte:head>

<div class="relative flex flex-col" data-theme="paletti">
    <Navbar />
    <ScrollUpButton />
    <div class="relative mt-[56px] md:mt-[64px]">
        <slot />
    </div>
</div>
