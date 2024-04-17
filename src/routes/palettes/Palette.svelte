<script lang="ts">
    import { getContext } from "svelte"
    import { slide, fade } from "svelte/transition"
    import { page } from "$app/stores"
    import { colorSettings } from "./store"
    import Color from "./Color.svelte"
    import { Maximize2, Pencil, Trash } from "lucide-svelte"

    const focusPalette: (index: number) => void = getContext("focusPalette")
    const deletePalette: (index: number) => void = getContext("deletePalette")
    const updateName: (index: number, name: string) => void = getContext("updateName")

    export let palette: string[]
    export let index: number

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

<div in:slide={{ delay: 550 }} out:fade class="flex w-full flex-col items-start gap-3 md:mb-6">
    <div class="flex w-full items-baseline justify-between">
        <div class="flex gap-2 pl-1.5">
            {#if $page.data.names !== undefined}
                <input
                    id={`${index}-palette-name`}
                    type="text"
                    placeholder="Enter a name"
                    class="input input-sm max-w-[200px] text-xl font-bold"
                    maxlength={nameLimit}
                    value={$page.data.names[index] || " "}
                    on:change={setNewName}
                />
            {/if}
        </div>

        <div>
            {#if $page.data.mainColors?.length >= 2}
                <div
                    class="inline sm:tooltip sm:tooltip-left"
                    data-tip="Edit palette [{index + 1}]"
                >
                    <button
                        class="btn btn-circle btn-sm"
                        on:click={() => {
                            focusPalette(index)
                        }}
                    >
                        <Pencil size={13} />
                    </button>
                </div>
            {/if}
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
        class={`flex w-full items-start gap-0 rounded-xl ring-gray-300 ring-offset-2 transition-all md:h-32 md:ring-offset-[3px] ${
            isFocused && " ring-[3px]"
        } ${$colorSettings.showGap && "!gap-1.5"}`}
    >
        {#if palette.length === 0}
            <p>Loading</p>
        {/if}

        {#each palette as color, colorIndex}
            <Color
                {isFocused}
                color={colorIndex === 4
                    ? $page.data.mainColors !== undefined && $page.data.mainColors[index]
                    : color}
                index={colorIndex}
            />
        {/each}
    </div>
</div>
