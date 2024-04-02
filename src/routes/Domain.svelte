<script lang="ts">
    import { page } from "$app/stores"
    import { palettes } from "./palettes/store"
    import Logo from "./Logo.svelte"
</script>

<a class="flex h-fit w-fit content-center items-baseline gap-4" href="/">
    <Logo
        colors={[
            $page.url.pathname === "/palettes" ? $palettes[$page.data.focusedPalette][1] : "6F0021",
            $page.url.pathname === "/palettes" ? $palettes[$page.data.focusedPalette][4] : "EF347C",
            $page.url.pathname === "/palettes" ? $palettes[$page.data.focusedPalette][7] : "FFB9CE",
        ]}
    />
    <p class="comfortaa none text-3xl font-bold">paletti</p>
</a>

<style>
    .comfortaa {
        font-family: "Comfortaa", sans-serif;
    }
</style>
