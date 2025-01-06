/** @type {import("prettier").Config} */
export default {
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
    semi: true,
    tabWidth: 4,
    useTabs: false,
    bracketSpacing: true,
    bracketSameLine: true,
    printWidth: 120,
    arrowParens: "always",
    singleQuote: false,
    jsxSingleQuote: false,
    trailingComma: "all",
    singleAttributePerLine: true,
};
