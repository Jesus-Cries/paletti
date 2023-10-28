<script lang="ts">
    import Palette from "./Palette.svelte"
    import { palettes } from "./store"
</script>

<div
    class="z-20 mb-3 flex flex-col items-start gap-10 overflow-y-auto overflow-x-hidden px-3 pb-40 pt-0.5 pr-4"
>
    {#each $palettes as palette, index}
        <Palette {palette} {index} />
    {/each}
</div>

<style>
    /* Width */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #c1c5cd;
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #90949e;
    }
</style>
