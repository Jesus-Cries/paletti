import convert from "color-convert"

/** Creates color palettes based on palette configs */
export class PaletteCreator {
    /** Creates hue palette based on hue of base color
     * Rotates hue to nearest bright hue
     */
    modifyHues(baseHue: number, hueRotation: number): number[] {
        // Hue modifiers to choose from that are added to base hue
        const hueModifiers: number[] = [20, 14, 9, 5, 2, 0, 2, 5, 9, 14, 20]

        // Creates hues based on hue rotation and rotation direction
        const hues: number[] = hueModifiers.map(
            (hueModifier: number) => baseHue + (hueModifier / 100) * hueRotation
        )

        return hues
    }

    /** Creates saturation palette based on saturation of base color
     * Divides remaining saturation space evenly between base saturation and max saturation
     */
    modifySaturations(baseSaturation: number, colorIndex: number): number[] {
        /** Maps colorIndex to index of left side of palette to make calculation easier as both sides are identical */
        const indexMap: number[] = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]
        const mappedColorIndex: number = indexMap[colorIndex]

        // Amount of colors below and above base color
        const amountColorsBelow: number = mappedColorIndex
        const amountColorsAbove: number = 5 - mappedColorIndex

        /** Magic step size
         * Is at least 2 and increases with base saturation
         */
        const stepSize: number = 2 * Math.max(baseSaturation / 30, 1)

        const leftSide: number[] = []

        // Adds saturations below base saturation until left end of palette
        for (let i = amountColorsBelow; i > 0; i--) {
            const newSaturation: number = baseSaturation + stepSize * i

            leftSide.push(newSaturation)
        }

        // Adds base saturation
        leftSide.push(baseSaturation)

        // Adds saturations above base saturation until middle of palette
        for (let i = 0; i < amountColorsAbove; i++) {
            const newSaturation: number = baseSaturation - stepSize * (i + 1)

            leftSide.push(newSaturation)
        }

        // Remomes middle saturation from left side
        const middleSaturation: number = leftSide.pop() as number

        // Creates right side of palette by reversing left side
        const rightSide: number[] = leftSide.toReversed()

        // Combines left side, middle saturation and right side to create full palette
        let saturations: number[] = [...leftSide, middleSaturation, ...rightSide]

        // Ensures that saturations are between 0 and 100
        saturations = saturations.map((saturation: number) => Math.min(100, saturation))
        saturations = saturations.map((saturation: number) => Math.max(0, saturation))

        return saturations
    }

    /** Creates lightness palette based on lightness of base color
     * Divides remaining lightnesses evenly between base lightness and min / max lightness
     */
    modifyLightnesses(
        baseLightness: number,
        colorIndex: number,
        minLightness: number,
        maxLightness: number
    ): number[] {
        // Distances to min and max lightness
        const baseToMin: number = baseLightness - minLightness
        const baseToMax: number = maxLightness - baseLightness

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

        return colorIndex
    }

    /** Creates a more balanced color palette
     * @param baseColor Base / middle color of color palette in hex (without #)
     * @param hueRotation Range: -100 - 100
     */
    createPalette(
        baseColor: string,
        minLightness: number,
        maxLightness: number,
        hueRotation: number
    ): string[] {
        const baseHsl: number[] = convert.hex.hsl(baseColor)

        const colorIndex = this.getColorIndex(baseColor)

        const hues: number[] = this.modifyHues(baseHsl[0], hueRotation)
        const saturations: number[] = this.modifySaturations(baseHsl[1], colorIndex)
        const lightnesses: number[] = this.modifyLightnesses(
            baseHsl[2],
            colorIndex,
            minLightness,
            maxLightness
        )

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
