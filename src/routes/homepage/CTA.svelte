<script lang="ts">
    import { scale } from "svelte/transition"
    import OnLoadTransition from "$lib/OnLoadTransition.svelte"
    import { Sparkles } from "lucide-svelte"
</script>

<OnLoadTransition>
    <a
        in:scale={{ delay: 1100 }}
        class="btn btn-primary no-animation relative z-20 md:btn-lg active:!scale-95 md:-mt-4 md:hover:scale-125"
        href="/palettes"
    >
        <div class="absolute left-0 top-0 h-full w-full">
            <span class="fader absolute left-0 h-full w-full rounded-lg bg-primary-500" />
            <span class="fader absolute left-0 h-full w-full rounded-lg bg-primary-500" />
            <span class="fader absolute left-0 h-full w-full rounded-lg bg-primary-500" />
            <span class="fader absolute left-0 h-full w-full rounded-lg bg-primary-500" />
        </div>
        <span class="z-20">Try it out</span>
        <span class="z-20 rotate-90"><Sparkles size={20} /></span>
    </a>
</OnLoadTransition>

<style>
    .fader {
        animation: fade-out 4s linear infinite;
    }

    .fader:is(:nth-child(2)) {
        animation-delay: 1000ms;
    }

    .fader:is(:nth-child(3)) {
        animation-delay: 2000ms;
    }

    .fader:is(:nth-child(4)) {
        animation-delay: 3000ms;
    }

    @keyframes fade-out {
        from {
            scale: 1;
            opacity: 1;
        }

        to {
            scale: 1.3;
            opacity: 0;
        }
    }
</style>
