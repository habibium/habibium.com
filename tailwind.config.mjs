/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                text: "var(--text)",
                bg: "var(--bg)",
                primary: "var(--primary)",
                hyperlink: "var(--hyperlink)",
                muted: "var(--muted)",
                card: "var(--card)",
            },
        },
    },
    plugins: [],
};
