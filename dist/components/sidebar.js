import { dashConfig } from "../data/dashConfig.js";
import { ThemeManager } from "../models/toggleManager.js";
import { showAlert } from "./showAlert.js";
export function handleSidebar(states) {
    const sidebar = document.getElementById("sidebar");
    const current = states[0];
    // --- Sidebar theme ---
    sidebar.className = current.theme === "dark" ? "sidebar-dark" : "sidebar-light";
    // --- Sidebar open/close ---
    if (current.state === "close" || current.state === false) {
        sidebar.classList.add("closed");
    }
    else {
        sidebar.classList.remove("closed");
    }
    // --- BODY THEME ---
    const body = document.body;
    if (current.theme === "light") {
        body.classList.add("body-dark");
        body.classList.remove("body-light");
    }
    else {
        body.classList.add("body-light");
        body.classList.remove("body-dark");
    }
}
export function initSidebarListeners() {
    const cfg = dashConfig[0];
    if (!cfg)
        return;
    const themeManager = new ThemeManager();
    const openBtn = document.getElementById("openSidebar");
    const closeBtn = document.getElementById("closeSidebar");
    const toggleBtn = document.getElementById("toggleTheme");
    const icon = document.getElementById("themeIcon");
    // --- ICONO INICIAL ---
    icon.textContent = cfg.theme === "dark" ? "🌙" : "☀️";
    // --- ABRIR SIDEBAR ---
    openBtn === null || openBtn === void 0 ? void 0 : openBtn.addEventListener("click", () => {
        cfg.state = "open";
        handleSidebar(dashConfig);
    });
    // --- CERRAR SIDEBAR ---
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", () => {
        cfg.state = "close";
        showAlert({ code: 0, message: "Sidebar cerrado", type: "info" });
        handleSidebar(dashConfig);
    });
    // --- CAMBIO DE TEMA + ICONO ---
    toggleBtn === null || toggleBtn === void 0 ? void 0 : toggleBtn.addEventListener("click", () => {
        cfg.theme = themeManager.toggleTheme();
        // Cambiar icono sin romper el tipo Theme
        icon.textContent = themeManager.getTheme() === "dark" ? "🌙" : "☀️";
        handleSidebar(dashConfig);
    });
}
//# sourceMappingURL=sidebar.js.map