<script lang="ts">
    import { fade } from "svelte/transition"
    import OnViewTransition from "$lib/OnViewTransition.svelte"
    import TopCurve from "./TopCurve.svelte"
    import BottomCurve from "./BottomCurve.svelte"

    interface Feature {
        title: string
        description: string
    }

    const features: Feature[] = [
        {
            title: "Effortless color palettes",
            description: "Create beautiful and matching color palettes in just a few seconds",
        },
        {
            title: "Easy sharing",
            description: "Simply share your creations by copying and sharing the web address",
        },
        {
            title: "Many export options",
            description:
                "Make practical use of your palettes by using one of the many export options",
        },
        {
            title: "Multiple palettes",
            description: "Create your own color theme by combining multiple color palettes",
        },
        {
            title: "History function",
            description: "Never loose your progress as you can always go back",
        },
        {
            title: "Unique colors",
            description: "Easily individualise your palettes by modifying only a handful of values",
        },
    ]
</script>

<TopCurve />
<div id="features" class="flex w-full justify-center bg-primary-500 py-16 md:py-36">
    <div class="grid grid-cols-1 gap-20 text-white md:grid-cols-2 xl:grid-cols-3">
        {#each features as feature}
            <OnViewTransition>
                <div
                    in:fade
                    class="flex max-w-72 flex-col items-center gap-4 text-center md:max-w-80"
                >
                    <h2 class="text-xl font-semibold md:text-2xl">{feature.title}</h2>
                    <div class="h-[3px] w-8 rounded-full bg-white" />
                    <p class="text-base md:text-lg">{feature.description}</p>
                </div>
            </OnViewTransition>
        {/each}
    </div>
</div>
<BottomCurve />
