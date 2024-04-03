<script lang="ts">
    import { fade } from "svelte/transition"
    import Hero from "./homepage/Hero.svelte"
</script>

<div transition:fade={{ duration: 100 }} class="absolute">
    <Hero />
</div>
