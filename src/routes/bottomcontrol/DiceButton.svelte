<script lang="ts">
    import convert from "color-convert"
    import { Dice5 } from "lucide-svelte"
    import { page } from "$app/stores"
    import { getContext, onMount } from "svelte"

    const updatePalette: (
        index: number,
        mainColor?: string,
        hueRotation?: number,
        addToHistory?: boolean
    ) => void = getContext("updatePalette")

    let isAnimating: boolean = false
    let timeout: NodeJS.Timeout | null = null

    /** Makes sure the rotate animation works as expected */
    function toggleAnimation() {
        if (!isAnimating) {
            isAnimating = true
            timeout = setTimeout(() => {
                isAnimating = false
            }, 800)
        }
    }

    /** Returns random int in range */
    function randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    /** Returns random main color */
    function randomMainColor(): string {
        const newHue: number = randomInt(0, 360)
        const newSaturation: number = randomInt(10, 90)
        const newLightness: number = randomInt(45, 55)

        return convert.hsl.hex([newHue, newSaturation, newLightness])
    }

    /** Creates random palette config */
    function createRandomPaletteConfig() {
        toggleAnimation()

        const hueRotation: number = randomInt(-10, 10) * 10
        const mainColor: string = randomMainColor()

        updatePalette($page.data.focusedPalette, mainColor, hueRotation)
        document.dispatchEvent(new Event("updateHslPicker"))
    }

    // Create random palette when receiving corresponding event
    onMount(() => {
        document.addEventListener("createRandomPaletteConfig", createRandomPaletteConfig)

        return () => {
            document.removeEventListener("createRandomPaletteConfig", createRandomPaletteConfig)
        }
    })
</script>

<div class="tooltip" data-tip="Create random palette [Spacebar]">
    <button
        class="btn-primary btn-circle btn-lg btn {isAnimating && 'rotating'}"
        on:click={createRandomPaletteConfig}
        on:mousedown={() => {
            if (timeout) clearTimeout(timeout)
            isAnimating = false
        }}
    >
        <Dice5 size={30} />
    </button>
</div>

<style>
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(450deg);
        }
    }

    .rotating {
        animation: rotate 0.8s ease-out;
    }
</style>
