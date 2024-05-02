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
                    "primary-content": primary[50],

                    // Tooltip background
                    neutral: gray[800],
                    // Tooltip text
                    "neutral-content": gray[50],

                    // Blank backgrounds
                    "base-100": "#FFFFFF",
                    "base-200": gray[50],
                    "base-300": gray[100],

                    // Button text
                    "base-content": gray[900],
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["light"],

                    // Primary
                    primary: primary[600],
                    "primary-content": primary[50],

                    // Tooltip, mockup-code background
                    neutral: gray[800],
                    // Tooltip text
                    "neutral-content": gray[50],

                    // Used for blank backgrounds
                    "base-100": "#000000",
                    "base-200": gray[950],
                    "base-300": gray[900],

                    // Button text
                    "base-content": gray[100],
                },
            },
        ],
    },
}
