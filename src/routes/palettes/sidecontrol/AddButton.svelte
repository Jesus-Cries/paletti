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

<div class="z-30 inline sm:tooltip" data-tip="Add new palette [a]">
    <button class="btn btn-circle md:hidden" on:click={addBasePalette}>
        <Plus size={26} />
    </button>
    <button class="btn btn-circle btn-lg hidden md:flex" on:click={addBasePalette}>
        <Plus size={30} />
    </button>
</div>
