<script lang="ts">
    import convert from "color-convert"
    import { page } from "$app/stores"
    import { getContext } from "svelte"
    import Slider from "./Slider.svelte"
    import SettingWrapper from "./SettingWrapper.svelte"

    const min: number = -100
    const max: number = 100
    const step: number = 10

    const updatePalette: (
        index: number,
        mainColor?: string,
        hueRotation?: number,
        addToHistory?: boolean,
        minLightness?: number,
        maxLightness?: number
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
</script>

{#if $page.data.hueRotations !== undefined}
    <SettingWrapper label="Hue Rotation" infoText="Adds tint to colors towards edges">
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
