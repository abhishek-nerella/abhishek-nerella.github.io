document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer span");

    if (footer) {
        footer.textContent =
            `© ${new Date().getFullYear()} Abhishek Nerella`;
    }
});