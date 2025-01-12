import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tailwind from "eslint-plugin-tailwindcss";
import tsParser from "@typescript-eslint/parser";

export default [
    ...eslintPluginAstro.configs.recommended,
    ...tailwind.configs["flat/recommended"],
    {
        files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx,astro}"],
        ...jsxA11y.flatConfigs.recommended,
    },
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsParser,
        },
    },
    {
        rules: {
            "no-console": "warn",
        },
    },
];
