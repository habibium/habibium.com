import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
    ...eslintPluginAstro.configs.recommended,
    {
        files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx,astro}"],
        ...jsxA11y.flatConfigs.strict,
    },
    {
        rules: {
            "no-console": "warn",
            "astro/prefer-class-list-directive": "error",
            "astro/jsx-a11y/alt-text": "error",
        },
    },
];
