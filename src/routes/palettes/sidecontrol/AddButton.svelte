<script lang="ts">
    import { Plus } from "lucide-svelte"
    import { onMount, getContext } from "svelte"
    import { colors as tailwindColors } from "../../../lib/colors"
    import type { TailwindPalette } from "../../../lib/interfaces"

    const primary: TailwindPalette = tailwindColors.primary

    const addPalette: (
        mainColor: string,
        hueRotation: number,
        minLightness: number,
        maxLightness: number
    ) => void = getContext("addPalette")

    function addBasePalette() {
        const mainColor: string = primary[500].replace("#", "")
        const hueRotation: number = 0
        const minLightness: number = 5
        const maxLightness: number = 97

        addPalette(mainColor, hueRotation, minLightness, maxLightness)
    }

    // Toggle show gap when receiving corresponding event
    onMount(() => {
        document.addEventListener("addPalette", addBasePalette)

        return () => {
            document.removeEventListener("addPalette", addBasePalette)
        }
    })
</script>

<div class="z-30 inline sm:tooltip" data-tip="Add new palette [a]">
    <button class="btn btn-circle md:hidden dark:bg-gray-900" on:click={addBasePalette}>
        <Plus size={26} />
    </button>
    <button class="btn btn-circle btn-lg hidden md:flex dark:bg-gray-900" on:click={addBasePalette}>
        <Plus size={30} />
    </button>
</div>
