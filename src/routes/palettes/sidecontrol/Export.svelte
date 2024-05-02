<script lang="ts">
    import { Copy } from "lucide-svelte"
    import { page } from "$app/stores"
    import { palettes } from "../store"
    import { onMount } from "svelte"

    /** Ref to modal element */
    let modal: any
    let currentOption: number = 0
    const amountColors: number = 11
    const colorNames: string[] = [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "950",
    ]

    function nameToCamelCase(name: string) {
        return name
            .split(" ")
            .map((word: string, index: number) => {
                if (index === 0) return word.toLowerCase()
                else return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            })
            .join("")
    }

    interface ExportOption {
        name: string
        lines: string[]
        fileName?: string
    }

    let exportLink: string[] = []
    $: {
        $palettes
        exportLink = [window.location.href]
    }

    let exportCssVariables: string[] = []
    $: {
        let cssVariables: string[] = [":root {"]

        // Add CSS variables for each color
        $page.data.names?.forEach((name: string, index: number) => {
            let count: number = amountColors

            $palettes[index].colors.forEach((color: string) => {
                cssVariables = [
                    ...cssVariables,
                    `    --${nameToCamelCase(name)}-${colorNames[count - 1]}: #${color};`,
                ]
                count--
            })

            cssVariables = [...cssVariables, ""]
        })

        // Remove last new line
        cssVariables = cssVariables.slice(0, -1)

        cssVariables = [...cssVariables, "}"]

        exportCssVariables = cssVariables
    }

    let exportTailwindTheme: string[] = []
    $: {
        let tailwindTheme: string[] = ["theme: {", "    extend: {", "        colors: {"]

        $page.data.names?.forEach((name: string, index: number) => {
            let count: number = amountColors

            // Add palette name
            tailwindTheme = [...tailwindTheme, `            ${nameToCamelCase(name)}: {`]

            // Add color
            $palettes[index].colors.forEach((color: string, index: number) => {
                tailwindTheme = [
                    ...tailwindTheme,
                    `                ${colorNames[count - 1]}: "#${color}",`,
                ]
                if (index === 5)
                    tailwindTheme = [...tailwindTheme, `                DEFAULT: "#${color}",`]
                count--
            })

            tailwindTheme = [...tailwindTheme, "            },"]
        })

        tailwindTheme = [...tailwindTheme, "        },", "    },", "},"]

        exportTailwindTheme = tailwindTheme
    }

    let exportArray: string[] = []
    $: {
        exportArray = $page.data.names?.map(
            (name: string, index: number) =>
                `const ${nameToCamelCase(name)}: string[] = [${$palettes[index].colors
                    .map((color: string) => `"#${color}"`)
                    .join(", ")}];`
        )
    }

    let exportOptions: ExportOption[] = []
    $: exportOptions = [
        { name: "CSS Variables", lines: exportCssVariables },
        { name: "Tailwind CSS", lines: exportTailwindTheme, fileName: "tailwind.config.js" },
        { name: "Link", lines: exportLink },
        { name: "Array", lines: exportArray },
    ]

    // TODO: Add help links to each export option

    let copyIsClicked = false
    let timeout: NodeJS.Timeout

    function copyExport() {
        // Copies export option to clipboard
        navigator.clipboard.writeText(exportOptions[currentOption].lines.join("\n"))

        // Shows "Copied!" for 1 second when clicked
        copyIsClicked = true
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            copyIsClicked = false
        }, 1000)
    }

    // Toggle dialog and copy export when receiving corresponding events
    onMount(() => {
        function toggleExport() {
            if (!modal.open) modal.showModal()
            else modal.close()
        }

        document.addEventListener("copyExport", copyExport)
        document.addEventListener("toggleExport", toggleExport)
        return () => {
            document.removeEventListener("copyExport", copyExport)
            document.removeEventListener("toggleExport", toggleExport)
        }
    })
</script>

<div class="inline w-full sm:tooltip" data-tip="Show export options [e]">
    <button
        class="btn btn-primary w-full"
        on:click={() => {
            modal.showModal()
        }}
    >
        Export
    </button>
</div>

<dialog bind:this={modal} class="modal dark:!bg-gray-900/65">
    <form method="dialog" class="modal-backdrop">
        <button></button>
    </form>
    <div
        class="modal-box fixed top-[10%] w-full max-w-5xl overflow-hidden border-2 border-base-200 dark:border-neutral"
    >
        <form method="dialog">
            <button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button>
        </form>
        <h3 class="pb-4 text-lg font-bold">Export options</h3>
        <div class="tabs-boxed tabs w-fit bg-base-100 px-0 pb-1.5">
            {#each exportOptions as exportOption, index}
                <button
                    class={`tab ${currentOption === index && "tab-active"}`}
                    on:click={() => {
                        currentOption = index
                    }}>{exportOption.name}</button
                >
            {/each}
        </div>

        <div class="mockup-code dark:bg-base-200">
            <label class="swap swap-rotate absolute right-3 top-4">
                <input type="checkbox" bind:checked={copyIsClicked} on:change={copyExport} />
                <div class="swap-off flex content-center items-center justify-center">
                    <Copy size={22} />
                </div>
                <div class="swap-on text-sm">Copied!</div>
            </label>

            <div
                class="scrollbar -mb-5 max-h-[50vh] overflow-x-auto overflow-y-auto pb-5 text-sm selection:bg-primary-600"
            >
                {#if exportOptions[currentOption].fileName !== undefined}
                    <pre><code class="text-xs text-gray-400"
                            >{exportOptions[currentOption].fileName}</code
                        ></pre>
                {/if}
                {#each exportOptions[currentOption].lines as line, index}
                    <pre data-prefix={index + 1}><code class="pr-8">{line}</code></pre>
                {/each}
            </div>
        </div>
    </div>
</dialog>
