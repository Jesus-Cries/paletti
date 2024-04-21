<script lang="ts">
    import { fade } from "svelte/transition"
    import Hero from "./homepage/Hero.svelte"
    import Features from "./homepage/Features.svelte"
    import Guide from "./homepage/Guide.svelte"

    // FIXME: It is possible to manually name two palettes the same
</script>

<div transition:fade={{ duration: 100 }} class="absolute w-full overflow-x-hidden">
    <Hero />
    <Features />
    <Guide />
</div>
