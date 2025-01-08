function getPreferredTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme: string) {
    document.documentElement.setAttribute("data-theme", theme);
}

function initTheme() {
    setTheme(getPreferredTheme());

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        console.log("Theme changed", e.matches);
        if (!localStorage.getItem("theme")) {
            setTheme(e.matches ? "dark" : "light");
        }
    });
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setTheme(currentTheme === "dark" ? "light" : "dark");
}

export { initTheme, toggleTheme };
