<script lang="ts">
    import { getContext } from "svelte"
    import { fly } from "svelte/transition"
    import { page } from "$app/stores"
    import { colorSettings } from "./store"
    import Color from "./Color.svelte"
    import { Trash } from "lucide-svelte"
    import type { IPalette } from "$lib/interfaces"

    const focusPalette: (index: number) => void = getContext("focusPalette")
    const deletePalette: (index: number) => void = getContext("deletePalette")
    const updateName: (index: number, name: string) => void = getContext("updateName")

    export let palette: IPalette
    export let index: number

    let colors: string[]
    $: colors = palette.colors

    $: isFocused = index === $page.data.focusedPalette

    const nameLimit: number = 20

    /** Updates name of palette */
    function setNewName(e: Event) {
        const inputElement = e.target as HTMLInputElement
        if (inputElement === null) return
        if (inputElement.value.length > nameLimit) return

        const name: string = inputElement.value

        updateName(index, name)
    }
</script>

<div
    in:fly={{ x: -250 }}
    out:fly={{ x: 250 }}
    class="flex w-full flex-col items-start gap-4 md:mb-6"
>
    <div class="flex w-full items-baseline justify-between">
        <div class="relative flex gap-2 pl-1.5">
            {#if $page.data.names !== undefined}
                <input
                    id={`${index}-palette-name`}
                    type="text"
                    placeholder="Enter a name"
                    class="peer input input-sm max-w-[175px] text-xl font-bold focus:border-none focus:pl-[12.8px] focus:outline-0"
                    maxlength={nameLimit}
                    value={$page.data.names[index] || " "}
                    on:change={setNewName}
                />
                <div
                    class="absolute bottom-[-0.5px] ml-2.5 h-[3px] w-[85%] rounded-xl bg-base-200 transition-colors peer-focus:bg-base-300 dark:bg-base-300 dark:peer-focus:bg-neutral"
                />
            {/if}
        </div>

        <div>
            {#if $page.data.mainColors?.length >= 2}
                <div class="inline sm:tooltip sm:tooltip-left" data-tip="Delete palette [d]">
                    <button
                        disabled={$page.data.mainColors.length <= 1}
                        class="btn btn-circle btn-sm"
                        on:click={() => {
                            deletePalette(index)
                        }}
                    >
                        <Trash size={14} />
                    </button>
                </div>
            {/if}
        </div>
    </div>
    <div
        on:click={() => {
            focusPalette(index)
        }}
        on:keydown={() => {
            focusPalette(index)
        }}
        class={`flex w-full items-start gap-0 rounded-xl ring-gray-100 ring-offset-2 ring-offset-base-100 transition-all hover:cursor-pointer md:h-32 md:ring-offset-[3px] dark:ring-gray-700 ${
            isFocused && " ring-[3px]"
        } ${$colorSettings.showGap && "!gap-1.5"}`}
    >
        {#if colors.length === 0}
            <p>Loading</p>
        {/if}

        {#each colors as color, colorIndex}
            <Color
                {isFocused}
                color={colorIndex === palette.mainColorIndex
                    ? $page.data.mainColors !== undefined && $page.data.mainColors[index]
                    : color}
                index={colorIndex}
                mainColorIndex={palette.mainColorIndex}
            />
        {/each}
    </div>
</div>

<!-- color={colorIndex === palette.mainColorIndex ? "FF0000" : color} -->
