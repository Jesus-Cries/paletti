<script lang="ts">
    import convert from "color-convert"
    import { getContext, onMount } from "svelte"
    import { slide } from "svelte/transition"
    import { page } from "$app/stores"
    import SettingWrapper from "./SettingWrapper.svelte"
    import Slider from "./Slider.svelte"

    const updatePalette: (
        index: number,
        mainColor?: string,
        hueRotation?: number,
        addToHistory?: boolean
    ) => void = getContext("updatePalette")

    // Initially load hsl values from url
    const hslValues: number[] = convert.hex.hsl($page.data.mainColors[$page.data.focusedPalette])

    let hue: number = hslValues[0]
    let saturation: number = hslValues[1]
    let lightness: number = hslValues[2]

    // Update hsl values when color is updated somewhere else
    onMount(() => {
        function handleColorChange(e: Event) {
            setTimeout(() => {
                const hslValues: number[] = convert.hex.hsl(
                    $page.data.mainColors[$page.data.focusedPalette]
                )

                hue = hslValues[0]
                saturation = hslValues[1]
                lightness = hslValues[2]
            }, 30)
        }

        document.addEventListener("updateHslPicker", handleColorChange)

        return () => {
            document.removeEventListener("updateHslPicker", handleColorChange)
        }
    })

    /** Updates values in url but does not save them to history to avoid cluttering */
    function updateValues(e: Event, type: "hue" | "saturation" | "lightness") {
        const inputElement = e.target as HTMLInputElement
        if (inputElement === null) return

        const value: number = parseInt(inputElement.value)

        // Updates corresponding variable
        switch (type) {
            case "hue":
                hue = value
                break
            case "saturation":
                saturation = value
                break
            case "lightness":
                lightness = value
                break
        }

        const mainColor: string = convert.hsl.hex([hue, saturation, lightness])

        updatePalette($page.data.focusedPalette, mainColor, undefined, false)
    }

    /** Adds current color to history
     * Is triggered on mouseup and touchend to avoid cluttering history with every small change in color during sliding
     */
    function addToHistory() {
        const mainColor = convert.hsl.hex([hue, saturation, lightness])

        updatePalette($page.data.focusedPalette, mainColor)
    }
</script>

<div
    in:slide
    out:slide={{ duration: 350 }}
    class="col-start-1 row-start-1 flex flex-col gap-4 pb-2"
    on:mouseup={addToHistory}
    on:touchend={addToHistory}
>
    <SettingWrapper label="Hue" labelSize="small" value={hue}>
        <Slider
            style="background: linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%));"
            min={0}
            max={360}
            step={1}
            value={hue}
            onInput={(e) => {
                updateValues(e, "hue")
            }}
        />
    </SettingWrapper>

    <SettingWrapper label="Saturation" labelSize="small" value={saturation}>
        <Slider
            style="background: linear-gradient(to right, hsl({hue}, 0%, {lightness}%), hsl({hue}, 100%, {lightness}%));"
            min={0}
            max={100}
            step={1}
            value={saturation}
            onInput={(e) => {
                updateValues(e, "saturation")
            }}
        />
    </SettingWrapper>

    <SettingWrapper label="Lightness" labelSize="small" value={lightness}>
        <Slider
            style="background: linear-gradient(to right, hsl({hue}, {saturation}%, 0%), hsl({hue}, {saturation}%, 50%), hsl({hue}, {saturation}%, 100%));"
            min={0}
            max={100}
            step={1}
            value={lightness}
            onInput={(e) => {
                updateValues(e, "lightness")
            }}
        />
    </SettingWrapper>
</div>
