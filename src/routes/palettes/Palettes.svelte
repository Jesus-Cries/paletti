<script lang="ts">
    import Palette from "./Palette.svelte"
    import AddButton from "./sidecontrol/AddButton.svelte"
    import { palettes } from "./store"
</script>

<div
    class="scrollbar z-20 mb-3 flex h-full flex-col items-start gap-6 overflow-y-auto overflow-x-hidden px-3 pb-8 pt-4 md:gap-12 md:pr-4"
>
    {#each $palettes as palette, index (palette.name)}
        <Palette {palette} {index} />
    {/each}
    <div class="mt-1 flex w-full justify-center pb-32 md:mt-0">
        <AddButton />
    </div>
</div>
