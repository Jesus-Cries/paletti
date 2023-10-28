<script lang="ts">
    import { Plus } from "lucide-svelte"
    import { onMount, getContext } from "svelte"

    const addPalette: (mainColor: string, hueRotation: number) => void = getContext("addPalette")

    function addBasePalette() {
        const mainColor: string = "EF347C"
        const hueRotation: number = 50

        addPalette(mainColor, hueRotation)
    }

    // Toggle show gap when receiving corresponding event
    onMount(() => {
        document.addEventListener("addPalette", addBasePalette)

        return () => {
            document.removeEventListener("addPalette", addBasePalette)
        }
    })
</script>

<div class="tooltip" data-tip="Add new palette [a]">
    <button
        class="btn rounded-r-none border-[3px] border-r-0 border-gray-200 bg-white hover:bg-gray-100"
        on:click={addBasePalette}
    >
        <Plus size={30} />
    </button>
</div>
