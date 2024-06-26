<script lang="ts">
    import convert from "color-convert"
    import { page } from "$app/stores"
    import SettingWrapper from "./SettingWrapper.svelte"
    import Slider from "./Slider.svelte"

    const step: number = 1

    let mainHue: number
    $: {
        if ($page.data.mainColors !== undefined)
            mainHue = convert.hex.hsl($page.data.mainColors[$page.data.focusedPalette])[0]
    }
</script>

<SettingWrapper
    label="Minimum Lightness"
    infoText="This determines how dark the darkest color will be."
    value={5}
>
    <Slider
        style="background: linear-gradient(90deg, hsl({mainHue}, 100%, 0%) 0%, hsl({mainHue}, 100%, 50%) 100%);"
        min={0}
        max={50}
        {step}
        value={5}
        onInput={() => {}}
    />
</SettingWrapper>
<SettingWrapper
    label="Maximum Lightness"
    infoText="This determines how light the lightest color will be."
    value={97}
>
    <Slider
        style="background: linear-gradient(90deg, hsl({mainHue}, 100%, 50%) 0%, hsl({mainHue}, 100%, 100%) 100%);"
        min={50}
        max={100}
        {step}
        value={97}
        onInput={() => {}}
    />
</SettingWrapper>
