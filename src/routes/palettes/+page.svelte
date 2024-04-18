<script lang="ts">
    import { setContext, onMount } from "svelte"
    import { fade } from "svelte/transition"
    import Palettes from "./Palettes.svelte"
    import { goto } from "$app/navigation"
    import { historyBack, historyForward, palettes } from "./store"
    import BottomControl from "./bottomcontrol/BottomControl.svelte"
    import SideControl from "./sidecontrol/SideControl.svelte"
    import { PaletteCreator } from "./PaletteCreator"
    import Disclaimer from "./Disclaimer.svelte"
    import type { IPalette } from "$lib/interfaces"

    /** Data from +page.ts (URL parameters) */
    export let data

    /** Creates url with state date */
    function createUrl(
        names: string[],
        mainColors: string[],
        hueRotations: number[],
        focusedPalette: number
    ) {
        return `?names=${names.join(",")}&mainColors=${mainColors.join(
            ","
        )}&hueRotations=${hueRotations.join(",")}&focusedPalette=${focusedPalette}`
    }

    /** Updates name of palette based on its index */
    function updateName(index: number, name: string) {
        const newNames: string[] = [...data.names]

        if (name !== undefined) newNames[index] = name

        const newUrl: string = createUrl(
            newNames,
            data.mainColors,
            data.hueRotations,
            data.focusedPalette
        )
        navigate(newUrl)
    }

    /** Updates hue rotation of palette based on its index */
    function updatePalette(
        index: number,
        mainColor?: string,
        hueRotation?: number,
        addToHistory?: boolean
    ) {
        const newMainColors: string[] = [...data.mainColors]
        const newHueRotations: number[] = [...data.hueRotations]

        if (mainColor !== undefined) newMainColors[index] = mainColor
        if (hueRotation !== undefined) newHueRotations[index] = hueRotation

        // If change is only in hueRotation, remove last item from historyBack
        // This way, the history is not cluttered with every change in hue rotation
        if ($historyBack.length > 0 && mainColor === undefined)
            historyBack.update((prev) => prev.slice(0, prev.length - 1))

        if (addToHistory === undefined || addToHistory === true) addToHistory = true
        else addToHistory = false

        const newUrl: string = createUrl(data.names, newMainColors, newHueRotations, index)

        navigate(newUrl, addToHistory)
    }

    /** Adds a new palette */
    function addPalette(mainColor: string, hueRotation: number) {
        /** Pre chosen names */
        const nameTemplate: string[] = ["Primary", "Secondary", "Accent", "Gray"]

        let newName: string = "New Palette 1"

        // Find first unused name
        nameTemplate.some((name: string) => {
            if (!data.names.includes(name)) return (newName = name)
        })

        // If name already exists, increment number
        while (data.names.includes(newName)) {
            const number: number = parseInt(newName.split(" ")[2])
            newName = `New Palette ${number + 1}`
        }

        const newNames: string[] = [...data.names, newName]
        const newMainColors: string[] = [...data.mainColors, mainColor]
        const newHueRotation: number[] = [...data.hueRotations, hueRotation]
        const newIndex: number = data.mainColors.length

        data.names = newNames
        data.mainColors = newMainColors
        data.hueRotations = newHueRotation
        data.focusedPalette = newIndex

        const newUrl: string = createUrl(newNames, newMainColors, newHueRotation, newIndex)
        navigate(newUrl)
        document.dispatchEvent(new Event("updateHslPicker"))
    }

    /** Deletes a palette based on index */
    function deletePalette(index: number) {
        if (data.mainColors.length <= 1) return

        let newNames: string[] = [...data.names]
        let newMainColors: string[] = [...data.mainColors]
        let newHueRotations: number[] = [...data.hueRotations]

        newNames.splice(index, 1)
        newMainColors.splice(index, 1)
        newHueRotations.splice(index, 1)

        const newIndex: number = data.focusedPalette > 0 ? data.focusedPalette - 1 : 0

        data.names = newNames
        data.mainColors = newMainColors
        data.hueRotations = newHueRotations
        data.focusedPalette = newIndex

        const newUrl: string = createUrl(newNames, newMainColors, newHueRotations, newIndex)
        navigate(newUrl)
        document.dispatchEvent(new Event("updateHslPicker"))
    }

    /** Focuses a palette based on index */
    function focusPalette(index: number) {
        if (index < 0) return
        if (index >= data.mainColors.length) return

        const newUrl: string = createUrl(data.names, data.mainColors, data.hueRotations, index)

        navigate(newUrl)
        document.dispatchEvent(new Event("updateHslPicker"))
    }

    /** Actually navigates to url with new states */
    function navigate(url: string, addToHistory: boolean = true) {
        goto(url)

        // Do not alter history
        if (addToHistory === false) return

        // Add new url to historyBack and clear historyForward
        historyBack.update((prev) => [...prev, url])
        historyForward.set([])
    }

    /** Moves back and forward through history stack */
    function moveHistory(direction: "forward" | "back") {
        let nextUrl: string = ""

        if (direction === "back") {
            // If there is only one item in historyBack, we are already at the first page
            if ($historyBack.length === 1) return
            // Get current url and move it to historyForward
            const currentUrl: string = $historyBack[$historyBack.length - 1]
            historyBack.update((prev) => prev.slice(0, prev.length - 1))

            historyForward.update((prev) => [...prev, currentUrl])

            // Go to previous page
            if ($historyBack.length === 0) return
            nextUrl = $historyBack[$historyBack.length - 1]
        } else if (direction === "forward") {
            // If there is no item in historyForward, we are already at the last page
            if ($historyForward.length === 0) return

            // Get next url and move it to historyBack
            nextUrl = $historyForward[$historyForward.length - 1]
            historyForward.update((prev) => prev.slice(0, prev.length - 1))

            historyBack.update((prev) => [...prev, nextUrl])
        }

        // Get data from url and update states (Needs to be done for some reason)
        const newNames: string[] = nextUrl.split("?")[1].split("&")[0].split("=")[1].split(",")

        const newMainColors: string[] = nextUrl.split("?")[1].split("&")[1].split("=")[1].split(",")

        const newHueRotations: number[] = nextUrl
            .split("?")[1]
            .split("&")[2]
            .split("=")[1]
            .split(",")
            .map((n) => parseInt(n))

        const newIndex: number = parseInt(nextUrl.split("?")[1].split("&")[3].split("=")[1])

        data.names = newNames
        data.mainColors = newMainColors
        data.hueRotations = newHueRotations
        data.focusedPalette = newIndex

        goto(nextUrl)

        document.dispatchEvent(new Event("updateHslPicker"))
    }

    setContext("navigate", navigate)
    setContext("moveHistory", moveHistory)
    setContext("updateName", updateName)
    setContext("updatePalette", updatePalette)
    setContext("addPalette", addPalette)
    setContext("deletePalette", deletePalette)
    setContext("focusPalette", focusPalette)

    // Bugs
    // FIXME: Navigating to home and then back to palettes adds a new palette to history
    // FIXME: Lightnesses of 0 and 100 turn hue rotation red
    // FIXME: Palettes can't be clicked behind parent div of BottomControl
    // FIXME: Range sliders do not work in Firefox (afaik it's not due to CSS)

    // Features
    // TODO: Make HSL values editable
    // TODO:? Make amount of colors per palette customizable
    // TODO:? Add some sort of fullscreen option
    // TODO:? Add SideControl to mobile view

    // Polishing
    // TODO: Improve performance by only updating hues when hue rotation changes

    // Testing
    // TODO: Check if saturation logic is still working correctly

    function handleKeyDown(e: KeyboardEvent) {
        // Prevents keyboard shortcuts from firing when user is typing into input
        const activeElement: Element | null = document.activeElement
        if (activeElement && activeElement.tagName === "INPUT") return

        if (!isNaN(Number(e.key))) {
            focusPalette(Number(e.key) - 1)
        }

        if (e.key === " ") {
            document.dispatchEvent(new Event("createRandomPaletteConfig"))
            // This prevents dialoges from closing when pressing spacebar
            e.preventDefault()
        }
        if (e.key === "a" && !e.ctrlKey) document.dispatchEvent(new Event("addPalette"))
        if (e.key === "d" && !e.ctrlKey) deletePalette(data.focusedPalette)
        if (e.key === "c" && !e.ctrlKey) document.dispatchEvent(new Event("copyExport"))
        if (e.key === "e") document.dispatchEvent(new Event("toggleExport"))
        if (e.key === "g") document.dispatchEvent(new Event("toggleShowGap"))
        if (e.key === "m") document.dispatchEvent(new Event("toggleColorMode"))
        if (e.key === "ArrowLeft" || e.key === "ArrowRight")
            document.dispatchEvent(new Event(e.key))

        if (!e.ctrlKey) return

        if (e.key === "z") moveHistory("back")
        else if (e.key === "y") moveHistory("forward")
    }

    onMount(() => {
        // If there is history, navigate to the last palette
        if ($historyBack.length > 0) navigate($historyBack[$historyBack.length - 1], false)
        // Makes sure the url is updated when the page is loaded without url parameters
        else if (data.mainColors.length === 1) {
            const newUrl: string = createUrl(data.names, data.mainColors, data.hueRotations, 0)
            navigate(newUrl)
        }
    })

    const paletteCreator = new PaletteCreator()

    // Update color palettes when main color or hue rotation changes
    $: {
        const newPalettes: IPalette[] = data.mainColors.map((color: string, index: number) => ({
            name: data.names[index],
            mainColor: data.mainColors[index],
            hueRotation: data.hueRotations[index],
            colors: paletteCreator.createPalette(color, data.hueRotations[index]),
        }))

        palettes.set(newPalettes)
    }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div
    transition:fade={{ duration: 100 }}
    class="absolute flex h-[calc(100vh-56px)] w-full md:h-[calc(100vh-64px)]"
>
    <Disclaimer />
    <div class="relative h-full w-full md:h-auto md:w-5/6">
        <Palettes />
        <BottomControl />
    </div>
    <SideControl />
</div>
