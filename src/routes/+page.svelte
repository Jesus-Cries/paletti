<script lang="ts">
    import { fade } from "svelte/transition"
    import Hero from "./homepage/Hero.svelte"
    import Features from "./homepage/Features.svelte"
    import Guide from "./homepage/Guide.svelte"

    // TODO: Make hero fancier (highlight some of the text)
    // TODO: Add github link
    // FIXME: There is no way to focus a palette in mobile view
    // TODO: Add SideControl to mobile view
    // FIXME: Deleting a palette shows "undefined" as name for a split second
</script>

<div transition:fade={{ duration: 100 }} class="absolute w-full overflow-x-hidden">
    <Hero />
    <Features />
    <Guide />
</div>
