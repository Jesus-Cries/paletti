/** Describes interface settings for color page */
export interface ColorSettings {
    showGap: boolean
}

export interface IPalette {
    name: string
    mainColor: string
    hueRotation: number
    colors: string[]
}

/** Describes a single color palette used in tailwind.config */
interface TailwindPalette {
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    DEFAULT: string
    "600": string
    "700": string
    "800": string
    "900": string
}

/** Describes the 'colors' object used in tailwind.config */
export interface TailwindColors {
    gray: TailwindPalette
    primary: TailwindPalette
}
