<script lang="ts">
    import SettingWrapper from "./SettingWrapper.svelte"
    import HexPicker from "./HexPicker.svelte"
    import HslPicker from "./HslPicker.svelte"
    import { onMount } from "svelte"

    const colorModeOptions: string[] = ["HEX", "HSL"]
    let colorMode: string = colorModeOptions[0]

    // Toggle color mode when receiving corresponding event
    onMount(() => {
        function toggleColorMode() {
            colorMode = colorMode === "HEX" ? "HSL" : "HEX"
        }

        document.addEventListener("toggleColorMode", toggleColorMode)

        return () => {
            document.removeEventListener("toggleColorMode", toggleColorMode)
        }
    })
</script>

<SettingWrapper label="Main color">
    <div class="tabs tabs-boxed">
        {#each colorModeOptions as colorModeOption}
            <button
                class={`tab flex-1 ${colorModeOption === colorMode && "tab-active"}`}
                on:click={() => {
                    colorMode = colorModeOption
                }}
            >
                {colorModeOption}
            </button>
        {/each}
    </div>
    <div class="grid w-full grid-cols-1">
        {#if colorMode === "HEX"}
            <HexPicker />
        {:else if colorMode === "HSL"}
            <HslPicker />
        {/if}
    </div>
</SettingWrapper>
