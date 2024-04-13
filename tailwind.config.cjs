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

                // Primary
                "primary-900": "#330008",
                "primary-800": "#6D021F",
                "primary-700": "#A4063A",
                "primary-600": "#DA0D57",
                "primary-500": "#EF347C",
                "primary-400": "#F55F95",
                "primary-300": "#FB8CB0",
                "primary-200": "#FEBACC",
                "primary-100": "#FFEBEE",
            },
            screens: {
                xs: "500px",
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                paletti: {
                    ...require("daisyui/src/theming/themes")["light"],

                    // Primary
                    primary: "#EF347C",
                    "primary-content": "#FFEBEE",

                    // Gray
                    neutral: "#383D47",
                    "neutral-content": "#F7F8FB",
                },
            },
        ],
    },
}
