<script lang="ts">
    import { getContext } from "svelte"
    import { fade } from "svelte/transition"
    import { page } from "$app/stores"

    const updatePalette: (
        index: number,
        mainColor?: string,
        hueRotation?: number,
        addToHistory?: boolean
    ) => void = getContext("updatePalette")

    /** Updates main color of palette config */
    function setNewColor(e: Event) {
        const inputElement = e.target as HTMLInputElement
        if (inputElement === null) return
        if (inputElement.value.length < 6) return

        let allowedCharacters = /^[\#A-Fa-f0-9]+$/
        if (!allowedCharacters.test(inputElement.value)) return

        let mainColor: string = inputElement.value.replaceAll("#", "")
        if (mainColor.length !== 6) return

        mainColor = mainColor.toUpperCase()

        updatePalette($page.data.focusedPalette, mainColor)
    }
</script>

<input
    in:fade={{ duration: 250 }}
    out:fade={{ duration: 250 }}
    type="text"
    class="input-bordered input col-start-1 row-start-1 h-8 w-full p-0 text-center text-lg"
    maxlength="7"
    value={$page.data.mainColors[$page.data.focusedPalette]}
    on:input={setNewColor}
/>
