function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
    return "system";
}

function setTheme(theme: string) {
    const effectiveTheme = theme === "system" ? getSystemTheme() : theme;
    document.documentElement.setAttribute("data-theme", effectiveTheme);
    localStorage.setItem("theme", theme);
}

function initTheme() {
    setTheme(getTheme());

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (localStorage.getItem("theme") === "system") {
            setTheme("system");
        }
    });
}

export { initTheme, setTheme, getTheme };
