<script lang="ts">
    import convert from "color-convert"
    import { page } from "$app/stores"
    import { getContext, onMount } from "svelte"
    import Slider from "./Slider.svelte"
    import SettingWrapper from "./SettingWrapper.svelte"

    const min: number = -100
    const max: number = 100
    const step: number = 10

    const updatePalette: (
        index: number,
        mainColor?: string,
        hueRotation?: number,
        addToHistory?: boolean
    ) => void = getContext("updatePalette")

    function setHueRotationAmount(e: Event) {
        const inputElement = e.target as HTMLInputElement
        if (inputElement === null) return

        const hueRotation: number = parseInt(inputElement.value)

        updatePalette($page.data.focusedPalette, undefined, hueRotation)
    }

    let mainHue: number
    $: {
        if ($page.data.mainColors !== undefined)
            mainHue = convert.hex.hsl($page.data.mainColors[$page.data.focusedPalette])[0]
    }

    // Update hue rotation when receiving corresponding event
    onMount(() => {
        function handleKeyDown(multiplier: number) {
            let hueRotation: number = parseInt($page.data.hueRotations[$page.data.focusedPalette])
            hueRotation += step * multiplier

            hueRotation = Math.min(max, Math.max(min, hueRotation))

            updatePalette($page.data.focusedPalette, undefined, hueRotation)
        }

        document.addEventListener("ArrowLeft", () => {
            handleKeyDown(-1)
        })
        document.addEventListener("ArrowRight", () => {
            handleKeyDown(1)
        })

        return () => {
            document.removeEventListener("ArrowLeft", () => {
                handleKeyDown(-1)
            })
            document.removeEventListener("ArrowRight", () => {
                handleKeyDown(1)
            })
        }
    })
</script>

{#if $page.data.hueRotations !== undefined}
    <SettingWrapper label="Hue Rotation">
        <Slider
            style="background: linear-gradient(90deg, hsl({mainHue -
                30}, 100%, 65%) 0%, hsl({mainHue + 30}, 100%, 65%) 100%);"
            {min}
            {max}
            {step}
            value={$page.data.hueRotations[$page.data.focusedPalette]}
            onInput={setHueRotationAmount}
        />
    </SettingWrapper>
{/if}
