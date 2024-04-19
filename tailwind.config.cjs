/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
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
                    primary: "#EF347C",
                    "primary-content": "#FFEBEE",

                    // Gray
                    neutral: "#383D47",
                    "neutral-content": "#F7F8FB",
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["black"],

                    // Primary
                    primary: "#EF347C",
                    "primary-content": "#FFEBEE",
                },
            },
        ],
    },
}
