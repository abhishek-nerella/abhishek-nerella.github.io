document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer span");
    const themeToggle = document.querySelector(".theme-toggle");

    if (footer) {
        footer.textContent =
            `© ${new Date().getFullYear()} Abhishek Nerella`;
    }

    if (themeToggle) {
        const updateThemeToggle = () => {
            const isDark = document.documentElement.dataset.theme === "dark";
            themeToggle.setAttribute(
                "aria-label",
                isDark ? "Switch to light mode" : "Switch to dark mode"
            );
            themeToggle.querySelector("span").textContent = isDark ? "☼" : "◐";
        };

        themeToggle.addEventListener("click", () => {
            const nextTheme =
                document.documentElement.dataset.theme === "dark"
                    ? "light"
                    : "dark";
            document.documentElement.dataset.theme = nextTheme;
            localStorage.setItem("theme", nextTheme);
            updateThemeToggle();
        });

        updateThemeToggle();
    }
});