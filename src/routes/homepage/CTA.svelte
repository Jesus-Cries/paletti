<script lang="ts">
    import { scale } from "svelte/transition"
    import OnLoadTransition from "$lib/OnLoadTransition.svelte"
    import { Sparkles } from "lucide-svelte"
    // in:scale={{ delay: 1100 }}
</script>

<OnLoadTransition>
    <a
        class="btn btn-primary no-animation relative z-20 md:btn-lg hover:scale-125 active:!scale-95 md:-mt-4"
        href="/palettes"
    >
        <div class="absolute left-0 top-0 h-full w-full">
            <span class="fader absolute left-0 h-full w-full rounded-lg bg-primary-500" />
            <span class="fader absolute left-0 h-full w-full rounded-lg bg-primary-500" />
            <span class="fader absolute left-0 h-full w-full rounded-lg bg-primary-500" />
            <span class="fader absolute left-0 h-full w-full rounded-lg bg-primary-500" />
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
    .fader:nth-child(odd) {
        animation: fade-left 6s linear infinite;
    }

    .fader:nth-child(even) {
        animation: fade-right 6s linear infinite;
    }

    .fader:is(:nth-child(3), :nth-child(4)) {
        animation-delay: 1500ms;
    }

    .fader:is(:nth-child(5), :nth-child(6)) {
        animation-delay: 3000ms;
    }

    .fader:is(:nth-child(7), :nth-child(8)) {
        animation-delay: 4500ms;
    }

    @keyframes fade-left {
        from {
            scale: 1;
            translate: 0%;
            opacity: 1;
        }

        to {
            scale: 0.8;
            translate: -30%;
            opacity: 0;
        }
    }

    @keyframes fade-right {
        from {
            scale: 1;
            translate: 0%;
            opacity: 1;
        }

        to {
            scale: 0.8;
            translate: 30%;
            opacity: 0;
        }
    }
</style>
