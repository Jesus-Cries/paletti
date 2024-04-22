import { colors } from "./src/lib/colors"

const gray = colors.gray
const primary = colors.primary

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    darkMode: ["selector", "[data-theme='dark']"],
    theme: {
        extend: {
            colors,
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
                    "primary-content": "#FFEBEF", // primary-100

                    // Tooltip background
                    neutral: "#3D404D", // gray-700
                    // Tooltip text
                    "neutral-content": "#F3F3F7", // gray-100

                    // Blank backgrounds
                    "base-100": "#FFFFFF", // White
                    "base-200": "#F3F3F7", // gray-100
                    "base-300": "#D0D1DC", // gray-200

                    // Button text
                    "base-content": "#242530", // gray-800
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["light"],

                    // Primary
                    primary: "#D90855", // primary-600
                    "primary-content": "#FFEBEF", // primary-100

                    // Tooltip, mockup-code background
                    neutral: "#3D404D", // gray-700
                    // Tooltip text
                    "neutral-content": "#F3F3F7", // gray-100

                    // Used for blank backgrounds
                    "base-100": "#000000", // Black
                    "base-200": "#0D0D12", //gray-900
                    "base-300": "#242530", //gray-800

                    // Button text
                    "base-content": "#D0D1DC", // gray-200
                },
            },
        ],
    },
}
