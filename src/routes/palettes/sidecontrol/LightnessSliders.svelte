<script lang="ts">
    import convert from "color-convert"
    import { page } from "$app/stores"
    import { getContext } from "svelte"
    import SettingWrapper from "./SettingWrapper.svelte"
    import Slider from "./Slider.svelte"

    const step: number = 1

    const updatePalette: (
        index: number,
        mainColor?: string,
        hueRotation?: number,
        addToHistory?: boolean,
        minLightness?: number,
        maxLightness?: number
    ) => void = getContext("updatePalette")

    function setMinLightness(e: Event) {
        const inputElement = e.target as HTMLInputElement
        if (inputElement === null) return

        const minLightness: number = parseInt(inputElement.value)

        updatePalette($page.data.focusedPalette, undefined, undefined, undefined, minLightness)
    }

    function setMaxLightness(e: Event) {
        const inputElement = e.target as HTMLInputElement
        if (inputElement === null) return

        const maxLightness: number = parseInt(inputElement.value)

        updatePalette(
            $page.data.focusedPalette,
            undefined,
            undefined,
            undefined,
            undefined,
            maxLightness
        )
    }

    let mainHue: number
    $: {
        if ($page.data.mainColors !== undefined)
            mainHue = convert.hex.hsl($page.data.mainColors[$page.data.focusedPalette])[0]
    }
</script>

{#if $page.data.minLightnesses !== undefined && $page.data.maxLightnesses !== undefined}
    <SettingWrapper
        label="Minimum Lightness"
        infoText="This determines how dark the darkest color will be."
        value={$page.data.minLightnesses[$page.data.focusedPalette]}
    >
        <Slider
            style="background: linear-gradient(90deg, hsl({mainHue}, 100%, 0%) 0%, hsl({mainHue}, 100%, 50%) 100%);"
            min={0}
            max={50}
            {step}
            value={$page.data.minLightnesses[$page.data.focusedPalette]}
            onInput={setMinLightness}
        />
    </SettingWrapper>

    <SettingWrapper
        label="Maximum Lightness"
        infoText="This determines how light the lightest color will be."
        value={$page.data.maxLightnesses[$page.data.focusedPalette]}
    >
        <Slider
            style="background: linear-gradient(90deg, hsl({mainHue}, 100%, 50%) 0%, hsl({mainHue}, 100%, 100%) 100%);"
            min={50}
            max={100}
            {step}
            value={$page.data.maxLightnesses[$page.data.focusedPalette]}
            onInput={setMaxLightness}
        />
    </SettingWrapper>
{/if}
