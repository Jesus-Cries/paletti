<script lang="ts">
    import { fade } from "svelte/transition"
    import Hero from "./homepage/Hero.svelte"
    import Features from "./homepage/Features.svelte"
</script>

<div transition:fade={{ duration: 100 }} class="absolute w-screen">
    <Hero />
    <Features />
</div>
