<script lang="ts">
    import { page } from "$app/stores"
    import { palettes } from "./store"
</script>

<svelte:head>
    <title>Paletti</title>
</svelte:head>

<div class="flex w-fit content-center items-baseline gap-4 px-7 pt-3 pb-9">
    <div class="flex">
        <div
            class="museomoderno -mr-8 text-6xl font-black"
            style="color: #{$palettes[$page.data.focusedPalette][1]}"
        >
            p
        </div>
        <div
            class="museomoderno text-6xl font-black"
            style="color: #{$palettes[$page.data.focusedPalette][4]}"
        >
            p
        </div>
        <div
            class="museomoderno -ml-8 text-6xl font-black"
            style="color: #{$palettes[$page.data.focusedPalette][7]}"
        >
            p
        </div>
    </div>
    <p class="comfortaa none text-3xl font-bold">paletti</p>
</div>

<style>
    .comfortaa {
        font-family: "Comfortaa", sans-serif;
    }

    .museomoderno {
        font-family: "MuseoModerno", sans-serif;
    }
</style>
