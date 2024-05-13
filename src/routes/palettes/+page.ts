export const ssr = false

export const load = async ({ url }) => {
    return {
        names: url.searchParams.get("names")?.split(",") || ["Primary"],
        mainColors: url.searchParams.get("baseColors")?.split(",") || ["E82C74"],
        hueRotations: (url.searchParams.get("hueRotations")?.split(",") || ["0"]).map((n) =>
            parseInt(n)
        ),
        focusedPalette: parseInt(url.searchParams.get("focusedPalette") || "0"),
    }
}
