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
                    primary: primary[500],
                    "primary-content": primary[100],

                    // Tooltip background
                    neutral: gray[700],
                    // Tooltip text
                    "neutral-content": gray[100],

                    // Blank backgrounds
                    "base-100": "#FFFFFF",
                    "base-200": gray[100],
                    "base-300": gray[200],

                    // Button text
                    "base-content": gray[800],
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["light"],

                    // Primary
                    primary: primary[600],
                    "primary-content": primary[100],

                    // Tooltip, mockup-code background
                    neutral: gray[700],
                    // Tooltip text
                    "neutral-content": gray[100],

                    // Used for blank backgrounds
                    "base-100": "#000000",
                    "base-200": gray[900],
                    "base-300": gray[800],

                    // Button text
                    "base-content": gray[200],
                },
            },
        ],
    },
}
