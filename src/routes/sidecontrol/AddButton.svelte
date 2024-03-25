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

<div class="tooltip z-50" data-tip="Add new palette [a]">
    <button class="btn-circle btn-lg btn" on:click={addBasePalette}>
        <Plus size={30} />
    </button>
</div>
