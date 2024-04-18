<script lang="ts">
    import convert from "color-convert"
    import { Copy } from "lucide-svelte"
    import { ntc } from "$lib/ntc"

    export let isFocused: boolean
    export let color: string
    export let index: number

    /** Calculates contrast ratio between two colors
     * Credit: https://stackoverflow.com/a/9733420
     */
    function getContrast(currentColor: string, testColor: number[]): number {
        function luminance(rgb: number[]) {
            const RED = 0.2126
            const GREEN = 0.7152
            const BLUE = 0.0722

            const GAMMA = 2.4

            if (rgb === undefined || rgb.length < 3) return

            let a = rgb.map((v) => {
                v /= 255
                return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, GAMMA)
            })
            return a[0] * RED + a[1] * GREEN + a[2] * BLUE
        }

        let lum1 = luminance(convert.hex.rgb(currentColor))
        let lum2 = luminance(testColor)

        if (lum1 === undefined || lum2 === undefined) return 0

        let brightest = Math.max(lum1, lum2)
        let darkest = Math.min(lum1, lum2)
        return (brightest + 0.05) / (darkest + 0.05)
    }

    /** Returns text color with most contrast out of white and black */
    function getTextColor(currentColor: string): string {
        const contrastWhite: number = getContrast(currentColor, [255, 255, 255])
        const contrastBlack: number = getContrast(currentColor, [0, 0, 0])

        return contrastWhite > contrastBlack ? "#FFFFFF" : "#000000"
    }

    /** Color of copy icon and copy success message
     * Depends on contrast ratio between background color and white / black
     */
    let textColor: string
    $: textColor = getTextColor(color)

    let isClicked = false
    // Hides copy success message after change of color
    $: if (color) isClicked = false

    let timeout: NodeJS.Timeout
</script>

<div
    class={`relative flex h-full flex-col items-center gap-2 ${
        index !== 4 ? "w-[10.5%]" : "w-[16%]"
    }`}
>
    <div
        class={`flex h-16 w-full flex-col items-center justify-center md:h-full ${
            index === 0 && "rounded-l-xl"
        } ${index === 8 && "rounded-r-xl"}`}
        style="background-color: #{color};"
    >
        <p
            class={`relative top-6 z-50 hidden h-5 w-4/5 overflow-hidden overflow-ellipsis whitespace-nowrap text-center text-xs font-medium transition-opacity md:block ${
                isFocused ? "opacity-100" : "opacity-0"
            }`}
            style:color={textColor}
        >
            {#if color !== undefined && typeof color === "string"}
                {ntc.name(color)[1]}
            {/if}
        </p>
        <label
            class={`swap swap-rotate hidden h-full w-full translate-y-2 transition-opacity duration-150 hover:opacity-100 md:inline-grid ${
                isClicked ? "opacity-100" : "opacity-0"
            }`}
            style:color={textColor}
        >
            <input
                type="checkbox"
                bind:checked={isClicked}
                on:change={() => {
                    // Copies hex value of color to clipboard
                    navigator.clipboard.writeText("#" + color)

                    // Shows "Copied!" for 1 second when clicked
                    isClicked = true
                    clearTimeout(timeout)
                    timeout = setTimeout(() => {
                        isClicked = false
                    }, 1000)
                }}
            />
            <div class="swap-off flex content-center items-center justify-center">
                <Copy size={26} />
            </div>
            <div class="swap-on">Copied!</div>
        </label>
    </div>

    <!-- The on:click function is only used to prevent immediate deselection of text -->
    <!-- Therefore, a key event is not needed -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p
        on:click={(e) => {
            e.stopPropagation()
        }}
        class={`absolute -bottom-10 hidden transition-opacity md:flex 
        ${isFocused ? "opacity-100" : "opacity-0"} 
        ${index !== 4 ? "text-gray-500" : "font-bold"}
        `}
    >
        {color}
    </p>
</div>
