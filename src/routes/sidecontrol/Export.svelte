<script lang="ts">
    import { onMount } from "svelte"
    import { Copy } from "lucide-svelte"
    import { page } from "$app/stores"
    import { palettes } from "../store"

    /** Ref to modal element */
    let modal: any
    let currentOption: number = 0

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
        $page.data.names.forEach((name: string, index: number) => {
            let count: number = 9
            $palettes[index].forEach((color: string) => {
                cssVariables = [
                    ...cssVariables,
                    `    --${nameToCamelCase(name)}-${count}00: #${color};`,
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

        $page.data.names.forEach((name: string, index: number) => {
            let count: number = 9
            // Add palette name
            tailwindTheme = [...tailwindTheme, `            ${nameToCamelCase(name)}: {`]

            // Add color
            $palettes[index].forEach((color: string) => {
                tailwindTheme = [...tailwindTheme, `                ${count}00: "#${color}",`]
                count--
            })
            tailwindTheme = [...tailwindTheme, "            },"]
        })

        tailwindTheme = [...tailwindTheme, "        },", "    },", "},"]

        exportTailwindTheme = tailwindTheme
    }

    let exportArray: string[] = []
    $: {
        exportArray = $page.data.names.map(
            (name: string, index: number) =>
                `const ${nameToCamelCase(name)}: string[] = [${$palettes[index]
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

    // Change export option and toggle dialog when receiving corresponding events
    onMount(() => {
        function changeExportOption(e: Event) {
            const customEvent = e as CustomEvent<any>

            const keyAsNumber: number = customEvent.detail

            if (keyAsNumber <= 0) return
            if (keyAsNumber > exportOptions.length) return
            if (!modal.open) return

            currentOption = keyAsNumber - 1
        }

        function toggleExport() {
            if (!modal.open) modal.showModal()
            else modal.close()
        }

        document.addEventListener("copyExport", copyExport)
        document.addEventListener("changeExportOption", changeExportOption)
        document.addEventListener("toggleExport", toggleExport)

        return () => {
            document.removeEventListener("copyExport", copyExport)
            document.removeEventListener("changeExportOption", changeExportOption)
            document.removeEventListener("toggleExport", toggleExport)
        }
    })
</script>

<div class="tooltip w-full" data-tip="Show export options [e]">
    <button
        class="btn-primary btn w-full rounded-l-none"
        on:click={() => {
            modal.showModal()
        }}
    >
        Export
    </button>
</div>

<dialog bind:this={modal} class="modal">
    <form method="dialog" class="modal-backdrop">
        <button></button>
    </form>
    <div class="modal-box fixed top-[10%] w-full max-w-5xl overflow-hidden">
        <form method="dialog">
            <button class="btn-ghost btn-sm btn-circle btn absolute right-2 top-2">✕</button>
        </form>
        <h3 class="pb-4 text-lg font-bold">Export options</h3>
        <div class="tabs tabs-boxed bg-white px-0 pb-1.5">
            {#each exportOptions as exportOption, index}
                <button
                    class={`tab ${currentOption === index && "tab-active"}`}
                    on:click={() => {
                        currentOption = index
                    }}>{exportOption.name}</button
                >
            {/each}
        </div>

        <div class="mockup-code">
            <label class="swap-rotate swap absolute right-3 top-4">
                <input type="checkbox" bind:checked={copyIsClicked} on:change={copyExport} />
                <div class="swap-off flex content-center items-center justify-center">
                    <Copy size={22} />
                </div>
                <div class="swap-on text-sm">Copied!</div>
            </label>

            <div class="-mb-5 max-h-[50vh] overflow-x-auto overflow-y-auto pb-5 text-sm">
                {#if exportOptions[currentOption].fileName !== undefined}
                    <pre><code class="text-xs text-gray-300"
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

<style>
    /* Width */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #90949e;
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #747883;
    }
</style>
