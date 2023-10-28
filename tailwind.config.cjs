/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                // Gray
                "gray-900": "#0F1720",
                "gray-800": "#222933",
                "gray-700": "#383D47",
                "gray-600": "#575B66",
                "gray-500": "#747883",
                "gray-400": "#90949E",
                "gray-300": "#C1C5CD",
                "gray-200": "#E7EAEF",
                "gray-100": "#F7F8FB",

                // Paletti
                "paletti-900": "#330008",
                "paletti-800": "#6D021F",
                "paletti-700": "#A4063A",
                "paletti-600": "#DA0D57",
                "paletti-500": "#EF347C",
                "paletti-400": "#F55F95",
                "paletti-300": "#FB8CB0",
                "paletti-200": "#FEBACC",
                "paletti-100": "#FFEBEE",
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                paletti: {
                    ...require("daisyui/src/theming/themes")["[data-theme=light]"],

                    // Primary
                    primary: "#EF347C",
                    "primary-focus": "#DA0D57",
                    "primary-content": "#FFEBEE",

                    // Gray
                    neutral: "#383D47",
                    "neutral-focus": "#222933",
                    "neutral-content": "#F7F8FB",
                },
            },
        ],
    },
}
