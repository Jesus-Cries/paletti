<script lang="ts">
    import { page } from "$app/stores"
    import { palettes } from "./palettes/store"
</script>

<a class="flex h-fit w-fit content-center items-baseline gap-4" href="/">
    <div class="flex">
        <div
            class="museomoderno -mr-8 text-6xl font-black"
            style="color: #{$page.url.pathname === '/palettes'
                ? $palettes[$page.data.focusedPalette][1]
                : '6F0021'}"
        >
            p
        </div>
        <div
            class="museomoderno text-6xl font-black"
            style="color: #{$page.url.pathname === '/palettes'
                ? $palettes[$page.data.focusedPalette][4]
                : 'EF347C'}"
        >
            p
        </div>
        <div
            class="museomoderno -ml-8 text-6xl font-black"
            style="color: #{$page.url.pathname === '/palettes'
                ? $palettes[$page.data.focusedPalette][7]
                : 'FFB9CE'}"
        >
            p
        </div>
    </div>
    <p class="comfortaa none text-3xl font-bold">paletti</p>
</a>

<style>
    .comfortaa {
        font-family: "Comfortaa", sans-serif;
    }

    .museomoderno {
        font-family: "MuseoModerno", sans-serif;
    }
</style>
