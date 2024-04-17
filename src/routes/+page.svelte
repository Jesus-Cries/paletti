<script lang="ts">
    import { fade } from "svelte/transition"
    import Hero from "./homepage/Hero.svelte"
    import Features from "./homepage/Features.svelte"
    import Guide from "./homepage/Guide.svelte"

    // TODO: Make hero fancier (highlight some of the text)
    // TODO:? Add github link
    // FIXME: Navbar logo doesn't change color if reloading on homepage and navigating to palettes
</script>

<div transition:fade={{ duration: 100 }} class="absolute w-full overflow-x-hidden">
    <Hero />
    <Features />
    <Guide />
</div>
