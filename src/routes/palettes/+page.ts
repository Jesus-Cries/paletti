export const ssr = false

export const load = async ({ url }) => {
    return {
        names: url.searchParams.get("names")?.split(",") || ["Primary"],
        mainColors: url.searchParams.get("baseColors")?.split(",") || ["E82C74"],
        minLightnesses: (url.searchParams.get("minLightnesses")?.split(",") || ["5"]).map((n) =>
            parseInt(n)
        ),
        maxLightnesses: (url.searchParams.get("maxLightnesses")?.split(",") || ["97"]).map((n) =>
            parseInt(n)
        ),
        hueRotations: (url.searchParams.get("hueRotations")?.split(",") || ["0"]).map((n) =>
            parseInt(n)
        ),
        focusedPalette: parseInt(url.searchParams.get("focusedPalette") || "0"),
    }
}
