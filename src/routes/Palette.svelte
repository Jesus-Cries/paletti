<script lang="ts">
    import { getContext } from "svelte"
    import { slide, fade } from "svelte/transition"
    import { page } from "$app/stores"
    import { colorSettings } from "./store"
    import Color from "./Color.svelte"
    import { Eye, Pencil, Trash } from "lucide-svelte"

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

<div
    in:slide={{ delay: 550 }}
    out:fade
    class={`flex w-full flex-col items-start gap-2 ${isFocused && "mb-6"}`}
>
    <div class="flex w-full items-baseline justify-between">
        <div class="flex">
            <input
                id={`${index}-palette-name`}
                type="text"
                placeholder="Enter a name"
                class="input-bordered input input-sm z-50 max-w-[200px] rounded-r-none border-2 border-r-0 border-gray-200 text-xl font-bold"
                maxlength={nameLimit}
                value={$page.data.names[index]}
                on:change={setNewName}
            />
            <label
                for={`${index}-palette-name`}
                class="btn-sm btn rounded-r-full hover:cursor-pointer"
            >
                <Pencil size={14} />
            </label>
        </div>

        <div>
            {#if $page.data.mainColors.length >= 2 && index !== $page.data.focusedPalette}
                <button
                    class="btn-sm btn-circle btn"
                    on:click={() => {
                        focusPalette(index)
                    }}
                >
                    <Eye size={15} />
                </button>
            {/if}
            {#if $page.data.mainColors.length >= 2}
                <button
                    disabled={$page.data.mainColors.length <= 1}
                    class="btn-sm btn-circle btn"
                    on:click={() => {
                        deletePalette(index)
                    }}
                >
                    <Trash size={15} />
                </button>
            {/if}
        </div>
    </div>
    <div
        class={`flex w-full items-start gap-0 transition-[height,gap] ${
            isFocused ? "h-72" : "h-32"
        } ${$colorSettings.showGap && "!gap-1.5"}`}
    >
        {#if palette.length === 0}
            <p>Loading</p>
        {/if}

        {#each palette as color, colorIndex}
            <Color
                {isFocused}
                color={colorIndex === 4 ? $page.data.mainColors[index] : color}
                index={colorIndex}
            />
        {/each}
    </div>
</div>
