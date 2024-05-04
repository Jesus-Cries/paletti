import convert from "color-convert"

/** Creates color palettes based on palette configs */
export class PaletteCreator {
    /** Creates hue palette based on hue of base color
     * Rotates hue to nearest bright hue
     */
    modifyHues(baseHue: number, hueRotation: number): number[] {
        // Hue modifiers to choose from that are added to base hue
        const maxHueModifiers: number[] = [20, 14, 9, 5, 2, 0, 2, 5, 9, 14, 20]

        // Creates hues based on hue rotation and rotation direction
        const hues: number[] = maxHueModifiers.map(
            (hueModifier: number) => baseHue + (hueModifier / 100) * hueRotation
        )

        return hues
    }

    /** Creates saturation palette based on saturation of base color
     * Divides remaining saturation space evenly between base saturation and max saturation
     */
    modifySaturations(baseSaturation: number): number[] {
        const maxSaturation = Math.min(30, baseSaturation * 2)

        // Divides remaining saturation space evenly between base saturation and max saturation
        const saturations: number[] = [
            Math.min(100, baseSaturation + maxSaturation),
            Math.min(100, baseSaturation + maxSaturation * 0.8),
            Math.min(100, baseSaturation + maxSaturation * 0.6),
            Math.min(100, baseSaturation + maxSaturation * 0.4),
            Math.min(100, baseSaturation + maxSaturation * 0.2),
            Math.min(100, baseSaturation),
            Math.min(100, baseSaturation + maxSaturation * 0.2),
            Math.min(100, baseSaturation + maxSaturation * 0.4),
            Math.min(100, baseSaturation + maxSaturation * 0.6),
            Math.min(100, baseSaturation + maxSaturation * 0.8),
            Math.min(100, baseSaturation + maxSaturation),
        ]

        return saturations
    }

    /** Creates lightness palette based on lightness of base color
     * Divides remaining lightnesses evenly between base lightness and min / max lightness
     */
    modifyLightnesses(baseLightness: number, colorIndex: number): number[] {
        const minLightness = 5
        const maxLightness = 97

        // Distances to min and max lightness
        const baseToMin = baseLightness - minLightness
        const baseToMax = maxLightness - baseLightness

        // Amount of colors below and above base color
        const amountColorsBelow: number = colorIndex
        const amountColorsAbove: number = 10 - colorIndex

        // Step sizes from base lightness to min and max lightness
        const stepBelow: number = baseToMin / amountColorsBelow
        const stepAbove: number = baseToMax / amountColorsAbove

        const lightnesses: number[] = []

        // Adds lightnesses below base lightness
        for (let i = amountColorsBelow; i > 0; i--) {
            const newLightness: number = baseLightness - stepBelow * i

            lightnesses.push(newLightness)
        }

        // Adds base lightness
        lightnesses.push(baseLightness)

        // Adds lightnesses above base lightness
        for (let i = 0; i < amountColorsAbove; i++) {
            const newLightness: number = baseLightness + stepAbove * (i + 1)
            lightnesses.push(newLightness)
        }

        return lightnesses
    }

    /** Calculates index of base color in palette
     * Used to determine rest of the colors in palette
     */
    getColorIndex(baseColor: string): number {
        const baseHsl: number[] = convert.hex.hsl(baseColor)
        const baseLightness: number = baseHsl[2]

        const lightnessSteps: number = 100 / 11

        const colorIndex = Math.floor(baseLightness / lightnessSteps)
        console.log(colorIndex)

        return colorIndex
    }

    /** Creates a more balanced color palette
     * @param baseColor Base / middle color of color palette in hex (without #)
     * @param hueRotation Range: -100 - 100
     */
    createPalette(baseColor: string, hueRotation: number): string[] {
        // TODO: Adapt hue calculation to new lightness calculation
        // TODO: Adapt saturation calculation to new lightness calculation

        const baseHsl: number[] = convert.hex.hsl(baseColor)

        const colorIndex = this.getColorIndex(baseColor)

        const hues: number[] = this.modifyHues(baseHsl[0], hueRotation)
        const saturations: number[] = this.modifySaturations(baseHsl[1])
        const lightnesses: number[] = this.modifyLightnesses(baseHsl[2], colorIndex)

        const colors: string[] = []

        // Creates color palette based on modified hues, saturations and lightnesses
        const amountofColors = 11
        for (let i = 0; i < amountofColors; i++) {
            const color: string = convert.hsl.hex([hues[i], saturations[i], lightnesses[i]])
            colors.push(color)
        }

        return colors
    }
}
