import type { ColorSettings } from "$lib/interfaces"
import { writable, type Writable } from "svelte/store"

export const colorSettings: Writable<ColorSettings> = writable({
    showGap: false,
})

export const historyBack: Writable<string[]> = writable([])
export const historyForward: Writable<string[]> = writable([])

export const palettes: Writable<string[][]> = writable([])
