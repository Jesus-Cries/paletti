<script lang="ts">
    import { fade } from "svelte/transition"
    import Hero from "./homepage/Hero.svelte"
    import Features from "./homepage/Features.svelte"
    import Guide from "./homepage/Guide.svelte"

    // FIXME: Clicking on link to palettes while on palettes breaks history (and link too?)
    // TODO:? Add github link
</script>

<div transition:fade={{ duration: 100 }} class="absolute w-full overflow-x-hidden">
    <Hero />
    <Features />
    <Guide />
</div>
