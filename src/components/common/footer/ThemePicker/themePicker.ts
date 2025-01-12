const themeOptions = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
];

const themeValues = themeOptions.map((o) => o.value);

function initTheme() {
    let theme = localStorage.getItem("theme");
    if (!(typeof theme === "string" && themeValues.includes(theme))) theme = "system";
    document.documentElement.setAttribute("data-theme", theme);
    (document.querySelector(`input[name="theme"][value="${theme}"]`) as HTMLInputElement).checked = true;
}

function handleThemeChange() {
    document.querySelectorAll('input[name="theme"]').forEach((input) => {
        input.addEventListener("change", (e) => {
            const theme = (e.target as HTMLInputElement).value;
            if (themeValues.includes(theme)) {
                document.documentElement.setAttribute("data-theme", theme);
                localStorage.setItem("theme", theme);
            }
        });
    });
}

export { themeOptions, themeValues, initTheme, handleThemeChange };
