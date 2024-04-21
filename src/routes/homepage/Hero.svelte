<script lang="ts">
    import { fly } from "svelte/transition"

    import Logo from "../Logo.svelte"
    import OnLoadTransition from "$lib/OnLoadTransition.svelte"
    import CTA from "./CTA.svelte"
</script>

<div class="flex flex-col items-center gap-12 pb-12 pt-16 md:gap-20 md:pb-0 md:pt-20">
    <OnLoadTransition>
        <div in:fly={{ y: 200, duration: 700 }}>
            <Logo useMouseAnimation classOverride="scale-[1.5] md:scale-[1.8]" />
        </div>
    </OnLoadTransition>

    <OnLoadTransition>
        <div
            class="flex flex-col items-center gap-4 text-2xl font-medium tracking-wide md:text-4xl md:tracking-wider"
        >
            <p in:fly={{ x: -250, delay: 400, duration: 900 }}>Your new favorite</p>
            <p in:fly={{ x: 250, delay: 550, duration: 900 }}>color palette generator</p>
        </div>
    </OnLoadTransition>

    <CTA />
</div>
