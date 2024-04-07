<script lang="ts">
    import { fade } from "svelte/transition"
    import Hero from "./homepage/Hero.svelte"
    import Features from "./homepage/Features.svelte"
    import Guide from "./homepage/Guide.svelte"

    // TODO: Make hero fancier (highlight some of the text)
    // TODO: Add tutorial to guide section
    // FIXME: Fix horizontal alignment of bottom control
    // FIXME: Fix overflow issues
</script>

<div transition:fade={{ duration: 100 }} class="absolute w-screen overflow-x-hidden">
    <Hero />
    <Features />
    <Guide />
</div>
