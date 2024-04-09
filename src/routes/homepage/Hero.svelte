<script lang="ts">
    import { fly, scale } from "svelte/transition"
    import { Sparkles } from "lucide-svelte"

    import Logo from "../Logo.svelte"
    import OnLoadTransition from "$lib/OnLoadTransition.svelte"
</script>

<div class="flex flex-col items-center gap-12 pb-12 pt-16 md:gap-20 md:pb-8 md:pt-20">
    <OnLoadTransition>
        <div in:fly={{ y: 200, duration: 700 }}>
            <Logo classOverride="scale-[1.5] md:scale-[1.9]" />
        </div>
    </OnLoadTransition>

    <OnLoadTransition>
        <div
            class="flex flex-col items-center gap-4 text-2xl font-medium tracking-wide text-gray-700 md:text-5xl md:tracking-wider"
        >
            <p in:fly={{ x: -250, delay: 400, duration: 900 }}>Your new favorite</p>
            <p in:fly={{ x: 250, delay: 550, duration: 900 }}>color palette generator</p>
        </div>
    </OnLoadTransition>

    <OnLoadTransition>
        <a
            in:scale={{ delay: 1100 }}
            class="btn btn-primary no-animation md:btn-lg active:!scale-95"
            href="/palettes">Try it out <span class="rotate-90"><Sparkles size={20} /></span></a
        >
    </OnLoadTransition>
</div>
