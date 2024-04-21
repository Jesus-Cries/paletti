/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    darkMode: ["selector", "[data-theme='dark']"],
    theme: {
        extend: {
            colors: {
                gray: {
                    900: "#0F1720",
                    800: "#222933",
                    700: "#383D47",
                    600: "#575B66",
                    500: "#747883",
                    DEFAULT: "#747883",
                    400: "#90949E",
                    300: "#C1C5CD",
                    200: "#E7EAEF",
                    100: "#F7F8FB",
                },

                primary: {
                    900: "#330008",
                    800: "#6D021F",
                    700: "#A4063A",
                    600: "#DA0D57",
                    500: "#EF347C",
                    DEFAULT: "#EF347C",
                    400: "#F55F95",
                    300: "#FB8CB0",
                    200: "#FEBACC",
                    100: "#FFEBEE",
                },
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
                light: {
                    ...require("daisyui/src/theming/themes")["light"],

                    // Primary
                    primary: "#EF347C", // primary-500
                    "primary-content": "#FFEBEE", // primary-100

                    // Tooltip background
                    neutral: "#383D47", // gray-700
                    // Tooltip text
                    "neutral-content": "#F7F8FB", // gray-100

                    // Blank backgrounds
                    "base-100": "#FFFFFF", // White
                    "base-200": "#F7F8FB", // gray-100
                    "base-300": "#E7EAEF", // gray-200

                    // Button text
                    "base-content": "#222933", // gray-800
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["light"],

                    // Primary
                    primary: "#DA0D57", // primary-600
                    "primary-content": "#FFEBEE", // primary-100

                    // Tooltip background
                    neutral: "#383D47", // gray-700
                    // Tooltip text
                    "neutral-content": "#F7F8FB", // gray-100

                    // Used for blank backgrounds
                    "base-100": "#000000", // Black
                    "base-200": "#0F1720", //gray-900
                    "base-300": "#222933", //gray-800

                    // Button text
                    "base-content": "#E7EAEF", // gray-200
                },
            },
        ],
    },
}
