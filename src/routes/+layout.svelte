<script lang="ts">
    import { themeChange } from "theme-change"
    import { onMount } from "svelte"
    import "../app.css"
    import Navbar from "./Navbar.svelte"
    import UnsavedPalettesDisclaimer from "./UnsavedPalettesDisclaimer.svelte"
    import ScrollUpButton from "./ScrollUpButton.svelte"

    let html: HTMLHtmlElement
    let theme: string = "light"

    onMount(() => {
        html = document.getElementsByTagName("html")[0]
        themeChange(false)

        // Prefer theme preference from local storage
        const localStorageTheme: string = window.localStorage.getItem("theme") || ""

        if (["light", "dark"].includes(localStorageTheme)) return (theme = localStorageTheme)

        // Set theme preference from system settings
        const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)")

        if (systemSettingDark.matches) theme = "dark"
        else theme = "light"
    })

    $: {
        if (html !== undefined && html !== null) html.setAttribute("data-theme", theme)
    }
</script>

<svelte:head>
    <title>Paletti</title>
</svelte:head>

<div class="relative flex flex-col">
    <Navbar {theme} />
    <UnsavedPalettesDisclaimer />
    <ScrollUpButton />
    <div class="relative mt-[56px] md:mt-[64px]">
        <slot />
    </div>
</div>
