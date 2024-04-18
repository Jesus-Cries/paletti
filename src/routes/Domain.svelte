<script lang="ts">
    import { page } from "$app/stores"
    import { palettes } from "./palettes/store"
    import Logo from "./Logo.svelte"

    let colors: string[] = []

    $: if (
        ["/palettes", "/palettes/"].includes($page.url.pathname) &&
        $palettes[$page.data.focusedPalette]
    ) {
        colors = [
            $palettes[$page.data.focusedPalette].colors[1],
            $palettes[$page.data.focusedPalette].colors[4],
            $palettes[$page.data.focusedPalette].colors[7],
        ]
    } else {
        colors = ["6F0021", "EF347C", "FFB9CE"]
    }
</script>

<a
    class="flex h-fit w-fit -translate-y-1.5 content-center items-baseline gap-3 md:-translate-y-2 md:gap-4"
    href="/"
>
    <Logo {colors} classOverride="scale-[0.6] md:scale-75" />
    <p class="comfortaa none -translate-y-2 text-xl font-bold md:-translate-y-1.5 md:text-2xl">
        paletti
    </p>
</a>

<style>
    .comfortaa {
        font-family: "Comfortaa", sans-serif;
    }
</style>
