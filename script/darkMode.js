function toggleTheme() {
    const bodyElement = document.querySelector("body")
    const themeButton = document.querySelector("#themeToggle")

    bodyElement.classList.toggle("dark-mode")

    if (bodyElement.classList.contains) {
        themeButton.textContent = "Modo Escuro"
    } else {
        hemeButton.textContent = "Modo Claro"
    }
}
