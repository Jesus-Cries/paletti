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
    <div class="relative mt-[62px] md:mt-[78px]">
        <slot />
    </div>
</div>
