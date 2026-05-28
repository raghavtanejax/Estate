export default {
    content: [
        "./index.html",
        "./main.js",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "surface-container-low": "#ebf5ff",
                "surface-dim": "#ccdcea",
                "tertiary-container": "#a6a5a1",
                "on-error": "#ffffff",
                "on-secondary-container": "#526478",
                "surface-container-high": "#daeaf8",
                "error": "#ba1a1a",
                "secondary-container": "#cfe2f9",
                "secondary-fixed": "#d1e4fb",
                "on-secondary-fixed": "#091d2e",
                "on-secondary-fixed-variant": "#36485b",
                "inverse-surface": "#24323d",
                "on-background": "#0e1d27",
                "on-tertiary": "#ffffff",
                "tertiary": "#5e5e5b",
                "surface-tint": "#775a19",
                "primary-fixed-dim": "#e9c176",
                "on-tertiary-fixed": "#1b1c19",
                "secondary-fixed-dim": "#b5c8df",
                "primary": "#775a19",
                "surface-container-lowest": "#ffffff",
                "surface-container-highest": "#d5e4f2",
                "surface-variant": "#d5e4f2",
                "tertiary-fixed": "#e4e2dd",
                "error-container": "#ffdad6",
                "surface-bright": "#f6faff",
                "on-primary-container": "#4e3700",
                "secondary": "#4e6073",
                "primary-container": "#c5a059",
                "outline-variant": "#d1c5b4",
                "on-primary": "#ffffff",
                "on-error-container": "#93000a",
                "on-surface": "#0e1d27",
                "on-secondary": "#ffffff",
                "surface": "#f6faff",
                "outline": "#7f7667",
                "on-primary-fixed": "#261900",
                "on-primary-fixed-variant": "#5d4201",
                "inverse-primary": "#e9c176",
                "on-surface-variant": "#4e4639",
                "primary-fixed": "#ffdea5",
                "tertiary-fixed-dim": "#c8c6c2",
                "on-tertiary-fixed-variant": "#474744",
                "surface-container": "#e0f0fe",
                "inverse-on-surface": "#e5f2ff",
                "on-tertiary-container": "#3b3b38",
                "background": "#f6faff"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "gutter": "32px",
                "unit": "8px",
                "margin-desktop": "64px",
                "container-max": "1280px",
                "section-gap": "120px",
                "margin-mobile": "20px"
            },
            "fontFamily": {
                "sans": ["Montserrat", "sans-serif"],
                "display": ["Playfair Display", "serif"]
            },
            "fontSize": {
                "display-lg-mobile": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "300" }],
                "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                "button": ["14px", { "lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500" }],
                "headline-md": ["32px", { "lineHeight": "40px", "fontWeight": "400" }],
                "headline-sm": ["24px", { "lineHeight": "32px", "fontWeight": "400" }],
                "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "300" }],
                "label-caps": ["12px", { "lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "600" }],
                "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }]
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries')
    ],
};
